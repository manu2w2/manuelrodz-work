<script lang="ts">
  import PhotoModal from '$lib/components/PhotoModal.svelte';
  import type {
    AnchorProject,
    EvidenceAsset,
    Locale,
    SiteContent
  } from '$lib/types/content';
  import { getHomePath, getProjectPath } from '$lib/utils/i18n';

  interface Props {
    locale: Locale;
    project: AnchorProject;
    nextProject: AnchorProject;
    labels: SiteContent['projectsSection']['caseLabels'];
  }

  let { locale, project, nextProject, labels }: Props = $props();
  let activePhoto = $state<EvidenceAsset | null>(null);
  let activePhotoTrigger = $state<HTMLElement | null>(null);
</script>

<article class="container case-article">
  <nav aria-label={labels.backToHome} class="back-nav">
    <a href="{getHomePath(locale)}#proyectos" class="meta-text">
      <!-- Fix #10: hide decorative arrow from screen readers -->
      <span aria-hidden="true">&larr;</span> {labels.backToHome}
    </a>
  </nav>

  <header class="case-header stack-md">
    <p class="meta-text">
      {project.period} &middot; {project.collaborationModel}
    </p>
    <h1>{project.title}</h1>
    <p class="role-line">{project.roleSummary}</p>
    <p>{project.executiveSummary}</p>

    <nav aria-label={labels.jumpHeading} class="jump-nav">
      <ul class="jump-list">
        <li><a href="#contexto">{labels.sectionContext}</a></li>
        <li><a href="#decisiones">{labels.sectionDecisions}</a></li>
        <li><a href="#ejecucion">{labels.sectionExecution}</a></li>
        <li><a href="#resultados">{labels.sectionOutcomes}</a></li>
        <li><a href="#evidencia">{labels.sectionEvidence}</a></li>
      </ul>
    </nav>
  </header>

  <section class="dossier-section editorial-grid" aria-labelledby="attribution-heading">
    <div>
      <h2 id="attribution-heading">{labels.attributionHeading}</h2>
    </div>
    <div class="attribution-box">
      <p>{project.caseStudy.attributionStatement}</p>
    </div>
  </section>

  <section id="contexto" class="dossier-section editorial-grid" aria-labelledby="contexto-heading">
    <div>
      <h2 id="contexto-heading">{labels.sectionContext}</h2>
    </div>
    <div class="stack-md">
      {#each project.caseStudy.contextAndConstraints as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </section>

  <section id="decisiones" class="dossier-section editorial-grid" aria-labelledby="decisiones-heading">
    <div>
      <h2 id="decisiones-heading">{labels.sectionDecisions}</h2>
    </div>
    <div class="stack-md">
      {#each project.caseStudy.analysisAndDecisions as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </section>

  <section id="ejecucion" class="dossier-section editorial-grid" aria-labelledby="ejecucion-heading">
    <div>
      <h2 id="ejecucion-heading">{labels.sectionExecution}</h2>
    </div>
    <div class="stack-md">
      {#each project.caseStudy.executionAndTeamwork as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </section>

  <section id="resultados" class="dossier-section editorial-grid" aria-labelledby="resultados-heading">
    <div>
      <h2 id="resultados-heading">{labels.sectionOutcomes}</h2>
    </div>
    <div class="stack-md">
      <ul>
        {#each project.caseStudy.outcomesAndLessons as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </section>

  <section id="evidencia" class="dossier-section editorial-grid" aria-labelledby="evidencia-heading">
    <div>
      <h2 id="evidencia-heading">{labels.sectionEvidence}</h2>
    </div>
    <div class="evidence-list">
      {#each project.caseStudy.evidence as asset, i}
        {@const titleId = `evidence-title-${i}`}
        <div class="evidence-row stack-sm">
          <h3 id={titleId}>{asset.title}</h3>
          <p>{asset.description}</p>

          {#if asset.status === 'active' && asset.type === 'photo' && asset.imageSrc}
            <figure class="evidence-figure stack-sm">
              <img
                src={asset.imageSrc}
                alt={asset.imageAlt ?? asset.title}
                width="960"
                height="640"
                loading="lazy"
              />
              <!-- Fix #9: aria-describedby links button to its h3 -->
              <button
                type="button"
                class="btn-secondary"
                aria-describedby={titleId}
                onclick={(e) => {
                  activePhotoTrigger = e.currentTarget as HTMLElement;
                  activePhoto = asset;
                }}
              >
                {labels.inspectPhotoLabel}
              </button>
            </figure>
          {:else if asset.status === 'active' && asset.url}
            <p class="meta-text">
              <a href={asset.url} target="_blank" rel="noopener noreferrer">
                {asset.url}
                <!-- Fix #10: hidden external link hint -->
                <span class="sr-only">({labels.externalLinkHint})</span>
              </a>
            </p>
          {:else}
            <p class="meta-text">{labels.curatingNote}</p>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <nav class="dossier-section next-project-nav" aria-label={labels.nextProjectLabel}>
    <p class="meta-text">{labels.nextProjectLabel}</p>
    <a href={getProjectPath(locale, nextProject.slug)} class="next-link">
      {nextProject.title} <span aria-hidden="true">&rarr;</span>
    </a>
  </nav>
</article>

{#if activePhoto && activePhoto.imageSrc}
  <PhotoModal
    src={activePhoto.imageSrc}
    alt={activePhoto.imageAlt ?? activePhoto.title}
    caption={activePhoto.title}
    closeLabel={labels.closeModalLabel}
    triggerElement={activePhotoTrigger}
    onClose={() => { activePhoto = null; activePhotoTrigger = null; }}
  />
{/if}

<style>
  .case-article {
    padding-block: 2rem 3rem;
  }

  .back-nav {
    margin-bottom: 1.5rem;
  }

  .back-nav a:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .case-header {
    padding-bottom: 2.5rem;
  }

  .role-line {
    font-weight: 600;
    color: var(--accent-primary);
  }

  .jump-nav {
    padding-top: 0.75rem;
  }

  .jump-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
  }

  .jump-list li {
    margin: 0;
  }

  .jump-list a {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    font-size: var(--text-meta);
    font-weight: 500;
  }

  .jump-list a:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .attribution-box {
    padding: 1.25rem;
    background-color: var(--bg-surface);
    border-left: 3px solid var(--accent-primary);
  }

  .evidence-list > .evidence-row + .evidence-row {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-subtle);
  }

  .evidence-figure {
    margin: 0;
  }

  .evidence-figure img {
    max-width: 100%;
    height: auto;
    border: 1px solid var(--border-subtle);
  }

  .next-project-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .next-link {
    font-family: var(--font-display);
    font-size: var(--text-h2);
    font-weight: 500;
  }

  .next-link:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
  }
</style>
