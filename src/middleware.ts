import type { MiddlewareHandler } from "astro";
import { getAbsoluteLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE } from "~/constants/locales";
import { isSupportedLocale } from "~/utils/is-supported-locale";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();

  // If the response status is 404, rewrite to the localized 404 page using either
  // a valid locale URL path prefix, the `accept-language` header or the default locale.
  if (response.status !== 404) return response;

  const firstPathSegment = context.url.pathname.split("/")[1];
  const targetLocale = isSupportedLocale(firstPathSegment)
    ? firstPathSegment
    : isSupportedLocale(context.preferredLocale)
      ? context.preferredLocale
      : DEFAULT_LOCALE;

  return context.rewrite(getAbsoluteLocaleUrl(targetLocale, "/404"));
};
