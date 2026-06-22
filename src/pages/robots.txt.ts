import type { APIRoute } from "astro";
import { withBase } from "@data/paths";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://taisijaboyko.com");
  const sitemap = new URL(withBase("/sitemap.xml"), base).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: {
      "Content-Type": "text/plain"
    }
  });
};
