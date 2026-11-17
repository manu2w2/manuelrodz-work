<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { SITE_CONFIG } from "$lib/config/site";
  import { getProjectPath } from "$lib/utils/i18n";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let c = $derived(data.content);
  let cvFile = $derived(SITE_CONFIG.cvFiles[data.locale]);

  let personJsonLd = $derived(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_CONFIG.authorName,
      url: `${SITE_CONFIG.domain}/${data.locale}`,
      image: `${SITE_CONFIG.domain}${SITE_CONFIG.heroImage.src}`,
      description: c.meta.homeDescription,
      email: SITE_CONFIG.contactEmail,
      sameAs: [SITE_CONFIG.githubProfileUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mérida",
        addressRegion: "Yucatán",
        addressCountry: "MX",
      },
      knowsAbout: [
        "Mechanical design",
        "Embedded systems",
        "FTC robotics",
        "Web development",
      ],
    }).replace(/</g, "\\u003c"),
  );

  function heroSrcSet(format: "avif" | "webp") {
    return SITE_CONFIG.heroImage.widths
      .map((w) => `/images/hero-robot-${w}.${format} ${w}w`)
      .join(", ");
  }

  let heroImgSrc = $state<string>(SITE_CONFIG.heroImage.src);
  let photoUnavailable = $state<boolean>(false);

  function handlePhotoError() {
    if (
      SITE_CONFIG.heroImage.fallbackSrc &&
      heroImgSrc !== SITE_CONFIG.heroImage.fallbackSrc
    ) {
      heroImgSrc = SITE_CONFIG.heroImage.fallbackSrc;
    } else {
      photoUnavailable = true;
    }
  }
</script>

<svelte:head>
  <title>{c.meta.siteTitle}</title>
  <meta name="description" content={c.meta.homeDescription} />
  <meta property="og:title" content={c.meta.siteTitle} />
  <meta property="og:description" content={c.meta.homeDescription} />
  <meta name="twitter:title" content={c.meta.siteTitle} />
  <meta name="twitter:description" content={c.meta.homeDescription} />
  {@html `<script type="application/ld+json">${personJsonLd}</script>`}
</svelte:head>

