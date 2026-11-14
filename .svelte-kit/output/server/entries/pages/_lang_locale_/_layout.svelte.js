import { g as getContext, e as escape_html, a as attr, b as stringify, d as derived, c as store_get, u as unsubscribe_stores, h as head } from "../../../chunks/index.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
/* empty css                     */
import { g as getPrivacyPath, a as getAlternateLocalePath, b as getHomePath, c as getCvPath } from "../../../chunks/i18n.js";
import { S as SITE_CONFIG } from "../../../chunks/site.js";
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
    $$renderer2.push(`<footer id="contacto" class="site-footer svelte-jz8lnl"><div class="container"><div class="editorial-grid footer-main svelte-jz8lnl"><div><h2>${escape_html(contact.heading)}</h2></div> <div class="stack-md"><p>${escape_html(contact.intro)}</p> `);
    {
      $$renderer2.push(`<!--[-1--><p class="meta-text">${escape_html(locale === "es" ? "Canal de correo directo en configuración final en src/lib/config/site.ts." : "Direct email channel ready to be configured in src/lib/config/site.ts.")}</p>`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[-1-->");
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
    $$renderer2.push(`<a href="#main-content" class="skip-link">${escape_html(nav.skipToContent)}</a> <header class="site-header svelte-1elxaub"><div class="container header-inner svelte-1elxaub"><a${attr("href", homeHref())} class="brand-wordmark svelte-1elxaub">${escape_html(SITE_CONFIG.brandWordmark)}</a> <nav${attr("aria-label", locale === "es" ? "Navegación principal" : "Primary navigation")}><ul class="nav-list svelte-1elxaub"><li class="svelte-1elxaub"><a${attr("href", `${stringify(homeHref())}#proyectos`)} class="svelte-1elxaub">${escape_html(nav.projects)}</a></li> <li class="svelte-1elxaub"><a${attr("href", cvHref())} class="svelte-1elxaub">${escape_html(nav.cv)}</a></li> <li class="svelte-1elxaub"><a${attr("href", `${stringify(homeHref())}#contacto`)} class="svelte-1elxaub">${escape_html(nav.contact)}</a></li> <li class="lang-item svelte-1elxaub"><a${attr("href", switchHref())}${attr("hreflang", targetLocale())}${attr("lang", targetLocale())}${attr("aria-label", nav.switchLanguageLabel)} class="lang-switch svelte-1elxaub">${escape_html(locale === "es" ? "ES · EN" : "EN · ES")}</a></li></ul></nav></div></header>`);
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
