-- Supabase SQL Editor で実行してください。
-- Table: public.contact_inquiries（お問い合わせフォームからの行のみ INSERT）

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);

comment on table public.contact_inquiries is 'Website contact form submissions';

alter table public.contact_inquiries enable row level security;

-- 匿名（anon）キーからは INSERT のみ許可。SELECT はダッシュボードの SQL / service_role で閲覧。
drop policy if exists "Allow anon insert contact_inquiries" on public.contact_inquiries;
create policy "Allow anon insert contact_inquiries"
  on public.contact_inquiries
  for insert
  to anon
  with check (true);
