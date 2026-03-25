# お問い合わせを Gmail（受信箱）に届ける

## なぜ届かないか

フォームは **Supabase のテーブル `contact_inquiries` に保存するだけ**です。  
**行が増えてもメールは自動では送られません。** Gmail に届くには、別途「通知用のメール送信」を用意する必要があります。

## 推奨構成（このリポジトリ用）

1. **Resend**（メール送信 API）で `info@theestablish.jp` などに送る  
2. **Vercel** の `api/notify-inquiry.js` が Resend を呼ぶ  
3. **Supabase Database Webhook** が `INSERT` のたびにその API を叩く  

## 手順の概要

### 1. Resend

1. [resend.com](https://resend.com) でアカウント作成  
2. API Keys からキーを発行  
3. 本番では **ドメイン `theestablish.jp` を追加**し、DNS を案内どおり設定  
4. `From` には検証済みドメインのメール（例: `contact@theestablish.jp`）を使う

（検証前のテストでは `onboarding@resend.dev` から、登録メール宛のみ送れる制限があります。）

### 2. Vercel の環境変数

プロジェクト → **Settings → Environment Variables** に追加:

| Name | 例 |
|------|-----|
| `INQUIRY_WEBHOOK_SECRET` | 長いランダム文字列（Webhook と同じ値を後で Supabase にも） |
| `RESEND_API_KEY` | Resend の API キー |
| `NOTIFY_TO_EMAIL` | `info@theestablish.jp`（受け取りたい Gmail 等） |
| `NOTIFY_FROM_EMAIL` | `The Establish <contact@theestablish.jp>`（Resend で検証した From） |

デプロイをやり直して反映させます。

### 3. Supabase Database Webhook

1. Supabase Dashboard → **Database** → **Webhooks**（または Integrations）  
2. **Create a new hook**  
3. **Table**: `contact_inquiries`  
4. **Events**: `INSERT` のみ  
5. **HTTP Request**  
   - URL: `https://（あなたのVercelドメイン）/api/notify-inquiry`  
   - Method: `POST`  
   - Headers に例: `Content-Type` = `application/json` と `X-Webhook-Secret` = （`INQUIRY_WEBHOOK_SECRET` と同じ文字列）  

6. 保存後、テスト送信でフォームから送り、Vercel の **Functions** ログとメール受信を確認  

## トラブル時

- Vercel の **Deployments → Functions → notify-inquiry** のログを確認  
- `401` → Webhook のヘッダーと `INQUIRY_WEBHOOK_SECRET` が一致しているか  
- `502` / Resend エラー → API キー、`from` ドメイン検証、送信先制限を確認  

## 代替案

- **Make / Zapier**: Supabase の新規行 → Gmail 送信（ノーコード）  
- **Supabase Edge Functions** から Resend を呼ぶ（Vercel を使わない構成）
