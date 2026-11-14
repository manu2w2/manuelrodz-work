<script lang="ts">
  import { page } from "$app/stores";
  import Icon from "$lib/components/Icon.svelte";
  import { SITE_CONFIG } from "$lib/config/site";
  import type { Locale, SiteContent } from "$lib/types/content";
  import {
    getAlternateLocalePath,
    getCvPath,
    getHomePath,
  } from "$lib/utils/i18n";

  interface Props {
    locale: Locale;
    nav: SiteContent["nav"];
  }

  let { locale, nav }: Props = $props();

  let targetLocale = $derived<Locale>(locale === "es" ? "en" : "es");
  let switchHref = $derived(
    getAlternateLocalePath($page.url.pathname, targetLocale),
  );
  let homeHref = $derived(getHomePath(locale));
  let cvHref = $derived(getCvPath(locale));
  let menuOpen = $state(false);

  /* aria-current & active route detection */
  let currentPath = $derived($page.url.pathname.replace(/\/+$/, ""));
  let isHome = $derived(currentPath === homeHref.replace(/\/+$/, ""));
  let isCv = $derived(currentPath === cvHref.replace(/\/+$/, ""));
  let isProjects = $derived(
    currentPath.includes("/proyectos") || currentPath.includes("/projects"),
  );

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  function closeMenu() {
    menuOpen = false;
  }

  function handleMenuKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      const btn = document.querySelector<HTMLButtonElement>(".menu-toggle");
      btn?.focus();
    }
  }
</script>

<svelte:window onkeydown={handleMenuKeydown} />

<a href="#main-content" class="skip-link">{nav.skipToContent}</a>

