import type { APIRoute } from "astro";
import { publicLocales } from "@data/i18n";
import { commercialLocales, services } from "@data/commercial";
import { withBase } from "@data/paths";

const pages = publicLocales.flatMap((locale) => [
  `/${locale}/`,
  `/${locale}/work/`,
  `/${locale}/stage/`,
  `/${locale}/casting/`
]);

const commercialPages = commercialLocales.flatMap((locale) => [
  `/${locale}/services/`,
  `/${locale}/voice/`,
  `/${locale}/events-hosting/`,
  `/${locale}/press-kit/`,
  `/${locale}/contact/`,
  ...services.map((service) => `/${locale}/services/${service.slug}/`)
]);

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://taisijaboyko.com");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...pages, ...commercialPages]
  .map((page) => `  <url><loc>${new URL(withBase(page), base).toString()}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
