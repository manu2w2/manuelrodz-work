<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { AnchorProject, Locale, SiteContent } from '$lib/types/content';
  import { getProjectPath } from '$lib/utils/i18n';

  interface Props {
    locale: Locale;
    projects: AnchorProject[];
    indexContent: SiteContent['projectsIndex'];
    readCaseLabel: string;
  }

  let { locale, projects, indexContent, readCaseLabel }: Props = $props();
</script>

<svelte:head>
  <title>{indexContent.heading} — Manuel Rodríguez</title>
  <meta name="description" content={indexContent.intro} />
  <meta property="og:title" content="{indexContent.heading} — Manuel Rodríguez" />
  <meta property="og:description" content={indexContent.intro} />
</svelte:head>

<section class="container projects-index stack-lg" aria-labelledby="projects-heading">
  <header class="projects-index-header editorial-grid">
    <div class="stack-sm">
      <p class="eyebrow">{indexContent.eyebrow}</p>
      <h1 id="projects-heading">{indexContent.heading}</h1>
    </div>
    <p class="section-lead">{indexContent.intro}</p>
  </header>

  <div class="projects-index-grid">
    {#each projects as project}
      <a
        class="projects-index-card stack-md"
        class:is-flagship={project.tier === 'flagship'}
        href={getProjectPath(locale, project.slug)}
        aria-label={`${project.title} — ${readCaseLabel}`}
      >
        <div class="projects-index-meta">
          <span class="meta-text">{project.period}</span>
          <span class="meta-text">{project.collaborationModel}</span>
        </div>

        <div class="stack-sm">
          <h2>{project.title}</h2>
          <p class="projects-index-role">{project.roleSummary}</p>
        </div>

        <ul class="projects-index-tags" aria-label={project.tags.join(', ')}>
          {#each project.tags as tag}
            <li class="tag">{tag}</li>
          {/each}
        </ul>

        <p>{project.executiveSummary}</p>

        <div class="projects-index-outcome">
          <span class="meta-text">{locale === 'es' ? 'Resultado destacado' : 'Key outcome'}</span>
          <p>{project.keyOutcome}</p>
        </div>

        <span class="projects-index-link">
          <span>{readCaseLabel}</span>
          <Icon name="arrow-right" size={16} />
        </span>
      </a>
    {/each}
  </div>
</section>

<style>
  .projects-index {
    padding-block: 3rem 4rem;
  }

  .projects-index-header {
    align-items: end;
    padding-bottom: 2rem;
  }

  .projects-index-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .projects-index-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
    color: inherit;
    text-decoration: none;
    padding: clamp(1.1rem, 2.5vw, 1.6rem);
    background: var(--bg-canvas);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-control);
    box-shadow: var(--shadow-md);
    transition:
      background-color var(--duration-fast) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .projects-index-card:hover,
  .projects-index-card:focus-visible {
    background-color: color-mix(in srgb, var(--bg-surface) 40%, transparent);
    transform: translateX(4px);
  }

  .projects-index-card.is-flagship {
    border-color: var(--border-strong);
    background-color: var(--bg-surface);
    box-shadow: 0 2px 6px rgba(30, 32, 30, 0.03);
  }

  .projects-index-card.is-flagship:hover,
  .projects-index-card.is-flagship:focus-visible {
    background-color: color-mix(in srgb, var(--bg-surface) 80%, var(--bg-canvas));
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 32, 30, 0.06);
  }

  .projects-index-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.35rem 1rem;
  }

  .projects-index-card h2 {
    font-size: var(--text-body);
  }

  .projects-index-card:hover h2,
  .projects-index-card:focus-visible h2 {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .projects-index-role {
    color: var(--accent-primary);
    font-weight: 600;
  }

  .projects-index-tags {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .projects-index-outcome {
    padding: 0.85rem 1rem;
    background: var(--bg-surface);
    border-left: 3px solid var(--accent-primary);
  }

  .projects-index-outcome p {
    margin: 0.2rem 0 0;
  }

  .projects-index-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-weight: 600;
  }

  @media (max-width: 44rem) {
    .projects-index-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
