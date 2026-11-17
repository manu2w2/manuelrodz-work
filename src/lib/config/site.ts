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
    sizes: '(min-width: 76rem) 42rem, (min-width: 54rem) calc(58.55vw - 3.5rem), calc(92vw - 1.5rem)',
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

