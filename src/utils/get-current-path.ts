import type { AstroGlobal } from "astro";

export const getCurrentPath = ({ locals, url }: AstroGlobal) =>
  (locals.requestPathBeforeRewrite ?? url.pathname).replace(/\.html$/, "");
