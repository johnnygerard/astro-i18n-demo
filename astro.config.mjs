import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { DEFAULT_LOCALE, LOCALES } from "./src/constants/locales";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  adapter: cloudflare(),
  build: {
    format: "file",
  },
  experimental: {
    fonts: [
      // Roboto Mono: monospace typeface
      // @see https://fonts.google.com/specimen/Roboto+Mono/about
      {
        cssVariable: "--font-roboto-mono",
        name: "Roboto Mono",
        provider: fontProviders.google(),
        styles: ["normal", "italic"],
        subsets: ["latin"],
        weights: ["100 700"],
      },
      // Merriweather: serif typeface
      // @see https://fonts.google.com/specimen/Merriweather/about
      {
        cssVariable: "--font-merriweather",
        name: "Merriweather",
        provider: fontProviders.google(),
        styles: ["normal", "italic"],
        subsets: ["latin"],
        weights: ["300 900"],
      },
    ],
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
  site: "https://astro-i18n-demo.mail-25a.workers.dev",
  trailingSlash: "never",
  vite: {
    plugins: [
      // @ts-expect-error https://github.com/withastro/astro/issues/14030
      tailwindcss(),
    ],
  },
});