<div class="container">
  <!-- ═══ HERO — Editorial Dossier: Identity & Technical Frame ═══ -->
  <section class="hero-section" aria-labelledby="dossier-title">
    <div class="hero-identity">
      <div class="hero-main-copy stack-md">
        <div class="eyebrow anim-fade-up">
          <svg
            class="eyebrow-square"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <rect width="6" height="6" fill="var(--indicator-square)" />
          </svg>
          <span>{c.hero.academicStatus}</span>
        </div>

        <h1 id="dossier-title" class="hero-title anim-fade-up anim-delay-1">
          {c.hero.fullName}
        </h1>

        <p class="core-statement anim-fade-up anim-delay-2">
          {c.hero.coreStatement}
        </p>

        <!-- Explorar proyectos es primario, descarga directa de CV PDF es secundario -->
        <div class="hero-actions anim-fade-up anim-delay-3">
          <a href="#proyectos" class="btn-primary">
            <span>{c.hero.secondaryCta}</span>
            <Icon name="arrow-right" size={15} />
          </a>
          <a
            href={cvFile.href}
            download={cvFile.filename}
            class="btn-secondary"
          >
            <Icon name="download" size={16} />
            <span>{c.hero.primaryCta}</span>
          </a>
        </div>
      </div>

      <!-- Ficha técnica de stack directo en el Hero (alineada con base de métricas) -->
      <div class="hero-spec-bar anim-fade-up anim-delay-4">
        <span class="spec-label">{c.hero.coreStackLabel}</span>
        <span class="spec-values">{c.hero.coreStackValues}</span>
      </div>
    </div>

    <!-- ═══ PHOTO PLACE / CAD WIREFRAME & HEADLINE STATS ═══ -->
    <aside
      class="hero-sidebar anim-fade-up anim-delay-2"
      aria-label={c.hero.sidebarLabel}
    >
      <div class="photo-frame">
        <div class="photo-corner top-left" aria-hidden="true">+</div>
        <div class="photo-corner top-right" aria-hidden="true">+</div>
        <div class="photo-corner bottom-left" aria-hidden="true">+</div>
        <div class="photo-corner bottom-right" aria-hidden="true">+</div>

        <div class="photo-container">
          {#if !photoUnavailable && heroImgSrc === SITE_CONFIG.heroImage.src}
            <picture>
              <source
                type="image/avif"
                srcset={heroSrcSet('avif')}
                sizes={SITE_CONFIG.heroImage.sizes}
              />
              <source
                type="image/webp"
                srcset={heroSrcSet('webp')}
                sizes={SITE_CONFIG.heroImage.sizes}
              />
              <img
                src={heroImgSrc}
                alt={c.hero.imageAlt}
                width={SITE_CONFIG.heroImage.width}
                height={SITE_CONFIG.heroImage.height}
                fetchpriority="high"
                decoding="async"
                onerror={handlePhotoError}
                class="profile-image"
              />
            </picture>
          {:else if !photoUnavailable}
            <img
              src={heroImgSrc}
              alt={c.hero.imageAlt}
              width={SITE_CONFIG.heroImage.width}
              height={SITE_CONFIG.heroImage.height}
              decoding="async"
              onerror={handlePhotoError}
              class="profile-image"
            />
          {:else}
            <!-- Fallback técnico: Wireframe isométrico de chasis/mecanismo (aspecto 16:11) -->
            <div
              class="cad-placeholder"
              role="img"
              aria-label={c.hero.diagramLabel}
            >
              <svg
                viewBox="0 0 360 248"
                class="cad-svg"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Retícula de plano -->
                <g
                  stroke="currentColor"
                  stroke-opacity="0.12"
                  stroke-width="0.75"
                >
                  <line x1="0" y1="41" x2="360" y2="41" />
                  <line x1="0" y1="82" x2="360" y2="82" />
                  <line x1="0" y1="124" x2="360" y2="124" />
                  <line x1="0" y1="165" x2="360" y2="165" />
                  <line x1="0" y1="206" x2="360" y2="206" />
                  <line x1="60" y1="0" x2="60" y2="248" />
                  <line x1="120" y1="0" x2="120" y2="248" />
                  <line x1="180" y1="0" x2="180" y2="248" />
                  <line x1="240" y1="0" x2="240" y2="248" />
                  <line x1="300" y1="0" x2="300" y2="248" />
                </g>
                <!-- Ejes isométricos -->
                <g
                  stroke="currentColor"
                  stroke-opacity="0.25"
                  stroke-dasharray="3 3"
                  stroke-width="1"
                >
                  <line x1="180" y1="24" x2="180" y2="224" />
                  <line x1="40" y1="124" x2="320" y2="124" />
                </g>
                <!-- Chasis isométrico wireframe -->
                <g
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                >
                  <!-- Base inferior -->
                  <polygon
                    points="180,182 275,136 180,91 85,136"
                    fill="currentColor"
                    fill-opacity="0.03"
                  />
                  <!-- Estructura superior -->
                  <polygon
                    points="180,153 275,107 180,62 85,107"
                    fill="currentColor"
                    fill-opacity="0.04"
                  />
                  <!-- Pilares verticales -->
                  <line x1="180" y1="182" x2="180" y2="153" />
                  <line x1="275" y1="136" x2="275" y2="107" />
                  <line x1="180" y1="91" x2="180" y2="62" />
                  <line x1="85" y1="136" x2="85" y2="107" />
                  <!-- Travesaños internos -->
                  <line x1="132" y1="130" x2="228" y2="85" stroke-width="1" />
                  <line x1="132" y1="85" x2="228" y2="130" stroke-width="1" />
                  <!-- Ruedas / Módulos laterales -->
                  <ellipse
                    cx="115"
                    cy="150"
                    rx="14"
                    ry="19"
                    transform="rotate(-26 115 150)"
                  />
                  <ellipse
                    cx="245"
                    cy="150"
                    rx="14"
                    ry="19"
                    transform="rotate(26 245 150)"
                  />
                  <ellipse
                    cx="115"
                    cy="94"
                    rx="12"
                    ry="16"
                    transform="rotate(-26 115 94)"
                    stroke-opacity="0.65"
                  />
                  <ellipse
                    cx="245"
                    cy="94"
                    rx="12"
                    ry="16"
                    transform="rotate(26 245 94)"
                    stroke-opacity="0.65"
                  />
                </g>
                <!-- Cotas y etiquetas técnicas con contraste WCAG AA (>= 9.5:1) -->
                <g
                  fill="var(--text-tertiary)"
                  font-family="var(--font-mono)"
                  font-size="9"
                  font-weight="600"
                  letter-spacing="0.04em"
                >
                  <text x="14" y="20">FIG 01 // CHASSIS_ISO_REV26</text>
                  <text x="14" y="236">SCALE 1:5 · TOL ±0.2MM</text>
                  <text x="242" y="236">20.96°N 89.59°W</text>
                </g>
              </svg>
            </div>
          {/if}
        </div>

        <div class="photo-caption">
          <span class="caption-name">{c.hero.imageCaption}</span>
          <span class="caption-location">
            <Icon name="pin" size={12} />
            {c.hero.location}
          </span>
        </div>
      </div>

      <div class="hero-highlights">
        <ul class="highlight-list">
          {#each c.hero.stats as stat}
            <li class="highlight-item">
              <span class="highlight-number">{stat.value}</span>
              <span class="highlight-label">{stat.label}</span>
            </li>
          {/each}
        </ul>
      </div>
    </aside>
  </section>

  <!-- ═══ CREDENTIALS STRIP (Structural Band Anchored to Master Grid) ═══ -->
  <div
    class="facts-strip anim-fade-up anim-delay-4"
    role="list"
    aria-label={c.hero.quickFactsLabel}
  >
    {#each c.hero.quickFacts as fact}
      <span class="fact-item meta-text" role="listitem">
        <Icon name={fact.icon} size={14} class="fact-icon" />
        <span>{fact.text}</span>
      </span>
    {/each}
  </div>

  <!-- ═══ METHOD — Editorial Timeline & FEV Framework ═══ -->
  <section
    class="dossier-section editorial-grid"
    aria-labelledby="metodo-heading"
  >
    <div class="stack-sm">
      <span class="eyebrow">{c.method.eyebrow}</span>
      <h2 id="metodo-heading">{c.method.heading}</h2>
      <p class="meta-text">{c.method.intro}</p>
    </div>

    <div class="stack-lg">
      <div class="philosophy-box stack-sm">
        <h3 class="philosophy-title">{c.method.philosophyTitle}</h3>
        <p class="philosophy-body">{c.method.philosophyBody}</p>
      </div>

      <div class="stack-md">
        <h3 class="subsection-title">{c.method.stepsTitle}</h3>
        <ol class="timeline-steps" aria-label={c.method.stepsTitle}>
          {#each c.method.steps as step, i}
            <li class="timeline-step">
              <span class="step-number" aria-hidden="true">{i + 1}</span>
              <div class="step-content">
                <strong class="step-name">{step.name}</strong>
                <p class="step-detail">{step.detail}</p>
              </div>
            </li>
          {/each}
        </ol>
      </div>

      <div class="fev-block stack-md">
        <div class="stack-sm">
          <h3 class="subsection-title">{c.method.fevTitle}</h3>
          <p>{c.method.fevSummary}</p>
        </div>
        <dl class="fev-pillars">
          {#each c.method.fevPillars as pillar}
            <div class="pillar-card">
              <dt>
                {pillar.term}{#if pillar.termAlt}
                  (<span lang="es">{pillar.termAlt}</span>){/if}
              </dt>
              <dd>{pillar.definition}</dd>
            </div>
          {/each}
        </dl>
      </div>
    </div>
  </section>

  <!-- ═══ PROJECTS — Anchor Milestones Ledger ═══ -->
  <section
    id="proyectos"
    class="dossier-section"
    aria-labelledby="proyectos-heading"
  >
    <div class="editorial-grid projects-intro">
      <div class="stack-sm">
        <span class="eyebrow">{c.projectsSection.eyebrow}</span>
        <h2 id="proyectos-heading">{c.projectsSection.heading}</h2>
      </div>
      <div>
        <p class="section-lead">{c.projectsSection.intro}</p>
      </div>
    </div>

    <div class="projects-ledger">
      {#each c.projectsSection.items as project}
        <article
          class="project-entry editorial-grid"
          class:is-flagship={project.tier === "flagship"}
        >
          <div class="stack-sm project-meta-col">
            <p class="meta-text">{project.period}</p>
            <p class="meta-text">{project.collaborationModel}</p>
            {#if project.tags.length > 0}
              <div class="project-tags">
                {#each project.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            {/if}
          </div>

          <div class="stack-md">
            <div class="stack-sm">
              <h3 class:flagship-title={project.tier === "flagship"}>
                <a
                  href={getProjectPath(data.locale, project.slug)}
                  class="project-title-link"
                >
                  {project.title}
                </a>
              </h3>
              <p class="role-tag">
                {project.roleSummary} &middot; {project.contextNote}
              </p>
            </div>

            <p class="project-summary">{project.executiveSummary}</p>

            <div class="outcome-box">
              <Icon name="award" size={17} class="outcome-icon" />
              <p class="outcome-line">{project.keyOutcome}</p>
            </div>

            <p class="meta-text" aria-hidden="true">
              <a
                href={getProjectPath(data.locale, project.slug)}
                tabindex="-1"
                class="read-more-link"
              >
                <span>{c.projectsSection.readCaseLabel}</span>
                <Icon name="arrow-right" size={14} />
              </a>
            </p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- ═══ RECOGNITIONS — Results beyond FTC ═══ -->
  <section
    class="dossier-section"
    aria-labelledby="reconocimientos-heading"
  >
    <div class="editorial-grid projects-intro">
      <div class="stack-sm">
        <span class="eyebrow">{c.recognitionsSection.eyebrow}</span>
        <h2 id="reconocimientos-heading">{c.recognitionsSection.heading}</h2>
      </div>
      <div>
        <p class="section-lead">{c.recognitionsSection.intro}</p>
      </div>
    </div>

    <ul class="recognitions-grid">
      {#each c.recognitionsSection.items as recognition}
        <li class="recognition-card stack-sm">
          <h3>{recognition.result}</h3>
          <p class="meta-text">{recognition.event}</p>
          {#if recognition.detail}
            <p>{recognition.detail}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </section>

  <!-- ═══ COMPLEMENTARY — Holistic Dimensions ═══ -->
  <section
    class="dossier-section editorial-grid"
    aria-labelledby="complementarias-heading"
  >
    <div class="stack-sm">
      <span class="eyebrow">{c.complementary.eyebrow}</span>
      <h2 id="complementarias-heading">{c.complementary.heading}</h2>
      <p class="meta-text">{c.complementary.intro}</p>
    </div>

    <div class="facets-grid">
      {#each c.complementary.items as facet, idx}
        <div class="facet-card stack-sm">
          <div class="facet-header">
            <span class="facet-numeral">0{idx + 1}</span>
            <p class="meta-text facet-role">{facet.role}</p>
          </div>
          <h3>{facet.title}</h3>
          <p>{facet.summary}</p>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  /* ─── Hero Layout (Unified Master Grid 5fr / 7fr & Baseline Balanced) ─── */
  .hero-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.25rem;
    padding-block: clamp(1.75rem, 3.5vw, 2.75rem) clamp(2rem, 4vw, 3rem);
    align-items: start;
  }

  @media (min-width: 54rem) {
    .hero-section {
      grid-template-columns: var(--grid-col-left) var(--grid-col-right);
      gap: var(--grid-gap);
      align-items: stretch;
    }
  }

  .hero-identity {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    padding-top: 0.25rem;
  }

  .eyebrow-square {
    display: block;
    flex-shrink: 0;
  }

  .hero-title {
    font-size: clamp(2.25rem, 3.8vw, 3.2rem);
    letter-spacing: -0.03em;
    line-height: 1.06;
  }

  .core-statement {
    font-size: 1.0625rem;
    line-height: 1.65;
    color: var(--text-primary);
    max-width: 54ch;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 0.9rem;
    padding-top: 0.35rem;
  }

  /* P0: Contraste WCAG AA (>= 4.5:1) y tipografía monoespaciada >= 12px */
  .hero-spec-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.45rem 0.6rem;
    padding-top: 0.95rem;
    border-top: 1px dashed var(--border-strong);
    font-family: var(--font-mono);
    font-size: 0.75rem; /* 12px mínimo garantizado */
    line-height: 1.45;
    letter-spacing: 0.08em;
  }

  .spec-label {
    font-weight: 700;
    color: var(--text-tertiary); /* #3A433E — contraste 9.55:1 */
  }

  .spec-values {
    font-weight: 500;
    color: var(--text-secondary); /* #525B56 — contraste 6.45:1 */
  }

  /* ─── Photo Place / CAD Wireframe ─── */
  .hero-sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .photo-frame {
    position: relative;
    padding: 0.65rem;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-control);
    box-shadow: 0 4px 14px rgba(30, 32, 30, 0.05);
    transition:
      transform var(--duration-normal) var(--ease-spring),
      box-shadow var(--duration-normal) var(--ease-out),
      border-color var(--duration-fast) var(--ease-out);
  }

  .photo-frame:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 26px rgba(30, 32, 30, 0.09);
    border-color: var(--accent-primary);
  }

  .photo-corner {
    position: absolute;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--accent-primary);
    line-height: 1;
    pointer-events: none;
  }

  .photo-corner.top-left {
    top: 0.2rem;
    left: 0.3rem;
  }
  .photo-corner.top-right {
    top: 0.2rem;
    right: 0.3rem;
  }
  .photo-corner.bottom-left {
    bottom: 0.2rem;
    left: 0.3rem;
  }
  .photo-corner.bottom-right {
    bottom: 0.2rem;
    right: 0.3rem;
  }

  /* P1: Relación de aspecto 16:11 para equilibrar altura con columna izquierda */
  .photo-container {
    aspect-ratio: 16 / 11;
    overflow: hidden;
    background-color: var(--bg-canvas);
    border: 1px solid var(--border-subtle);
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: contrast(1.02);
    transition: transform 450ms var(--ease-smooth);
  }

  .photo-frame:hover .profile-image {
    transform: scale(1.03);
  }

  .cad-placeholder {
    width: 100%;
    height: 100%;
    color: var(--accent-primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cad-svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .photo-caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.55rem;
    padding-inline: 0.2rem;
    font-size: var(--text-meta);
  }

  .caption-name {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 0.8125rem;
    letter-spacing: 0.02em;
  }

  .caption-location {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--text-secondary);
    font-size: 0.8125rem;
  }

  /* ─── Highlights Under Photo (Blueprint Grid Style) ─── */
  .hero-highlights {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-control);
    overflow: hidden;
  }

  .highlight-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .highlight-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin: 0;
    padding: 0.85rem 1.1rem;
    border-bottom: 1px solid var(--border-subtle);
    border-right: 1px solid var(--border-subtle);
    transition: background-color var(--duration-fast) var(--ease-out);
  }

  .highlight-item:nth-child(2n) {
    border-right: none;
  }

  .highlight-item:nth-child(n + 3) {
    border-bottom: none;
  }

  .highlight-item:hover {
    background-color: color-mix(in srgb, var(--accent-primary) 6%, transparent);
  }

  .highlight-number {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--accent-primary);
    line-height: 1.05;
  }

  .highlight-label {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    line-height: 1.3;
    font-weight: 500;
  }

  /* ─── Credentials Strip (Structural Band with border-y #E2E4DD & py-4) ─── */
  .facts-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem 2rem;
    padding-block: 1rem; /* py-4 uniforme */
    padding-inline: 0;
    margin: 0;
    border-top: 1px solid var(--border-structural);
    border-bottom: 1px solid var(--border-structural);
  }

  .fact-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
    padding: 0.2rem 0;
    color: var(--text-secondary);
    font-weight: 500;
    transition: color var(--duration-fast) var(--ease-out);
  }

  .fact-item:hover {
    color: var(--text-primary);
  }

  :global(.fact-icon) {
    color: var(--accent-primary);
    flex-shrink: 0;
    transition: transform var(--duration-fast) var(--ease-spring);
  }

  .fact-item:hover :global(.fact-icon) {
    transform: scale(1.12);
  }

  /* Section immediately after structural strip avoids double border */
  .facts-strip + .dossier-section {
    border-top: none;
  }

  /* ─── Method & Timeline ─── */
  .philosophy-box {
    padding: 1.25rem 1.5rem;
    background-color: color-mix(
      in srgb,
      var(--bg-surface) 60%,
      var(--bg-canvas)
    );
    border-left: 3px solid var(--accent-primary);
    transition: transform var(--duration-fast) var(--ease-spring);
  }

  .philosophy-box:hover {
    transform: translateX(3px);
  }

  .philosophy-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--accent-primary);
  }

  .philosophy-body {
    font-size: var(--text-body);
    line-height: 1.65;
  }

  .subsection-title {
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  /* P1: Continuidad visual del flujo 1 -> 4 */
  .timeline-steps {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .timeline-steps::before {
    content: "";
    position: absolute;
    left: calc(1.125rem - 0.75px);
    top: 1.125rem;
    bottom: 1.125rem;
    width: 1.5px;
    background-color: var(--connector-line); /* #C5CBC6 */
  }

  .timeline-step {
    display: flex;
    gap: 1.15rem;
    align-items: flex-start;
    margin: 0;
    padding-block: 0.8rem;
    padding-inline: 0;
    border-radius: var(--radius-control);
    transition:
      transform var(--duration-fast) var(--ease-spring),
      background-color var(--duration-fast) var(--ease-out);
  }

  .timeline-step:hover {
    transform: translateX(4px);
    background-color: color-mix(in srgb, var(--bg-surface) 35%, transparent);
  }

  .step-number {
    flex-shrink: 0;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.9375rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: var(--accent-primary);
    background-color: var(--bg-surface);
    border: 1.5px solid var(--accent-primary);
    border-radius: 50%;
    position: relative;
    z-index: 1;
    transition:
      transform var(--duration-fast) var(--ease-spring),
      border-color var(--duration-fast) var(--ease-out),
      background-color var(--duration-fast) var(--ease-out),
      color var(--duration-fast) var(--ease-out),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .timeline-step:hover .step-number {
    transform: scale(1.1);
    background-color: var(--accent-primary);
    color: var(--bg-canvas);
    box-shadow: 0 2px 8px rgba(44, 76, 59, 0.2);
  }

  .step-name {
    display: block;
    font-size: 1.0625rem; /* 17px */
    font-weight: 600;
    line-height: 1.35;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
    transition: color var(--duration-fast) var(--ease-out);
  }

  .timeline-step:hover .step-name {
    color: var(--accent-primary);
  }

  .step-detail {
    font-size: var(--text-body);
    color: var(--text-secondary);
    max-width: var(--measure-prose);
    line-height: 1.6;
  }

  /* ─── FEV Pillars ─── */
  .fev-block {
    padding: 1.75rem;
    background-color: var(--bg-surface);
    border-left: 3px solid var(--accent-primary);
  }

  .fev-pillars {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 1.5rem;
  }

  .pillar-card {
    padding: 1rem 0.75rem 0.75rem;
    border-top: 3px solid var(--pillar-border);
    border-radius: var(--radius-control);
    transition:
      transform var(--duration-fast) var(--ease-spring),
      background-color var(--duration-fast) var(--ease-out),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .pillar-card:hover {
    transform: translateY(-3px);
    background-color: color-mix(
      in srgb,
      var(--bg-canvas) 70%,
      var(--bg-surface)
    );
    box-shadow: 0 4px 12px rgba(30, 32, 30, 0.05);
  }

  .pillar-card dt {
    font-weight: 600;
    font-size: var(--text-body);
    margin-bottom: 0.35rem;
    color: var(--text-primary);
  }

  .pillar-card dd {
    margin: 0;
    font-size: var(--text-meta);
    color: var(--text-secondary);
    line-height: 1.55;
  }

  /* ─── Projects Ledger ─── */
  .projects-intro {
    padding-bottom: 2rem;
  }

  .section-lead {
    font-size: 1.0625rem;
    color: var(--text-secondary);
  }

  .project-entry {
    padding-block: 2.25rem;
    padding-inline: 0;
    border-top: 1px solid var(--border-subtle);
    border-radius: var(--radius-control);
    transition:
      background-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring);
  }

  .project-entry:hover,
  .project-entry:focus-within {
    background-color: color-mix(in srgb, var(--bg-surface) 40%, transparent);
    transform: translateX(4px);
  }

  .project-entry.is-flagship {
    padding: 2.25rem 1.75rem;
    background-color: var(--bg-surface);
    border-top: 1px solid var(--border-strong);
    border-bottom: 1px solid var(--border-strong);
    box-shadow: 0 2px 6px rgba(30, 32, 30, 0.03);
    transition:
      background-color var(--duration-fast) var(--ease-out),
      transform var(--duration-fast) var(--ease-spring),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .project-entry.is-flagship:hover,
  .project-entry.is-flagship:focus-within {
    background-color: color-mix(
      in srgb,
      var(--bg-surface) 80%,
      var(--bg-canvas)
    );
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 32, 30, 0.06);
  }

  .flagship-title {
    font-size: 1.25rem;
  }

  .project-title-link {
    color: var(--text-primary);
    text-decoration: none;
    font-family: var(--font-display);
    font-size: var(--text-h2);
    font-weight: 500;
    transition: color var(--duration-fast) var(--ease-out);
  }

  .project-title-link:hover,
  .project-title-link:focus-visible {
    color: var(--accent-primary);
    text-decoration: underline;
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
    padding-top: 0.25rem;
  }

  .tag {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-primary);
    background-color: color-mix(in srgb, var(--accent-primary) 8%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent-primary) 22%, transparent);
    padding: 0.2rem 0.55rem;
    border-radius: var(--radius-control);
    line-height: 1.35;
    transition:
      transform var(--duration-fast) var(--ease-spring),
      background-color var(--duration-fast) var(--ease-out);
  }

  .tag:hover {
    transform: translateY(-1px);
    background-color: color-mix(
      in srgb,
      var(--accent-primary) 15%,
      transparent
    );
  }

  .project-summary {
    line-height: 1.68;
  }

  .outcome-box {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.75rem 1rem;
    background-color: color-mix(
      in srgb,
      var(--bg-canvas) 80%,
      var(--bg-surface)
    );
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-control);
    transition:
      transform var(--duration-fast) var(--ease-spring),
      border-color var(--duration-fast) var(--ease-out);
  }

  .outcome-box:hover {
    transform: translateY(-1px);
    border-color: var(--accent-primary);
  }

  :global(.outcome-icon) {
    color: var(--accent-primary);
    margin-top: 0.15rem;
    transition: transform var(--duration-fast) var(--ease-spring);
  }

  .outcome-box:hover :global(.outcome-icon) {
    transform: rotate(8deg) scale(1.1);
  }

  .outcome-line {
    font-weight: 500;
    font-size: var(--text-meta);
    color: var(--text-primary);
    line-height: 1.5;
  }

  .read-more-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: 600;
    font-size: var(--text-meta);
  }

  /* ─── Complementary Grid ─── */
  .facets-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .recognitions-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    list-style: none;
    margin: 1.5rem 0 0;
    padding: 0;
    max-width: none;
  }

  @media (min-width: 44rem) {
    .recognitions-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .recognition-card {
    margin: 0;
    padding: 1.25rem;
    border: 1px solid var(--border-subtle);
    background-color: var(--bg-surface);
  }

  .recognition-card h3 {
    color: var(--accent-primary);
  }

  @media (min-width: 44rem) {
    .facets-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .facet-card {
    padding: 1.5rem;
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-control);
    background-color: var(--bg-canvas);
    transition:
      transform var(--duration-fast) var(--ease-spring),
      border-color var(--duration-fast) var(--ease-out),
      box-shadow var(--duration-fast) var(--ease-out);
  }

  .facet-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-primary);
    box-shadow: 0 8px 20px rgba(30, 32, 30, 0.08);
  }

  .facet-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .facet-numeral {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--accent-primary);
    display: inline-block;
    transition: transform var(--duration-fast) var(--ease-spring);
  }

  .facet-card:hover .facet-numeral {
    transform: scale(1.15);
  }

  .facet-role {
    font-weight: 600;
    color: var(--text-secondary);
  }

  @media (prefers-reduced-motion: reduce) {
    .anim-fade-up,
    .project-entry,
    .project-entry.is-flagship,
    .profile-image,
    .photo-frame,
    .highlight-item,
    .timeline-step,
    .step-number,
    .pillar-card,
    .tag,
    .outcome-box,
    .facet-card,
    .facet-numeral {
      animation: none !important;
      transition: none !important;
      transform: none !important;
    }
  }
</style>
