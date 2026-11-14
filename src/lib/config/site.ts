import type { Locale } from '$lib/types/content';

export const SITE_CONFIG = {
  domain: 'https://manuelrodz.work',
  authorName: 'Manuel Enrique Rodríguez Nicolás',
  brandWordmark: 'Manuel Rodríguez',
  /**
   * CONFIGURACIÓN PERSONAL PENDIENTE DE INSERCIÓN:
   * Sustituye `contactEmail` y `githubProfileUrl` con tus enlaces definitivos antes de publicar.
   * Si dejas `contactEmail` vacío, la interfaz mostrará un aviso limpio sin enlaces rotos.
   */
  contactEmail: '',
  githubProfileUrl: '',
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

