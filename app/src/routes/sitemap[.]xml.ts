import { createFileRoute } from "@tanstack/react-router";

import { locales, localePath, localeTag } from "@/i18n/content";
import { publicOrigin } from "@/lib/public-origin";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = publicOrigin(request);
        const today = new Date().toISOString().split("T")[0];
        const href = (path: string) => `${origin}${path === "/" ? "/" : path}`;

        // Every language is its own URL, and each entry declares the whole set
        // so search engines serve the right one per visitor instead of treating
        // the translations as duplicates.
        const alternates = [
          ...locales.map(
            (locale) =>
              `    <xhtml:link rel="alternate" hreflang="${localeTag[locale]}" href="${href(localePath[locale])}"/>`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${href(localePath.en)}"/>`,
        ].join("\n");

        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...locales.map((locale) =>
            [
              "  <url>",
              `    <loc>${href(localePath[locale])}</loc>`,
              alternates,
              `    <lastmod>${today}</lastmod>`,
              "    <changefreq>weekly</changefreq>",
              `    <priority>${locale === "en" ? "1.0" : "0.9"}</priority>`,
              "  </url>",
            ].join("\n"),
          ),
          "</urlset>",
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
