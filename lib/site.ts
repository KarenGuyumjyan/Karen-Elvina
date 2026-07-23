// Resolves the canonical site URL. Used for SEO (metadataBase, Open Graph,
// canonical, robots, sitemap). Server-only — reads Vercel's build-time env.
//
// Priority:
//   1. NEXT_PUBLIC_SITE_URL      — explicit override (e.g. a custom domain)
//   2. VERCEL_PROJECT_PRODUCTION_URL — the stable production domain on Vercel
//   3. VERCEL_URL                — the per-deployment URL (preview builds)
//   4. localhost                 — local dev fallback
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const deployment = process.env.VERCEL_URL;
  if (deployment) return `https://${deployment}`;

  return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl();