<header class="site-header">
  <div class="container header-inner">
    <!-- Brand identity: Monogram aligned flush with master grid left edge -->
    <a
      href={homeHref}
      class="brand-link"
      aria-current={isHome ? "page" : undefined}
    >
      <span class="brand-monogram" aria-hidden="true">MR</span>
      <div class="brand-details">
        <span class="brand-name">{SITE_CONFIG.brandWordmark}</span>
        <span class="brand-role">
          {locale === "es" ? "Ingeniería & Robótica" : "Engineering & Robotics"}
        </span>
      </div>
    </a>

    <!-- Mobile menu toggle button -->
    <button
      type="button"
      class="menu-toggle no-print"
      aria-expanded={menuOpen}
      aria-controls="primary-nav"
      aria-label={locale === "es"
        ? "Abrir menú de navegación"
        : "Open navigation menu"}
      onclick={toggleMenu}
    >
      <Icon name={menuOpen ? "close" : "menu"} size={20} />
    </button>

    <!-- Navigation links -->
    <nav
      id="primary-nav"
      class="primary-nav"
      class:nav-open={menuOpen}
      aria-label={locale === "es"
        ? "Navegación principal"
        : "Primary navigation"}
    >
      <ul class="nav-list">
        <li>
          <a
            href="{homeHref}#proyectos"
            class="nav-link"
            class:is-active={isProjects}
            aria-current={isProjects ? "page" : undefined}
            onclick={closeMenu}
          >
            <span class="nav-text">{nav.projects}</span>
          </a>
        </li>
        <li>
          <a
            href={cvHref}
            class="nav-link"
            class:is-active={isCv}
            aria-current={isCv ? "page" : undefined}
            onclick={closeMenu}
          >
            <span class="nav-text">{nav.cv}</span>
          </a>
        </li>
        <li>
          <a
            href="{homeHref}#contacto"
            class="nav-link nav-contact-btn"
            onclick={closeMenu}
          >
            <Icon name="mail" size={15} />
            <span class="nav-text">{nav.contact}</span>
          </a>
        </li>
        <li class="lang-item">
          <div
            class="lang-capsule"
            role="group"
            aria-label={locale === "es"
              ? "Selector de idioma"
              : "Language selector"}
          >
            <span class="lang-badge current" aria-hidden="true">
              {locale.toUpperCase()}
            </span>
            <span class="lang-separator" aria-hidden="true">/</span>
            <a
              href={switchHref}
              hreflang={targetLocale}
              class="lang-badge switch-target"
              onclick={closeMenu}
            >
              <span>{targetLocale.toUpperCase()}</span>
              <span class="sr-only">{nav.switchLanguageLabel}</span>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: rgba(247, 246, 242, 0.94);
    backdrop-filter: blur(12px) saturate(160%);
    -webkit-backdrop-filter: blur(12px) saturate(160%);
    border-bottom: 1px solid var(--border-structural);
    box-shadow: 0 1px 3px rgba(30, 32, 30, 0.02);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 4.25rem;
    padding-block: 0.5rem;
    position: relative;
  }

  /* ─── Brand Wordmark & Monogram (Aligned flush with left master grid) ─── */
  .brand-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    min-height: 2.75rem;
    padding: 0.25rem 0.35rem 0.25rem 0;
    border-radius: var(--radius-control);
    transition: opacity var(--duration-fast) var(--ease-out);
  }

  .brand-link:hover,
  .brand-link:focus-visible {
    opacity: 0.92;
  }

  .brand-link:hover .brand-monogram {
    transform: scale(1.06) rotate(-2deg);
  }

  .brand-monogram {
    width: 2.15rem;
    height: 2.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-primary);
    color: var(--bg-canvas);
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    border-radius: var(--radius-control);
    box-shadow: 0 1px 2px rgba(44, 76, 59, 0.25);
    flex-shrink: 0;
    transition: transform var(--duration-normal) var(--ease-spring);
  }

  .brand-details {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
  }

  .brand-name {
    font-family: var(--font-display);
    font-size: 1.1875rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  .brand-role {
    font-family: var(--font-body);
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    color: var(--text-secondary);
    margin-top: 0.1rem;
  }

  /* ─── Navigation List ─── */
  .primary-nav {
    display: flex;
    align-items: center;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .nav-list li {
    margin: 0;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 2.4rem;
    padding: 0.4rem 0.85rem;
    border-radius: var(--radius-control);
    font-size: var(--text-meta);
    font-weight: 500;
    color: var(--text-primary);
    text-decoration: none;
    position: relative;
    transition:
      background-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring);
  }

  .nav-link::after {
    content: "";
    position: absolute;
    bottom: 0.2rem;
    left: 0.85rem;
    right: 0.85rem;
    height: 2px;
    background-color: var(--accent-primary);
    border-radius: 1px;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform var(--duration-fast) var(--ease-out);
  }

  .nav-link:hover {
    background-color: var(--bg-surface);
    color: var(--accent-primary);
    text-decoration: none;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  .nav-link:active {
    background-color: color-mix(
      in srgb,
      var(--accent-primary) 14%,
      var(--bg-surface)
    );
    color: var(--accent-primary-hover);
    transform: translateY(1px);
  }

  .nav-link:focus-visible {
    color: var(--accent-primary);
  }

  /* Active route state */
  .nav-link.is-active,
  .nav-link[aria-current="page"] {
    background-color: color-mix(
      in srgb,
      var(--accent-primary) 10%,
      transparent
    );
    color: var(--accent-primary);
    font-weight: 600;
  }

  .nav-link.is-active::after,
  .nav-link[aria-current="page"]::after {
    transform: scaleX(1);
  }

  /* Contact button in nav */
  .nav-contact-btn {
    border: 1px solid var(--border-strong);
    background-color: transparent;
    padding-inline: 0.95rem;
    font-weight: 600;
    transition:
      background-color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .nav-contact-btn::after {
    display: none;
  }

  .nav-contact-btn:hover {
    background-color: var(--accent-primary);
    border-color: var(--accent-primary);
    color: var(--bg-canvas);
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(44, 76, 59, 0.2);
  }

  .nav-contact-btn:active {
    background-color: var(--accent-primary-hover);
    border-color: var(--accent-primary-hover);
    color: var(--bg-canvas);
    transform: translateY(1px);
    box-shadow: none;
  }

  .nav-contact-btn:hover :global(.icon),
  .nav-contact-btn:active :global(.icon) {
    stroke: var(--bg-canvas);
  }

  /* ─── Language Capsule Switcher ─── */
  .lang-item {
    margin-left: 0.5rem;
  }

  .lang-capsule {
    display: inline-flex;
    align-items: center;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: 20px;
    padding: 0.18rem 0.28rem;
    gap: 0.15rem;
  }

  .lang-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.6rem;
    padding: 0.15rem 0.55rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    border-radius: 14px;
    text-decoration: none;
    transition:
      background-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out);
  }

  .lang-badge.current {
    background-color: var(--accent-primary);
    color: var(--bg-canvas);
    cursor: default;
  }

  .lang-badge.switch-target {
    color: var(--text-secondary);
  }

  .lang-badge.switch-target:hover,
  .lang-badge.switch-target:focus-visible {
    color: var(--accent-primary);
    background-color: color-mix(
      in srgb,
      var(--accent-primary) 14%,
      transparent
    );
    text-decoration: none;
  }

  .lang-badge.switch-target:active {
    background-color: color-mix(
      in srgb,
      var(--accent-primary) 22%,
      transparent
    );
  }

  .lang-separator {
    color: var(--border-strong);
    font-size: 0.7rem;
    user-select: none;
    opacity: 0.6;
  }

  /* ─── Mobile Menu Toggle & Drawer ─── */
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
    color: var(--text-primary);
    transition:
      background-color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out);
  }

  .menu-toggle:hover {
    background-color: var(--bg-surface);
    border-color: var(--text-primary);
  }

  @media (max-width: 46rem) {
    .menu-toggle {
      display: inline-flex;
    }

    .primary-nav {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: var(--bg-canvas);
      border-bottom: 1px solid var(--border-subtle);
      box-shadow: 0 12px 28px rgba(30, 32, 30, 0.08);
      padding: 1rem 1.25rem 1.5rem;
    }

    .primary-nav.nav-open {
      display: block;
      animation: navDrawerIn 180ms var(--ease-out) forwards;
    }

    .nav-list {
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
    }

    .nav-link {
      width: 100%;
      min-height: 2.85rem;
      padding-inline: 1rem;
    }

    .nav-link::after {
      display: none;
    }

    .nav-contact-btn {
      justify-content: flex-start;
    }

    .lang-item {
      margin-left: 0;
      padding-top: 0.75rem;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      justify-content: flex-start;
    }
  }

  @keyframes navDrawerIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .primary-nav.nav-open {
      animation: none;
    }
  }
</style>
