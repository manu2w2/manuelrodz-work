import type { Locale, ProjectSlug } from '$lib/types/content';

export function getProjectPath(locale: Locale, slug: ProjectSlug): string {
  return locale === 'es' ? `/es/proyectos/${slug}` : `/en/projects/${slug}`;
}

export function getPrivacyPath(locale: Locale): string {
  return locale === 'es' ? '/es/privacidad' : '/en/privacy';
}

export function getCvPath(locale: Locale): string {
  return `/${locale}/cv`;
}

export function getHomePath(locale: Locale): string {
  return `/${locale}`;
}

/**
 * Traduce cualquier ruta activa a su equivalente exacto en el otro idioma
 * sin devolver al usuario a la portada.
 */
export function getAlternateLocalePath(pathname: string, targetLocale: Locale): string {
  const clean = pathname.replace(/\/+$/, '') || '/';

  const projectMatch = clean.match(/^\/(es|en)\/(proyectos|projects)\/([^/]+)$/);
  if (projectMatch) {
    const slug = projectMatch[3] as ProjectSlug;
    return getProjectPath(targetLocale, slug);
  }

  if (/^\/(es|en)\/cv$/.test(clean)) {
    return getCvPath(targetLocale);
  }

  if (/^\/(es|en)\/(privacidad|privacy)$/.test(clean)) {
    return getPrivacyPath(targetLocale);
  }

  return getHomePath(targetLocale);
}

