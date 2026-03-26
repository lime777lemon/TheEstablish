import { Resend } from "resend";

/**
 * Vercel Serverless: Supabase Database Webhook → Resend で info@ に通知
 * 環境変数: INQUIRY_WEBHOOK_SECRET, RESEND_API_KEY
 * 宛先・送信元（優先順）: INQUIRY_TO_EMAIL / NOTIFY_TO_EMAIL、RESEND_FROM / NOTIFY_FROM_EMAIL
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
  try {
    if (req.method !== "POST") {
      res.status(405).setHeader("Allow", "POST").json({ error: "method_not_allowed" });
      return;
    }

    const expected = (process.env.INQUIRY_WEBHOOK_SECRET || "").trim();
    if (!expected) {
      console.error("[inquiry] missing_inquiry_webhook_secret (set INQUIRY_WEBHOOK_SECRET in Vercel Production, redeploy)");
      res.status(500).json({
        error: "missing_inquiry_webhook_secret",
        hint: "Vercel に INQUIRY_WEBHOOK_SECRET を設定し Redeploy",
      });
      return;
    }

    const got = readIncomingWebhookSecret(req);
    if (!got || got !== expected) {
      res.status(401).json({
        error: "webhook_secret_mismatch",
        hint: "Supabase Webhook のヘッダーと Vercel の INQUIRY_WEBHOOK_SECRET を同一に",
      });
      return;
    }

    let payload = req.body;
    if (payload == null || payload === "") {
      res.status(400).json({ error: "empty_body", hint: "JSON ボディが空です" });
      return;
    }
    if (typeof payload === "string") {
      try {
        payload = JSON.parse(payload);
      } catch {
        res.status(400).json({ error: "invalid_json" });
        return;
      }
    }

    // Supabase: { type, table, record, schema } 形式
    const rec = payload?.record ?? payload?.new ?? payload;
    const name = rec?.name;
    const email = rec?.email;
    const message = rec?.message;
    if (!name || !email || !message) {
      res.status(400).json({
        error: "missing_fields",
        hint: "record に name, email, message があるか確認（Supabase の Webhook ペイロード）",
      });
      return;
    }

    const resendKey = (process.env.RESEND_API_KEY || "").trim();
    if (!resendKey) {
      console.error("[inquiry] missing_resend_key (set RESEND_API_KEY in Vercel Production, redeploy)");
      res.status(500).json({
        error: "missing_resend_key",
        hint: "Vercel に RESEND_API_KEY を設定し Redeploy",
      });
      return;
    }

    const to =
      (process.env.INQUIRY_TO_EMAIL || process.env.NOTIFY_TO_EMAIL || "info@theestablish.jp").trim();
    const from = (
      process.env.RESEND_FROM ||
      process.env.NOTIFY_FROM_EMAIL ||
      "The Establish <onboarding@resend.dev>"
    ).trim();

    const resend = new Resend(resendKey);

    console.log("[DEBUG] ABOUT TO SEND EMAIL");
    console.log("[DEBUG] TO:", process.env.INQUIRY_TO_EMAIL ?? process.env.NOTIFY_TO_EMAIL ?? to);
    console.log("[DEBUG] FROM:", process.env.RESEND_FROM ?? process.env.NOTIFY_FROM_EMAIL ?? from);

    const text = `Webサイトのお問い合わせフォームより\n\n名前: ${name}\nメール: ${email}\n\n---\n${message}\n`;

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      reply_to: email,
      subject: `[The Establish お問い合わせ] ${name}`,
      text,
    });

    if (error) {
      console.error("Resend error", error);
      res.status(502).json({
        error: "resend_failed",
        status: error.statusCode,
        message: error.message,
      });
      return;
    }

    res.status(200).json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("notify-inquiry", e);
    res.status(500).json({ error: "internal", message: e instanceof Error ? e.message : String(e) });
  }
}
