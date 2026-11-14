function getProjectPath(locale, slug) {
  return locale === "es" ? `/es/proyectos/${slug}` : `/en/projects/${slug}`;
}
function getPrivacyPath(locale) {
  return locale === "es" ? "/es/privacidad" : "/en/privacy";
}
function getCvPath(locale) {
  return `/${locale}/cv`;
}
function getHomePath(locale) {
  return `/${locale}`;
}
function getAlternateLocalePath(pathname, targetLocale) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const projectMatch = clean.match(/^\/(es|en)\/(proyectos|projects)\/([^/]+)$/);
  if (projectMatch) {
    const slug = projectMatch[3];
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
export {
  getAlternateLocalePath as a,
  getHomePath as b,
  getCvPath as c,
  getProjectPath as d,
  getPrivacyPath as g
};
