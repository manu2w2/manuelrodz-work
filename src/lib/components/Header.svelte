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
  let menuOpen = $state(false);

  /* Fix #3: aria-current detection */
  let currentPath = $derived($page.url.pathname.replace(/\/+$/, ''));
  let isHome = $derived(currentPath === homeHref.replace(/\/+$/, ''));
  let isCv = $derived(currentPath === cvHref.replace(/\/+$/, ''));
  let isProjects = $derived(currentPath.includes('/proyectos/') || currentPath.includes('/projects/'));

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function handleMenuKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      const btn = document.querySelector<HTMLButtonElement>('.menu-toggle');
      btn?.focus();
    }
  }
</script>

<svelte:window onkeydown={handleMenuKeydown} />

<a href="#main-content" class="skip-link">{nav.skipToContent}</a>

<header class="site-header">
  <div class="container header-inner">
    <a
      href={homeHref}
      class="brand-wordmark"
      aria-current={isHome ? 'page' : undefined}
    >
      {SITE_CONFIG.brandWordmark}
    </a>

    <!-- Mobile menu button -->
    <button
      type="button"
      class="menu-toggle no-print"
      aria-expanded={menuOpen}
      aria-controls="primary-nav"
      onclick={toggleMenu}
    >
      <span class="sr-only">
        {locale === 'es' ? 'Menú de navegación' : 'Navigation menu'}
      </span>
      <span class="menu-icon" aria-hidden="true">
        {menuOpen ? '✕' : '☰'}
      </span>
    </button>

    <nav
      id="primary-nav"
      class="primary-nav"
      class:nav-open={menuOpen}
      aria-label={locale === 'es' ? 'Navegación principal' : 'Primary navigation'}
    >
      <ul class="nav-list">
        <li>
          <a
            href="{homeHref}#proyectos"
            aria-current={isProjects ? 'page' : undefined}
            onclick={closeMenu}
          >
            {nav.projects}
          </a>
        </li>
        <li>
          <a
            href={cvHref}
            aria-current={isCv ? 'page' : undefined}
            onclick={closeMenu}
          >
            {nav.cv}
          </a>
        </li>
        <li>
          <a href="{homeHref}#contacto" onclick={closeMenu}>
            {nav.contact}
          </a>
        </li>
        <li class="lang-item">
          <!-- Fix #2: visible text IS the accessible name; hidden hint added after -->
          <a
            href={switchHref}
            hreflang={targetLocale}
            class="lang-switch"
            onclick={closeMenu}
          >
            <span>{locale === 'es' ? 'EN' : 'ES'}</span>
            <span class="sr-only">{nav.switchLanguageLabel}</span>
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

  .brand-wordmark:hover,
  .brand-wordmark:focus-visible {
    color: var(--accent-primary);
  }

  /* Fix #3: current page indicator */
  .brand-wordmark[aria-current='page'],
  .nav-list a[aria-current='page'] {
    color: var(--accent-primary);
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.22em;
  }

  /* Mobile menu toggle */
  .menu-toggle {
    display: none;
    min-height: 2.75rem;
    min-width: 2.75rem;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-control);
    cursor: pointer;
    font-size: 1.25rem;
    color: var(--text-primary);
  }

  @media (max-width: 40rem) {
    .menu-toggle {
      display: inline-flex;
    }

    .primary-nav {
      display: none;
      width: 100%;
      order: 3;
    }

    .primary-nav.nav-open {
      display: block;
    }

    .nav-list {
      flex-direction: column;
      gap: 0;
    }

    .lang-item {
      padding-left: 0;
      border-left: none;
      padding-top: 0.5rem;
      border-top: 1px solid var(--border-subtle);
    }
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

  /* Fix #4: focus-visible matches hover */
  .nav-list a:hover,
  .nav-list a:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.22em;
  }

  .lang-item {
    padding-left: 0.75rem;
    border-left: 1px solid var(--border-subtle);
  }

  .lang-switch {
    font-weight: 600;
    color: var(--accent-primary);
  }

  .menu-icon {
    line-height: 1;
  }
</style>
