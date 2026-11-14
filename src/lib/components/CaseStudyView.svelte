<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
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
    <a href="{getHomePath(locale)}#proyectos" class="meta-text back-link">
      <Icon name="arrow-left" size={14} />
      <span>{labels.backToHome}</span>
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
              <a href={asset.url} target="_blank" rel="noopener noreferrer" class="evidence-external-link">
                <span>{asset.url}</span>
                <Icon name="external" size={13} />
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
      <span>{nextProject.title}</span>
      <Icon name="arrow-right" size={20} />
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

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: transform var(--duration-fast) var(--ease-spring);
  }

  .back-link:hover {
    transform: translateX(-3px);
  }

  .evidence-external-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .jump-list a {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    padding: 0.25rem 0.65rem;
    border-radius: var(--radius-control);
    font-size: var(--text-meta);
    font-weight: 500;
    transition:
      background-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring);
  }

  .jump-list a:hover {
    background-color: var(--bg-surface);
    transform: translateY(-1px);
    text-decoration: none;
  }

  .evidence-row {
    padding: 0.75rem;
    border-radius: var(--radius-control);
    transition:
      background-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring);
  }

  .evidence-row:hover {
    background-color: color-mix(in srgb, var(--bg-surface) 45%, transparent);
    transform: translateX(3px);
  }

  .next-link {
    font-family: var(--font-display);
    font-size: var(--text-h2);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition:
      color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring);
  }

  .next-link:hover {
    transform: translateX(4px);
  }

  .next-link:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  @media (prefers-reduced-motion: reduce) {
    .back-link,
    .jump-list a,
    .evidence-row,
    .next-link {
      transition: none !important;
      transform: none !important;
    }
  }
</style>
