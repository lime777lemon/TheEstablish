import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        webProgramming: "web-programming.html",
        about: "about.html",
        clientServices: "client-services.html",
        company: "company.html",
        tokushoho: "tokushoho.html",
        terms: "terms.html",
        privacy: "privacy.html",
        contact: "contact.html",
      },
    },
  },
});
