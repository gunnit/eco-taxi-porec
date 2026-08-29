import { createFileRoute } from "@tanstack/react-router";

import { publicOrigin } from "@/lib/public-origin";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = publicOrigin(request);
        const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${origin}/sitemap.xml`].join("\n");
        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
