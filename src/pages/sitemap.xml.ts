import type { APIRoute } from "astro";
import { locales } from "@data/i18n";

const pages = locales.flatMap((locale) => [
  `/${locale}/`,
  `/${locale}/work/`,
  `/${locale}/stage/`,
  `/${locale}/casting/`
]);

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://taisijaboyko.com");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => `  <url><loc>${new URL(page, base).toString()}</loc></url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
