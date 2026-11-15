import type { Locale } from '$lib/types/content';

export const SITE_CONFIG = {
  domain: 'https://manuelrodz.work',
  authorName: 'Manuel Enrique Rodríguez Nicolás',
  brandWordmark: 'Manuel Rodríguez',
  
  contactEmail: 'contact@manuelrodz.work',
  githubProfileUrl: 'https://github.com/manu2w2',
  heroImage: {
    src: '/images/hero-robot.jpg',
    fallbackSrc: '/images/manuel-rodriguez-placeholder.svg',
    width: 480,
    height: 330,
    sizes: '(min-width: 1100px) 480px, (min-width: 700px) 45vw, 92vw',
    widths: [480, 960, 1440]
  },
  ogImage: {
    src: '/images/og.png',
    width: 1200,
    height: 630
  },
  cvFiles: {
    es: {
      href: '/cv/manuel-rodriguez-cv-es.pdf',
      filename: 'Manuel-Rodriguez-CV-ES.pdf'
    },
    en: {
      href: '/cv/manuel-rodriguez-cv-en.pdf',
      filename: 'Manuel-Rodriguez-CV-EN.pdf'
    }
  } satisfies Record<Locale, { href: string; filename: string }>
} as const;

