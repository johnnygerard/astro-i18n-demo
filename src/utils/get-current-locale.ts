import type { AstroGlobal } from "astro";
import { isSupportedLocale } from "./is-supported-locale";

export const getCurrentLocale = ({ currentLocale }: AstroGlobal) => {
  if (isSupportedLocale(currentLocale)) return currentLocale;
  throw new Error(`Invalid locale: ${currentLocale}`);
};
