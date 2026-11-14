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

  /* Fix #1: lang is now set server-side via hooks.server.ts — no JS needed */
</script>

<svelte:head>
  <link rel="alternate" hreflang="es" href={esUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="x-default" href={esUrl} />
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
