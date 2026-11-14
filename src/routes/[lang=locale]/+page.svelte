<script lang="ts">
  import { SITE_CONFIG } from '$lib/config/site';
  import { getProjectPath } from '$lib/utils/i18n';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let c = $derived(data.content);
  let cvFile = $derived(SITE_CONFIG.cvFiles[data.locale]);
</script>

<svelte:head>
  <title>{c.meta.siteTitle}</title>
  <meta name="description" content={c.meta.homeDescription} />
</svelte:head>

<div class="container">
  <!-- Apertura directa al Dossier (sin hero vacío de 100vh) -->
  <section class="opening-dossier stack-md" aria-labelledby="dossier-title">
    <p class="meta-text">{c.hero.academicStatus} &middot; {c.hero.location}</p>
    <h1 id="dossier-title">{c.hero.fullName}</h1>
    <p class="core-statement">{c.hero.coreStatement}</p>

    <div class="opening-actions">
      <a href={cvFile.href} download={cvFile.filename} class="btn-primary">
        {c.hero.primaryCta}
      </a>
      <a href="#proyectos" class="btn-secondary">
        {c.hero.secondaryCta}
      </a>
    </div>
  </section>

  <!-- Bloque 2: Criterio, filosofía y metodología FEV -->
  <section class="dossier-section editorial-grid" aria-labelledby="metodo-heading">
    <div class="stack-sm">
      <h2 id="metodo-heading">{c.method.heading}</h2>
      <p class="meta-text">{c.method.intro}</p>
    </div>

    <div class="stack-lg">
      <div class="stack-sm">
        <h3>{c.method.philosophyTitle}</h3>
        <p>{c.method.philosophyBody}</p>
      </div>

      <div class="stack-md">
        <h3>{c.method.stepsTitle}</h3>
        <ol class="steps-list">
          {#each c.method.steps as step}
            <li>
              <strong>{step.name}:</strong> {step.detail}
            </li>
          {/each}
        </ol>
      </div>

      <div class="fev-block stack-md">
        <div class="stack-sm">
          <h3>{c.method.fevTitle}</h3>
          <p>{c.method.fevSummary}</p>
        </div>
        <dl class="fev-list">
          {#each c.method.fevPillars as pillar}
            <div class="fev-item">
              <dt>{pillar.term}</dt>
              <dd>{pillar.definition}</dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  </section>

  <!-- Bloque 3: Índice narrativo diferenciado de Hitos Ancla -->
  <section id="proyectos" class="dossier-section" aria-labelledby="proyectos-heading">
    <div class="editorial-grid projects-intro">
      <div>
        <h2 id="proyectos-heading">{c.projectsSection.heading}</h2>
      </div>
      <div>
        <p>{c.projectsSection.intro}</p>
      </div>
    </div>

    <div class="projects-ledger">
      {#each c.projectsSection.items as project}
        <article
          class="project-entry editorial-grid"
          class:is-flagship={project.tier === 'flagship'}
        >
          <div class="stack-sm">
            <p class="meta-text">{project.period}</p>
            <p class="meta-text">{project.collaborationModel}</p>
          </div>

          <div class="stack-md">
            <div class="stack-sm">
              <h3>
                <a href={getProjectPath(data.locale, project.slug)} class="project-title-link">
                  {project.title}
                </a>
              </h3>
              <p class="meta-text">{project.roleSummary} &middot; {project.contextNote}</p>
            </div>

            <p>{project.executiveSummary}</p>
            <p class="outcome-line">{project.keyOutcome}</p>

            <p class="meta-text">
              <a href={getProjectPath(data.locale, project.slug)}>
                {c.projectsSection.readCaseLabel} &rarr;
              </a>
            </p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- Bloque 4: Dimensiones complementarias -->
  <section class="dossier-section editorial-grid" aria-labelledby="complementarias-heading">
    <div class="stack-sm">
      <h2 id="complementarias-heading">{c.complementary.heading}</h2>
      <p class="meta-text">{c.complementary.intro}</p>
    </div>

    <div class="facets-list">
      {#each c.complementary.items as facet}
        <div class="facet-row stack-sm">
          <h3>{facet.title}</h3>
          <p class="meta-text">{facet.role}</p>
          <p>{facet.summary}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .opening-dossier {
    padding-block: clamp(2.75rem, 6vw, 4.5rem) clamp(2.5rem, 5vw, 3.75rem);
  }

  .core-statement {
    max-width: 58ch;
  }

  .opening-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1rem;
    padding-top: 0.5rem;
  }

  .steps-list {
    padding-left: 1.25rem;
  }

  .fev-block {
    padding: 1.5rem;
    background-color: var(--bg-surface);
    border-left: 3px solid var(--accent-primary);
  }

  .fev-list {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 1.25rem;
  }

  .fev-item dt {
    font-weight: 600;
    font-size: var(--text-body);
    margin-bottom: 0.25rem;
  }

  .fev-item dd {
    margin: 0;
    font-size: var(--text-meta);
    color: var(--text-secondary);
    line-height: 1.55;
  }

  .projects-intro {
    padding-bottom: 2rem;
  }

  .project-entry {
    padding-block: 2rem;
    border-top: 1px solid var(--border-subtle);
  }

  .project-entry.is-flagship {
    padding: 2rem 1.5rem;
    background-color: var(--bg-surface);
    border-top: 1px solid var(--border-strong);
    border-bottom: 1px solid var(--border-strong);
  }

  .project-title-link {
    color: var(--text-primary);
    text-decoration: none;
  }

  .project-title-link:hover {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .outcome-line {
    font-weight: 500;
    color: var(--accent-primary);
  }

  .facets-list > .facet-row + .facet-row {
    margin-top: 1.75rem;
    padding-top: 1.75rem;
    border-top: 1px solid var(--border-subtle);
  }
</style>

