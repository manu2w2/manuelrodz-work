import type { Locale } from '$lib/types/content';

export const SITE_CONFIG = {
  domain: 'https://manuelrodz.work',
  authorName: 'Manuel Enrique Rodríguez Nicolás',
  brandWordmark: 'Manuel Rodríguez',
  
  contactEmail: 'contact@manuelrodz.work',
  githubProfileUrl: 'https://github.com/manu2w2',
  profileImage: {
    src: '/images/hero-robot.png',
    fallbackSrc: '/images/manuel-rodriguez-placeholder.svg',
    alt: 'Manuel Enrique Rodríguez Nicolás — Fotografía documental de perfil',
    caption: 'Mérida, Yucatán · 2026'
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

