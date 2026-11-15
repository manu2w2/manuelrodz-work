import { SITE_CONFIG } from '$lib/config/site';
import { contentEn } from '$lib/data/en';
import { contentEs } from '$lib/data/es';
import type { RequestHandler } from './$types';

export const prerender = true;

interface Pair {
  es: string;
  en: string;
}

const pairs: Pair[] = [
  { es: '/es', en: '/en' },
  { es: '/es/cv', en: '/en/cv' },
  { es: '/es/privacidad', en: '/en/privacy' },
  ...contentEs.projectsSection.items.map((project, index) => ({
    es: `/es/proyectos/${project.slug}`,
    en: `/en/projects/${contentEn.projectsSection.items[index].slug}`
  }))
];

const url = (path: string) => `${SITE_CONFIG.domain}${path}`;

export const GET: RequestHandler = () => {
  const entries = pairs
    .flatMap(({ es, en }) =>
      [es, en].map(
        (loc) => `  <url>
    <loc>${url(loc)}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${url(es)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${url(en)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(es)}" />
  </url>`
      )
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
