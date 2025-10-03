import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.martin-gonzalez-miranda.xyz/es/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.martin-gonzalez-miranda.xyz/en/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://www.martin-gonzalez-miranda.xyz/es/"/>
  </url>
  <url>
    <loc>https://www.martin-gonzalez-miranda.xyz/en/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.martin-gonzalez-miranda.xyz/en/"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://www.martin-gonzalez-miranda.xyz/es/"/>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
