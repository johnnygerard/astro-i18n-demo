import type { AstroGlobal } from "astro";
import { LOCALES } from "~/constants/locales";
import type { Locale } from "~/types/locale";

export const getCurrentLocale = ({ currentLocale }: AstroGlobal) => {
  if (Object.values(LOCALES).some((locale) => locale === currentLocale))
    return currentLocale as Locale;

  throw new Error(`Invalid locale: ${currentLocale}`);
};
