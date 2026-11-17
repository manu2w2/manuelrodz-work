<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site';
  import type { Locale, SiteContent } from '$lib/types/content';

  let { privacy, locale }: { privacy: SiteContent['privacy']; locale: Locale } = $props();
</script>

<article class="container privacy-article stack-lg">
  <header class="stack-sm">
    <p class="meta-text">{privacy.effectiveDate}</p>
    <h1>{privacy.heading}</h1>
    <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>
  </header>

  {#each privacy.paragraphs as block}
    <section class="stack-sm">
      <h2>{block.title}</h2>
      <p>{block.body}</p>
    </section>
  {/each}

  <section class="stack-sm" aria-labelledby="privacy-references">
    <h2 id="privacy-references">{locale === 'es' ? 'Normativa y avisos de los proveedores' : 'Law and provider privacy notices'}</h2>
    <ul class="privacy-references">
      <li><a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf">{locale === 'es' ? 'LFPDPPP — texto vigente (PDF)' : 'LFPDPPP — current Spanish text (PDF)'}</a></li>
      <li><a href="https://vercel.com/legal/privacy-notice">Vercel</a></li>
      <li><a href="https://porkbun.com/legal/agreement/privacy_policy">Porkbun</a></li>
      <li><a href={`https://policies.google.com/privacy?hl=${locale}`}>Google / Gmail</a></li>
    </ul>
  </section>
</article>

<style>
  .privacy-article {
    padding-block: 2.5rem 4rem;
  }

  .privacy-references {
    margin: 0;
    padding-inline-start: 1.25rem;
  }
</style>
