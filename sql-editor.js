const STORAGE_KEY = "the-establish-sql-editor-draft";

const TEMPLATE_CONTACT_INQUIRIES = `-- Supabase SQL Editor で実行してください。
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
`;

function $(id) {
  return document.getElementById(id);
}

function setStatus(text) {
  const el = $("sql-ed-status");
  if (el) el.textContent = text || "";
}

let saveTimer;
function scheduleSave(value) {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      setStatus("下書きを保存しました");
      setTimeout(() => setStatus(""), 2000);
    } catch (_) {
      setStatus("保存できませんでした（ストレージ制限等）");
    }
  }, 400);
}

function init() {
  const ta = $("sql-ed-text");
  if (!ta) return;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) ta.value = saved;
  } catch (_) {}

  ta.addEventListener("input", () => scheduleSave(ta.value));

  $("sql-ed-copy")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(ta.value);
      setStatus("クリップボードにコピーしました");
      setTimeout(() => setStatus(""), 2000);
    } catch (_) {
      setStatus("コピーに失敗しました");
    }
  });

  $("sql-ed-clear")?.addEventListener("click", () => {
    if (ta.value && !window.confirm("エディタを空にしますか？")) return;
    ta.value = "";
    scheduleSave("");
    setStatus("クリアしました");
    setTimeout(() => setStatus(""), 2000);
  });

  $("sql-ed-template-contact")?.addEventListener("click", () => {
    if (ta.value.trim() && !window.confirm("現在の内容をテンプレートで置き換えますか？")) return;
    ta.value = TEMPLATE_CONTACT_INQUIRIES;
    scheduleSave(ta.value);
    setStatus("contact_inquiries テンプレートを読み込みました");
    setTimeout(() => setStatus(""), 2500);
  });

  $("sql-ed-save-now")?.addEventListener("click", () => {
    try {
      localStorage.setItem(STORAGE_KEY, ta.value);
      setStatus("保存しました");
      setTimeout(() => setStatus(""), 2000);
    } catch (_) {
      setStatus("保存に失敗しました");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
