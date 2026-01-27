# Astro Internationalization Demo

![project status](https://img.shields.io/badge/project_status-active-success?style=for-the-badge)
[![live site](https://img.shields.io/badge/live_site-blue?style=for-the-badge)](https://astro-i18n-demo.mail-25a.workers.dev/)

## Overview

This demo project showcases a multilingual website for German and English speakers using [Astro i18n](https://docs.astro.build/en/guides/internationalization/) capabilities and [Cloudflare Workers](https://workers.cloudflare.com/) for hosting.

## Tech Stack

### Frontend

- **Framework**: [Astro 5](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Backend

- **Hosting**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Routing

The root page (`/`) uses [Astro middleware](https://docs.astro.build/en/guides/middleware/) to read the `Accept-Language` header and redirect users to the most appropriate localized version of the site. If no match is found, the user is redirected to the language selection page (`/select-language`).

Astro middleware is also used to serve localized 404 pages.

## URL Structure

The current project uses subdirectory-based localization with the following URL structure:

- Home page:
  - English: [/en](https://astro-i18n-demo.mail-25a.workers.dev/en)
  - German: [/de](https://astro-i18n-demo.mail-25a.workers.dev/de)
- Work page:
  - English: [/en/work](https://astro-i18n-demo.mail-25a.workers.dev/en/work)
  - German: [/de/work](https://astro-i18n-demo.mail-25a.workers.dev/de/work)

Note that the contact pages ([/en/contact](https://astro-i18n-demo.mail-25a.workers.dev/en/contact) and [/de/contact](https://astro-i18n-demo.mail-25a.workers.dev/de/contact))
have been omitted to demonstrate the handling of localized 404 pages.

## Sitemap

The following sitemap is automatically generated using the [Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) integration:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://astro-i18n-demo.mail-25a.workers.dev/de</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://astro-i18n-demo.mail-25a.workers.dev/de" />
    <xhtml:link rel="alternate" hreflang="en" href="https://astro-i18n-demo.mail-25a.workers.dev/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://astro-i18n-demo.mail-25a.workers.dev/en" />
  </url>
  <url>
    <loc>https://astro-i18n-demo.mail-25a.workers.dev/de/work</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://astro-i18n-demo.mail-25a.workers.dev/de/work" />
    <xhtml:link rel="alternate" hreflang="en" href="https://astro-i18n-demo.mail-25a.workers.dev/en/work" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://astro-i18n-demo.mail-25a.workers.dev/en/work" />
  </url>
  <url>
    <loc>https://astro-i18n-demo.mail-25a.workers.dev/en</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://astro-i18n-demo.mail-25a.workers.dev/de" />
    <xhtml:link rel="alternate" hreflang="en" href="https://astro-i18n-demo.mail-25a.workers.dev/en" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://astro-i18n-demo.mail-25a.workers.dev/en" />
  </url>
  <url>
    <loc>https://astro-i18n-demo.mail-25a.workers.dev/en/work</loc>
    <xhtml:link rel="alternate" hreflang="de" href="https://astro-i18n-demo.mail-25a.workers.dev/de/work" />
    <xhtml:link rel="alternate" hreflang="en" href="https://astro-i18n-demo.mail-25a.workers.dev/en/work" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://astro-i18n-demo.mail-25a.workers.dev/en/work" />
  </url>
</urlset>
```

## How to Update

To check for outdated packages, run `npm outdated`.

```bash
# Update dependencies (this will rewrite package-lock.json and package.json)
npm update --save
npm install --save-exact --save-dev prettier@latest prettier-plugin-astro@latest prettier-plugin-tailwindcss@latest
```

## Notes

- `.nvmrc` is used primarily as a way to specify the Node.js version for Cloudflare Workers (see [Build image](https://developers.cloudflare.com/workers/ci-cd/builds/build-image/))
- The GitHub Action `actions/setup-node@v6` relies on both `package.json` `engines` and `devEngines` to set the Node.js version and automatically cache npm dependencies.

## Dev Environment & Tools

- **System**: [Ubuntu](https://ubuntu.com/desktop)
- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **AI assistant**: [GitHub Copilot](https://github.com/features/copilot)

## Copyright

© 2026 Johnny Gérard
