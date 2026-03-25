import { createClient } from "@supabase/supabase-js";

function getSupabaseConfig() {
  const w = typeof window !== "undefined" ? window.__TE_SUPABASE__ || {} : {};
  const env = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : {};
  return {
    url: (w.url || env.VITE_SUPABASE_URL || "").trim(),
    anonKey: (w.anonKey || env.VITE_SUPABASE_ANON_KEY || "").trim(),
  };
}

function msg(id) {
  const el = document.getElementById(id);
  return el?.textContent?.trim() || "";
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successEl = document.getElementById("contact-form-success");
  const errorEl = document.getElementById("contact-form-error");
  const submitBtn = form.querySelector(".contact-form-submit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (errorEl) {
      errorEl.hidden = true;
      errorEl.textContent = "";
    }

    const honey = form.querySelector('input[name="_honey"]');
    if (honey && honey.value) {
      form.hidden = true;
      if (successEl) successEl.hidden = false;
      return;
    }

    const cfg = getSupabaseConfig();
    if (!cfg.url || !cfg.anonKey) {
      if (errorEl) {
        errorEl.textContent = msg("contact-i18n-not-configured");
        errorEl.hidden = false;
      }
      return;
    }

    const nameInput = form.querySelector("#contact-name");
    const emailInput = form.querySelector("#contact-email");
    const messageInput = form.querySelector("#contact-message");
    const name = nameInput?.value?.trim();
    const email = emailInput?.value?.trim();
    const message = messageInput?.value?.trim();
    if (!name || !email || !message) return;

    const client = createClient(cfg.url, cfg.anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    if (submitBtn) submitBtn.disabled = true;

    const { error } = await client.from("contact_inquiries").insert({
      name,
      email,
      message,
    });

    if (submitBtn) submitBtn.disabled = false;

    if (error) {
      console.error(error);
      if (errorEl) {
        errorEl.textContent = msg("contact-i18n-error");
        errorEl.hidden = false;
      }
      return;
    }

    form.reset();
    form.hidden = true;
    if (successEl) successEl.hidden = false;
    const u = new URL(window.location.href);
    u.searchParams.set("sent", "1");
    window.history.replaceState({}, "", u);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactForm);
} else {
  initContactForm();
}
