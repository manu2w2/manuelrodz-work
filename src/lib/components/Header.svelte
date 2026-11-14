<script lang="ts">
  import { page } from '$app/stores';
  import { SITE_CONFIG } from '$lib/config/site';
  import type { Locale, SiteContent } from '$lib/types/content';
  import {
    getAlternateLocalePath,
    getCvPath,
    getHomePath
  } from '$lib/utils/i18n';

  interface Props {
    locale: Locale;
    nav: SiteContent['nav'];
  }

  let { locale, nav }: Props = $props();

  let targetLocale = $derived<Locale>(locale === 'es' ? 'en' : 'es');
  let switchHref = $derived(getAlternateLocalePath($page.url.pathname, targetLocale));
  let homeHref = $derived(getHomePath(locale));
  let cvHref = $derived(getCvPath(locale));
</script>

<a href="#main-content" class="skip-link">{nav.skipToContent}</a>

<header class="site-header">
  <div class="container header-inner">
    <a href={homeHref} class="brand-wordmark">
      {SITE_CONFIG.brandWordmark}
    </a>

    <nav aria-label={locale === 'es' ? 'Navegación principal' : 'Primary navigation'}>
      <ul class="nav-list">
        <li><a href="{homeHref}#proyectos">{nav.projects}</a></li>
        <li><a href={cvHref}>{nav.cv}</a></li>
        <li><a href="{homeHref}#contacto">{nav.contact}</a></li>
        <li class="lang-item">
          <a
            href={switchHref}
            hreflang={targetLocale}
            lang={targetLocale}
            aria-label={nav.switchLanguageLabel}
            class="lang-switch"
          >
            {locale === 'es' ? 'ES · EN' : 'EN · ES'}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    background-color: var(--bg-canvas);
    border-bottom: 1px solid var(--border-subtle);
  }

  .header-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem 1.5rem;
    min-height: 4rem;
    padding-block: 0.5rem;
  }

  .brand-wordmark {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    text-decoration: none;
    min-height: 2.75rem;
    display: inline-flex;
    align-items: center;
  }

  .brand-wordmark:hover {
    color: var(--accent-primary);
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem 1.25rem;
  }

  .nav-list li {
    margin: 0;
  }

  .nav-list a {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    padding-inline: 0.25rem;
    font-size: var(--text-meta);
    font-weight: 500;
    color: var(--text-primary);
    text-decoration: none;
  }

  .nav-list a:hover {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .lang-item {
    padding-left: 0.75rem;
    border-left: 1px solid var(--border-subtle);
  }

  .lang-switch {
    font-weight: 600;
    color: var(--accent-primary);
  }
</style>

