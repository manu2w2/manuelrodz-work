import { g as getContext, e as escape_html, a as attr, b as stringify, c as attr_class, d as derived, f as store_get, u as unsubscribe_stores, h as head } from "../../../chunks/index.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
/* empty css                     */
import { I as Icon } from "../../../chunks/Icon.js";
import { S as SITE_CONFIG } from "../../../chunks/site.js";
import { g as getPrivacyPath, a as getAlternateLocalePath, b as getHomePath, c as getCvPath } from "../../../chunks/i18n.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { locale, contact, footer } = $$props;
    let statusMessage = "";
    $$renderer2.push(`<footer id="contacto" class="site-footer svelte-jz8lnl"><div class="container"><div class="editorial-grid footer-main svelte-jz8lnl"><div><h2>${escape_html(contact.heading)}</h2></div> <div class="stack-md"><p>${escape_html(contact.intro)}</p> `);
    {
      $$renderer2.push(`<!--[0--><div class="contact-row svelte-jz8lnl"><div class="email-block svelte-jz8lnl"><p class="meta-text">${escape_html(contact.emailLabel)}</p> <a${attr("href", `mailto:${stringify(SITE_CONFIG.contactEmail)}`)} class="email-link svelte-jz8lnl">`);
      Icon($$renderer2, { name: "mail", size: 18 });
      $$renderer2.push(`<!----> <span>${escape_html(SITE_CONFIG.contactEmail)}</span></a></div> <button type="button" class="btn-secondary">`);
      Icon($$renderer2, { name: "copy", size: 16 });
      $$renderer2.push(`<!----> <span>${escape_html(contact.copyButton)}</span></button></div> <div role="status" class="meta-text copy-status svelte-jz8lnl" aria-live="polite">${escape_html(statusMessage)}</div>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push(`<!--[0--><p class="meta-text github-row svelte-jz8lnl"><span class="github-label">${escape_html(contact.linksLabel)}:</span> <a${attr("href", SITE_CONFIG.githubProfileUrl)} target="_blank" rel="noopener noreferrer" class="github-link svelte-jz8lnl">`);
      Icon($$renderer2, { name: "github", size: 17 });
      $$renderer2.push(`<!----> <span>GitHub</span> `);
      Icon($$renderer2, { name: "external", size: 13 });
      $$renderer2.push(`<!----> <span class="sr-only">(${escape_html(locale === "es" ? "abre enlace externo en una nueva pestaña" : "opens in new tab")})</span></a></p>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="footer-bottom meta-text svelte-jz8lnl"><span>${escape_html(footer.rightsNote)}</span> <a${attr("href", getPrivacyPath(locale))}>${escape_html(contact.privacyLinkLabel)}</a></div></div></footer>`);
  });
}
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { locale, nav } = $$props;
    let targetLocale = derived(() => locale === "es" ? "en" : "es");
    let switchHref = derived(() => getAlternateLocalePath(store_get($$store_subs ??= {}, "$page", page).url.pathname, targetLocale()));
    let homeHref = derived(() => getHomePath(locale));
    let cvHref = derived(() => getCvPath(locale));
    let menuOpen = false;
    let currentPath = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname.replace(/\/+$/, ""));
    let isHome = derived(() => currentPath() === homeHref().replace(/\/+$/, ""));
    let isCv = derived(() => currentPath() === cvHref().replace(/\/+$/, ""));
    let isProjects = derived(() => currentPath().includes("/proyectos") || currentPath().includes("/projects"));
    $$renderer2.push(`<a href="#main-content" class="skip-link">${escape_html(nav.skipToContent)}</a> <header class="site-header svelte-1elxaub"><div class="container header-inner svelte-1elxaub"><a${attr("href", homeHref())} class="brand-link svelte-1elxaub"${attr("aria-current", isHome() ? "page" : void 0)}><span class="brand-monogram svelte-1elxaub" aria-hidden="true">MR</span> <div class="brand-details svelte-1elxaub"><span class="brand-name svelte-1elxaub">${escape_html(SITE_CONFIG.brandWordmark)}</span> <span class="brand-role svelte-1elxaub">${escape_html(locale === "es" ? "Ingeniería & Robótica" : "Engineering & Robotics")}</span></div></a> <button type="button" class="menu-toggle no-print svelte-1elxaub"${attr("aria-expanded", menuOpen)} aria-controls="primary-nav"${attr("aria-label", locale === "es" ? "Abrir menú de navegación" : "Open navigation menu")}>`);
    Icon($$renderer2, { name: "menu", size: 20 });
    $$renderer2.push(`<!----></button> <nav id="primary-nav"${attr_class("primary-nav svelte-1elxaub", void 0, { "nav-open": menuOpen })}${attr("aria-label", locale === "es" ? "Navegación principal" : "Primary navigation")}><ul class="nav-list svelte-1elxaub"><li class="svelte-1elxaub"><a${attr("href", `${stringify(homeHref())}#proyectos`)}${attr_class("nav-link svelte-1elxaub", void 0, { "is-active": isProjects() })}${attr("aria-current", isProjects() ? "page" : void 0)}><span class="nav-text">${escape_html(nav.projects)}</span></a></li> <li class="svelte-1elxaub"><a${attr("href", cvHref())}${attr_class("nav-link svelte-1elxaub", void 0, { "is-active": isCv() })}${attr("aria-current", isCv() ? "page" : void 0)}><span class="nav-text">${escape_html(nav.cv)}</span></a></li> <li class="svelte-1elxaub"><a${attr("href", `${stringify(homeHref())}#contacto`)} class="nav-link nav-contact-btn svelte-1elxaub">`);
    Icon($$renderer2, { name: "mail", size: 15 });
    $$renderer2.push(`<!----> <span class="nav-text">${escape_html(nav.contact)}</span></a></li> <li class="lang-item svelte-1elxaub"><div class="lang-capsule svelte-1elxaub" role="group"${attr("aria-label", locale === "es" ? "Selector de idioma" : "Language selector")}><span class="lang-badge current svelte-1elxaub" aria-hidden="true">${escape_html(locale.toUpperCase())}</span> <span class="lang-separator svelte-1elxaub" aria-hidden="true">/</span> <a${attr("href", switchHref())}${attr("hreflang", targetLocale())} class="lang-badge switch-target svelte-1elxaub"><span>${escape_html(targetLocale().toUpperCase())}</span> <span class="sr-only">${escape_html(nav.switchLanguageLabel)}</span></a></div></li></ul></nav></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data, children } = $$props;
    let esUrl = derived(() => `${SITE_CONFIG.domain}${getAlternateLocalePath(store_get($$store_subs ??= {}, "$page", page).url.pathname, "es")}`);
    let enUrl = derived(() => `${SITE_CONFIG.domain}${getAlternateLocalePath(store_get($$store_subs ??= {}, "$page", page).url.pathname, "en")}`);
    head("sp5bfr", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="alternate" hreflang="es"${attr("href", esUrl())}/> <link rel="alternate" hreflang="en"${attr("href", enUrl())}/> <link rel="alternate" hreflang="x-default"${attr("href", esUrl())}/>`);
    });
    Header($$renderer2, { locale: data.locale, nav: data.content.nav });
    $$renderer2.push(`<!----> <main id="main-content" tabindex="-1">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2, {
      locale: data.locale,
      contact: data.content.contact,
      footer: data.content.footer
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
