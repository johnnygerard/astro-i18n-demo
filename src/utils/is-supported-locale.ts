import { LOCALES } from "~/constants/locales";
import type { Locale } from "~/types/locale";

export const isSupportedLocale = (value: string | undefined): value is Locale =>
  Object.values(LOCALES).includes(value as Locale);
