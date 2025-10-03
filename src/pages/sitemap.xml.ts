import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://martingonzalez.dev/es/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://martingonzalez.dev/en/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://martingonzalez.dev/es/"/>
  </url>
  <url>
    <loc>https://martingonzalez.dev/en/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://martingonzalez.dev/en/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://martingonzalez.dev/es/"/>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
