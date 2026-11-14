<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let cv = $derived(data.content.cv);
  let cvFile = $derived(SITE_CONFIG.cvFiles[data.locale]);

  function printPage() {
    window.print();
  }
</script>

<svelte:head>
  <title>{cv.heading} — Manuel Rodríguez</title>
  <meta name="description" content={data.content.meta.cvDescription} />
</svelte:head>

<article class="container cv-page">
  <header class="cv-header stack-md">
    <p class="meta-text">{cv.lastUpdated}</p>
    <h1>{cv.heading}</h1>
    <p>{cv.subtitle}</p>

    <div class="cv-actions no-print">
      <a href={cvFile.href} download={cvFile.filename} class="btn-primary">
        {cv.downloadPdfLabel} <span class="tabular">({data.locale === 'es' ? 'PDF, aprox. 120 KB' : 'PDF, approx. 120 KB'})</span>
      </a>
      <button type="button" class="btn-secondary" onclick={printPage}>
        {cv.printPageLabel}
      </button>
    </div>
  </header>

  <section class="dossier-section editorial-grid" aria-labelledby="cv-edu">
    <div>
      <h2 id="cv-edu">{cv.sections.education.heading}</h2>
    </div>
    <div class="stack-md">
      {#each cv.sections.education.items as edu}
        <div class="stack-sm">
          <h3>{edu.institution}</h3>
          <p class="meta-text">{edu.program} &middot; {edu.period}</p>
          <p>{edu.detail}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="dossier-section editorial-grid" aria-labelledby="cv-exp">
    <div>
      <h2 id="cv-exp">{cv.sections.experience.heading}</h2>
    </div>
    <div class="cv-entries">
      {#each cv.sections.experience.items as item}
        <div class="cv-entry stack-sm">
          <h3>{item.organization}</h3>
          <p class="meta-text">{item.role} &middot; {item.period}</p>
          <ul>
            {#each item.highlights as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <section class="dossier-section editorial-grid" aria-labelledby="cv-honors">
    <div>
      <h2 id="cv-honors">{cv.sections.honors.heading}</h2>
    </div>
    <div class="cv-entries">
      {#each cv.sections.honors.items as honor}
        <div class="cv-entry stack-sm">
          <h3>{honor.award}</h3>
          <p class="meta-text">{honor.event} &middot; {honor.year}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="dossier-section editorial-grid" aria-labelledby="cv-skills">
    <div>
      <h2 id="cv-skills">{cv.sections.capabilities.heading}</h2>
    </div>
    <div class="cv-entries">
      {#each cv.sections.capabilities.groups as group}
        <div class="cv-entry stack-sm">
          <h3>{group.area}</h3>
          <p>{group.items}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="dossier-section editorial-grid" aria-labelledby="cv-lang">
    <div>
      <h2 id="cv-lang">{cv.sections.languages.heading}</h2>
    </div>
    <ul>
      {#each cv.sections.languages.items as lang}
        <li><strong>{lang.language}:</strong> {lang.proficiency}</li>
      {/each}
    </ul>
  </section>
</article>

<style>
  .cv-page {
    padding-block: 2.5rem 3.5rem;
  }

  .cv-header {
    padding-bottom: 2.25rem;
  }

  .cv-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    padding-top: 0.5rem;
  }

  .cv-entries > .cv-entry + .cv-entry {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-subtle);
  }
</style>

