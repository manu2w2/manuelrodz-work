<script lang="ts">
  import { page } from '$app/stores';
  import '@fontsource/newsreader/500.css';
  import '@fontsource/newsreader/600.css';
  import '@fontsource/plus-jakarta-sans/400.css';
  import '@fontsource/plus-jakarta-sans/500.css';
  import '@fontsource/plus-jakarta-sans/600.css';
  import '$lib/styles/tokens.css';
  import '$lib/styles/global.css';

  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { SITE_CONFIG } from '$lib/config/site';
  import { getAlternateLocalePath } from '$lib/utils/i18n';
  import type { LayoutData } from './$types';

  interface Props {
    data: LayoutData;
    children: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();

  let esUrl = $derived(
    `${SITE_CONFIG.domain}${getAlternateLocalePath($page.url.pathname, 'es')}`
  );
  let enUrl = $derived(
    `${SITE_CONFIG.domain}${getAlternateLocalePath($page.url.pathname, 'en')}`
  );

  let canonicalUrl = $derived(data.locale === 'es' ? esUrl : enUrl);
  let ogLocale = $derived(data.locale === 'es' ? 'es_MX' : 'en_US');
  let ogLocaleAlternate = $derived(data.locale === 'es' ? 'en_US' : 'es_MX');
  let ogImage = $derived(`${SITE_CONFIG.domain}${SITE_CONFIG.ogImage.src}`);
</script>

<svelte:head>
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="es" href={esUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="x-default" href={esUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_CONFIG.brandWordmark} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:locale" content={ogLocale} />
  <meta property="og:locale:alternate" content={ogLocaleAlternate} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content={String(SITE_CONFIG.ogImage.width)} />
  <meta property="og:image:height" content={String(SITE_CONFIG.ogImage.height)} />
  <meta property="og:image:alt" content={data.content.hero.imageAlt} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<Header locale={data.locale} nav={data.content.nav} />

<main id="main-content" tabindex="-1">
  {@render children()}
</main>

<Footer
  locale={data.locale}
  contact={data.content.contact}
  footer={data.content.footer}
/>
