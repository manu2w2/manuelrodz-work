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
  let isEn = $derived(data.locale === 'en');
</script>

<svelte:head>
  <title>{c.meta.siteTitle}</title>
  <meta name="description" content={c.meta.homeDescription} />
</svelte:head>

<div class="container">
  <!-- ═══ HERO — Two-column: identity left, headline numbers right ═══ -->
  <section class="hero-section" aria-labelledby="dossier-title">
    <div class="hero-identity stack-md">
      <p class="meta-text">{c.hero.academicStatus}</p>
      <h1 id="dossier-title">{c.hero.fullName}</h1>
      <p class="core-statement">{c.hero.coreStatement}</p>

      <div class="hero-actions">
        <a href={cvFile.href} download={cvFile.filename} class="btn-primary">
          {c.hero.primaryCta}
        </a>
        <a href="#proyectos" class="btn-secondary">
          {c.hero.secondaryCta}
        </a>
      </div>
    </div>

    <aside class="hero-highlights" aria-label={isEn ? 'Quick highlights' : 'Datos destacados'}>
      <ul class="highlight-list">
        <li class="highlight-item">
          <span class="highlight-number">3</span>
          <span class="highlight-label">{isEn ? 'Years FTC Robotics' : 'Años en robótica FTC'}</span>
        </li>
        <li class="highlight-item">
          <span class="highlight-number">4</span>
          <span class="highlight-label">{isEn ? 'National Awards' : 'Reconocimientos nacionales'}</span>
        </li>
        <li class="highlight-item">
          <span class="highlight-number">1</span>
          <span class="highlight-label">{isEn ? 'International Design Award' : 'Design Award internacional'}</span>
        </li>
        <li class="highlight-item">
          <span class="highlight-number">60+</span>
          <span class="highlight-label">{isEn ? 'MUN Delegations Led' : 'Delegaciones MUN coordinadas'}</span>
        </li>
      </ul>
    </aside>
  </section>

  <!-- ═══ QUICK-FACTS STRIP ═══ -->
  <div class="facts-strip" role="list" aria-label={isEn ? 'Quick facts' : 'Datos rápidos'}>
    <span class="fact-item meta-text" role="listitem">📍 {c.hero.location}</span>
    <span class="fact-item meta-text" role="listitem">🎓 {c.hero.academicStatus}</span>
    <span class="fact-item meta-text" role="listitem">🌐 {isEn ? 'Spanish (Native) · English (Professional)' : 'Español (Nativo) · Inglés (Profesional)'}</span>
    <span class="fact-item meta-text" role="listitem">⚙️ {isEn ? 'Robotics · CAD · Web Dev · Leadership' : 'Robótica · CAD · Desarrollo web · Liderazgo'}</span>
  </div>

  <!-- ═══ METHOD — Timeline + FEV pillars ═══ -->
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
        <!-- Fix #13: use list-style: none since text already has numbers -->
        <ol class="timeline-steps" aria-label={c.method.stepsTitle}>
          {#each c.method.steps as step, i}
            <li class="timeline-step">
              <span class="step-number" aria-hidden="true">{i + 1}</span>
              <div class="step-content">
                <strong>{step.name}</strong>
                <p class="step-detail">{step.detail}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>

      <div class="fev-block stack-md">
        <div class="stack-sm">
          <h3>{c.method.fevTitle}</h3>
          <p>{c.method.fevSummary}</p>
        </div>
        <dl class="fev-pillars">
          {#each c.method.fevPillars as pillar}
            <div class="pillar-card">
              <dt>
                <!-- Fix #14: mark Spanish words inside English page -->
                {#if isEn && pillar.term.includes('(')}
                  {pillar.term.split('(')[0]}(<span lang="es">{pillar.term.split('(')[1].replace(')', '')}</span>)
                {:else}
                  {pillar.term}
                {/if}
              </dt>
              <dd>{pillar.definition}</dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  </section>

  <!-- ═══ PROJECTS — Enhanced layout ═══ -->
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
        {@const tags = getProjectTags(project.slug, isEn)}
        <article
          class="project-entry editorial-grid"
          class:is-flagship={project.tier === 'flagship'}
        >
          <div class="stack-sm project-meta-col">
            <p class="meta-text">{project.period}</p>
            <p class="meta-text">{project.collaborationModel}</p>
            {#if tags.length > 0}
              <div class="project-tags">
                {#each tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            {/if}
          </div>

          <div class="stack-md">
            <div class="stack-sm">
              <h3 class:flagship-title={project.tier === 'flagship'}>
                <a href={getProjectPath(data.locale, project.slug)} class="project-title-link">
                  {project.title}
                </a>
              </h3>
              <p class="role-tag">{project.roleSummary}</p>
            </div>

            <p>{project.executiveSummary}</p>
            <p class="outcome-line">{project.keyOutcome}</p>

            <!-- Fix #12: hide duplicate link from SR since h3 link exists -->
            <p class="meta-text" aria-hidden="true">
              <a href={getProjectPath(data.locale, project.slug)} tabindex="-1">
                {c.projectsSection.readCaseLabel} <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- ═══ COMPLEMENTARY — Two-column grid ═══ -->
  <section class="dossier-section editorial-grid" aria-labelledby="complementarias-heading">
    <div class="stack-sm">
      <h2 id="complementarias-heading">{c.complementary.heading}</h2>
      <p class="meta-text">{c.complementary.intro}</p>
    </div>

    <div class="facets-grid">
      {#each c.complementary.items as facet}
        <div class="facet-card stack-sm">
          <h3>{facet.title}</h3>
          <p class="meta-text">{facet.role}</p>
          <p>{facet.summary}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<script lang="ts" module>
  function getProjectTags(slug: string, isEn: boolean): string[] {
    const tagsMap: Record<string, string[]> = {
      aztecbot: isEn
        ? ['Robotics', 'CAD', 'Leadership']
        : ['Robótica', 'CAD', 'Liderazgo'],
      'velocity-bucks': isEn
        ? ['Robotics', 'Programming', 'Mentorship']
        : ['Robótica', 'Programación', 'Mentoría'],
      'valladolid-mun': isEn
        ? ['MUN', 'Leadership', 'Events']
        : ['MUN', 'Liderazgo', 'Eventos'],
      'yucatan-i6': isEn
        ? ['Robotics', 'Origin']
        : ['Robótica', 'Origen']
    };
    return tagsMap[slug] ?? [];
  }
</script>

<style>
  /* ─── Hero ─── */
  .hero-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-block: clamp(2.75rem, 6vw, 4.5rem) clamp(2rem, 4vw, 3rem);
    align-items: center;
  }

  @media (min-width: 52rem) {
    .hero-section {
      grid-template-columns: 1.3fr 0.7fr;
      gap: 3rem;
    }
  }

  .core-statement {
    max-width: 58ch;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1rem;
    padding-top: 0.5rem;
  }

  .hero-highlights {
    padding: 1.75rem;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-control);
  }

  .highlight-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .highlight-item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    margin: 0;
  }

  .highlight-number {
    font-family: var(--font-display);
    font-size: var(--text-h2);
    font-weight: 500;
    color: var(--accent-primary);
    line-height: 1.1;
  }

  .highlight-label {
    font-size: var(--text-meta);
    color: var(--text-secondary);
    line-height: 1.35;
  }

  /* ─── Facts strip ─── */
  .facts-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    padding: 1rem 0;
    border-top: 1px solid var(--border-subtle);
    border-bottom: 1px solid var(--border-subtle);
    margin-bottom: 0;
  }

  .fact-item {
    white-space: nowrap;
  }

  /* ─── Timeline steps ─── */
  .timeline-steps {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .timeline-steps::before {
    content: '';
    position: absolute;
    left: 1.125rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background-color: var(--border-subtle);
  }

  .timeline-step {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    margin: 0;
    padding-block: 0.75rem;
  }

  .timeline-step + .timeline-step {
    margin-top: 0;
  }

  .step-number {
    flex-shrink: 0;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: var(--text-h2);
    font-weight: 500;
    color: var(--accent-primary);
    background-color: var(--bg-canvas);
    border: 2px solid var(--border-subtle);
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }

  .step-content strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  .step-detail {
    font-size: var(--text-body);
    max-width: var(--measure-prose);
  }

  /* ─── FEV Pillars ─── */
  .fev-block {
    padding: 1.5rem;
    background-color: var(--bg-surface);
    border-left: 3px solid var(--accent-primary);
  }

  .fev-pillars {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 1.25rem;
  }

  .pillar-card {
    padding-top: 0.75rem;
    border-top: 3px solid var(--pillar-border);
  }

  .pillar-card dt {
    font-weight: 600;
    font-size: var(--text-body);
    margin-bottom: 0.25rem;
  }

  .pillar-card dd {
    margin: 0;
    font-size: var(--text-meta);
    color: var(--text-secondary);
    line-height: 1.55;
  }

  /* ─── Projects ─── */
  .projects-intro {
    padding-bottom: 2rem;
  }

  .project-entry {
    padding-block: 2rem;
    border-top: 1px solid var(--border-subtle);
    transition: background-color var(--duration-fast) var(--ease-out);
  }

  .project-entry:hover,
  .project-entry:focus-within {
    background-color: color-mix(in srgb, var(--bg-surface) 50%, transparent);
  }

  .project-entry.is-flagship {
    padding: 2rem 1.5rem;
    background-color: var(--bg-surface);
    border-top: 1px solid var(--border-strong);
    border-bottom: 1px solid var(--border-strong);
  }

  .project-entry.is-flagship:hover,
  .project-entry.is-flagship:focus-within {
    background-color: color-mix(in srgb, var(--bg-surface) 80%, var(--bg-canvas));
  }

  .flagship-title {
    font-size: 1.15em;
  }

  .role-tag {
    font-size: var(--text-meta);
    font-weight: 600;
    color: var(--accent-primary);
    line-height: 1.4;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-primary);
    background-color: color-mix(in srgb, var(--accent-primary) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent-primary) 20%, transparent);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius-control);
    line-height: 1.4;
  }

  .project-title-link {
    color: var(--text-primary);
    text-decoration: none;
  }

  .project-title-link:hover,
  .project-title-link:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .outcome-line {
    font-weight: 500;
    color: var(--accent-primary);
  }

  /* ─── Complementary — two-column grid ─── */
  .facets-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  @media (min-width: 40rem) {
    .facets-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .facet-card {
    padding: 1.25rem;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-control);
    background-color: var(--bg-canvas);
  }

  @media (prefers-reduced-motion: reduce) {
    .project-entry,
    .project-entry.is-flagship {
      transition: none;
    }
  }
</style>
