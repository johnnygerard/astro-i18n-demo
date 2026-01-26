// Allow importing Astro components in TypeScript files without causing errors.
declare module "*.astro";

/**
 * Code generated from `npm create cloudflare@latest -- my-astro-app --framework=astro`
 * @see https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
 */
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    hasSupportedLocalePrefix?: boolean;
    languageToggleOriginalPathname?: string;
  }
}
