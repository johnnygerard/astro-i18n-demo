import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE, LOCALES } from "./src/constants/locales";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  adapter: cloudflare(),
  build: {
    format: "file",
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: Object.values(LOCALES),
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: {
          [LOCALES.DE]: LOCALES.DE,
          [LOCALES.EN]: LOCALES.EN,
        },
      },
    }),
  ],
  site: `https://placeholder.example`,
  trailingSlash: "never",
  vite: {
    plugins: [
      // @ts-expect-error https://github.com/withastro/astro/issues/14030
      tailwindcss(),
    ],
  },
});
