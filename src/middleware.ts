import type { MiddlewareHandler } from "astro";
import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE } from "~/constants/locales";
import { isSupportedLocale } from "~/utils/is-supported-locale";

export const onRequest: MiddlewareHandler = async (context, next) => {
  // If the user requests the root page ("/"), redirect to either
  // the preferred locale homepage or the language selection page.
  if (context.url.pathname === "/") {
    const redirectURL = isSupportedLocale(context.preferredLocale)
      ? getRelativeLocaleUrl(context.preferredLocale)
      : "/select-language";

    return context.redirect(redirectURL, 302);
  }

  // If the response status is 404, rewrite to the localized 404 page using either
  // a valid locale URL path prefix, the `accept-language` header or the default locale.
  const response = await next();
  if (response.status !== 404) return response;

  const firstPathSegment = context.url.pathname.split("/")[1];
  const hasSupportedLocalePrefix = isSupportedLocale(firstPathSegment);

  context.locals.hasSupportedLocalePrefix = hasSupportedLocalePrefix;
  context.locals.languageToggleOriginalPathname = context.url.pathname;

  const targetLocale = hasSupportedLocalePrefix
    ? firstPathSegment
    : isSupportedLocale(context.preferredLocale)
      ? context.preferredLocale
      : DEFAULT_LOCALE;

  return context.rewrite(getRelativeLocaleUrl(targetLocale, "/404"));
};
