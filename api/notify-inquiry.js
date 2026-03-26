/**
 * Vercel Serverless: Supabase Database Webhook → Resend で info@ に通知
 * 環境変数: INQUIRY_WEBHOOK_SECRET, RESEND_API_KEY, NOTIFY_TO_EMAIL, NOTIFY_FROM_EMAIL（任意）
 *
 * 認証: Vercel の INQUIRY_WEBHOOK_SECRET と、次のいずれかが一致すること
 * - ヘッダー x-webhook-secret / x-supabase-webhook-secret
 * - ヘッダー Authorization: Bearer <同じ文字列>
 * （Node はヘッダー名を小文字化するため小文字キーで参照）
 */
function readIncomingWebhookSecret(req) {
  const h = req.headers;
  const direct =
    h["x-webhook-secret"] ||
    h["x-supabase-webhook-secret"] ||
    h["x-hook-secret"];
  if (direct) return String(direct).trim();

  const auth = h["authorization"];
  if (!auth) return "";
  const s = String(auth).trim();
  if (s.toLowerCase().startsWith("bearer ")) return s.slice(7).trim();
  return s;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).setHeader("Allow", "POST").json({ error: "method_not_allowed" });
    return;
  }

  const expected = (process.env.INQUIRY_WEBHOOK_SECRET || "").trim();
  if (!expected) {
    res
      .status(500)
      .json({ error: "missing_inquiry_webhook_secret", hint: "Set INQUIRY_WEBHOOK_SECRET in Vercel env" });
    return;
  }

  const got = readIncomingWebhookSecret(req);
  if (!got || got !== expected) {
    res.status(401).json({
      error: "webhook_secret_mismatch",
      hint: "Supabase Webhook のヘッダー（x-webhook-secret または Authorization: Bearer）を Vercel と同じ値に",
    });
    return;
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      res.status(400).json({ error: "invalid_json" });
      return;
    }
  }

  const rec = payload.record || payload.new || payload;
  const name = rec?.name;
  const email = rec?.email;
  const message = rec?.message;
  if (!name || !email || !message) {
    res.status(400).json({ error: "missing_fields" });
    return;
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    res.status(500).json({ error: "missing_resend_key" });
    return;
  }

  const to = process.env.NOTIFY_TO_EMAIL || "info@theestablish.jp";
  const from =
    process.env.NOTIFY_FROM_EMAIL || "The Establish <onboarding@resend.dev>";

  const text = `Webサイトのお問い合わせフォームより\n\n名前: ${name}\nメール: ${email}\n\n---\n${message}\n`;

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[The Establish お問い合わせ] ${name}`,
      text,
    }),
  });

  const raw = await r.text();
  if (!r.ok) {
    console.error("Resend error", r.status, raw);
    res.status(502).json({ error: "resend_failed", status: r.status });
    return;
  }

  res.status(200).json({ ok: true });
}
