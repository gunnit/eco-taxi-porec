/**
 * The origin a visitor actually typed, for use in crawler-facing output.
 *
 * Behind a TLS-terminating proxy (Render, and most Node hosts) the inbound
 * `request.url` is plain http://, so building canonical URLs from it advertises
 * the wrong origin — and search engines treat http:// and https:// as separate
 * sites. Prefer the forwarded headers and fall back to the request itself, which
 * is already correct on Cloudflare Workers and in local dev.
 */
export function publicOrigin(request: Request): string {
  const url = new URL(request.url);

  // Both headers may carry a comma-separated proxy chain; the first hop is the
  // one the client actually spoke to.
  const firstHop = (value: string | null) => value?.split(",")[0]?.trim() || undefined;

  const protocol = firstHop(request.headers.get("x-forwarded-proto")) ?? url.protocol.replace(":", "");
  const host = firstHop(request.headers.get("x-forwarded-host")) ?? url.host;

  return `${protocol}://${host}`;
}
