import { h as head, e as escape_html, a as attr, ae as ensure_array_like, b as attr_class, d as derived } from "../../../chunks/index.js";
import { S as SITE_CONFIG } from "../../../chunks/site.js";
import { d as getProjectPath } from "../../../chunks/i18n.js";
function getProjectTags(slug, isEn) {
  const tagsMap = {
    aztecbot: isEn ? ["Robotics", "CAD", "Leadership"] : ["Robótica", "CAD", "Liderazgo"],
    "velocity-bucks": isEn ? ["Robotics", "Programming", "Mentorship"] : ["Robótica", "Programación", "Mentoría"],
    "valladolid-mun": isEn ? ["MUN", "Leadership", "Events"] : ["MUN", "Liderazgo", "Eventos"],
    "yucatan-i6": isEn ? ["Robotics", "Origin"] : ["Robótica", "Origen"]
  };
  return tagsMap[slug] ?? [];
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let c = derived(() => data.content);
    let cvFile = derived(() => SITE_CONFIG.cvFiles[data.locale]);
    let isEn = derived(() => data.locale === "en");
    head("thpsgu", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(c().meta.siteTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", c().meta.homeDescription)}/>`);
    });
    $$renderer2.push(`<div class="container"><section class="hero-section svelte-thpsgu" aria-labelledby="dossier-title"><div class="hero-identity stack-md"><p class="meta-text">${escape_html(c().hero.academicStatus)}</p> <h1 id="dossier-title">${escape_html(c().hero.fullName)}</h1> <p class="core-statement svelte-thpsgu">${escape_html(c().hero.coreStatement)}</p> <div class="hero-actions svelte-thpsgu"><a${attr("href", cvFile().href)}${attr("download", cvFile().filename)} class="btn-primary">${escape_html(c().hero.primaryCta)}</a> <a href="#proyectos" class="btn-secondary">${escape_html(c().hero.secondaryCta)}</a></div></div> <aside class="hero-highlights svelte-thpsgu"${attr("aria-label", isEn() ? "Quick highlights" : "Datos destacados")}><ul class="highlight-list svelte-thpsgu"><li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">3</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "Years FTC Robotics" : "Años en robótica FTC")}</span></li> <li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">4</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "National Awards" : "Reconocimientos nacionales")}</span></li> <li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">1</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "International Design Award" : "Design Award internacional")}</span></li> <li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">60+</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "MUN Delegations Led" : "Delegaciones MUN coordinadas")}</span></li></ul></aside></section> <div class="facts-strip svelte-thpsgu" role="list"${attr("aria-label", isEn() ? "Quick facts" : "Datos rápidos")}><span class="fact-item meta-text svelte-thpsgu" role="listitem">📍 ${escape_html(c().hero.location)}</span> <span class="fact-item meta-text svelte-thpsgu" role="listitem">🎓 ${escape_html(c().hero.academicStatus)}</span> <span class="fact-item meta-text svelte-thpsgu" role="listitem">🌐 ${escape_html(isEn() ? "Spanish (Native) · English (Professional)" : "Español (Nativo) · Inglés (Profesional)")}</span> <span class="fact-item meta-text svelte-thpsgu" role="listitem">⚙️ ${escape_html(isEn() ? "Robotics · CAD · Web Dev · Leadership" : "Robótica · CAD · Desarrollo web · Liderazgo")}</span></div> <section class="dossier-section editorial-grid" aria-labelledby="metodo-heading"><div class="stack-sm"><h2 id="metodo-heading">${escape_html(c().method.heading)}</h2> <p class="meta-text">${escape_html(c().method.intro)}</p></div> <div class="stack-lg"><div class="stack-sm"><h3>${escape_html(c().method.philosophyTitle)}</h3> <p>${escape_html(c().method.philosophyBody)}</p></div> <div class="stack-md"><h3>${escape_html(c().method.stepsTitle)}</h3> <ol class="timeline-steps svelte-thpsgu"${attr("aria-label", c().method.stepsTitle)}><!--[-->`);
    const each_array = ensure_array_like(c().method.steps);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let step = each_array[i];
      $$renderer2.push(`<li class="timeline-step svelte-thpsgu"><span class="step-number svelte-thpsgu" aria-hidden="true">${escape_html(i + 1)}</span> <div class="step-content svelte-thpsgu"><strong class="svelte-thpsgu">${escape_html(step.name)}</strong> <p class="step-detail svelte-thpsgu">${escape_html(step.detail)}</p></div></li>`);
    }
    $$renderer2.push(`<!--]--></ol></div> <div class="fev-block stack-md svelte-thpsgu"><div class="stack-sm"><h3>${escape_html(c().method.fevTitle)}</h3> <p>${escape_html(c().method.fevSummary)}</p></div> <dl class="fev-pillars svelte-thpsgu"><!--[-->`);
    const each_array_1 = ensure_array_like(c().method.fevPillars);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let pillar = each_array_1[$$index_1];
      $$renderer2.push(`<div class="pillar-card svelte-thpsgu"><dt class="svelte-thpsgu">`);
      if (isEn() && pillar.term.includes("(")) {
        $$renderer2.push(`<!--[0-->${escape_html(pillar.term.split("(")[0])}(<span lang="es">${escape_html(pillar.term.split("(")[1].replace(")", ""))}</span>)`);
      } else {
        $$renderer2.push(`<!--[-1-->${escape_html(pillar.term)}`);
      }
      $$renderer2.push(`<!--]--></dt> <dd class="svelte-thpsgu">${escape_html(pillar.definition)}</dd></div>`);
    }
    $$renderer2.push(`<!--]--></dl></div></div></section> <section id="proyectos" class="dossier-section" aria-labelledby="proyectos-heading"><div class="editorial-grid projects-intro svelte-thpsgu"><div><h2 id="proyectos-heading">${escape_html(c().projectsSection.heading)}</h2></div> <div><p>${escape_html(c().projectsSection.intro)}</p></div></div> <div class="projects-ledger"><!--[-->`);
    const each_array_2 = ensure_array_like(c().projectsSection.items);
    for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
      let project = each_array_2[$$index_3];
      const tags = getProjectTags(project.slug, isEn());
      $$renderer2.push(`<article${attr_class("project-entry editorial-grid svelte-thpsgu", void 0, { "is-flagship": project.tier === "flagship" })}><div class="stack-sm project-meta-col"><p class="meta-text">${escape_html(project.period)}</p> <p class="meta-text">${escape_html(project.collaborationModel)}</p> `);
      if (tags.length > 0) {
        $$renderer2.push(`<!--[0--><div class="project-tags svelte-thpsgu"><!--[-->`);
        const each_array_3 = ensure_array_like(tags);
        for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
          let tag = each_array_3[$$index_2];
          $$renderer2.push(`<span class="tag svelte-thpsgu">${escape_html(tag)}</span>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="stack-md"><div class="stack-sm"><h3${attr_class("svelte-thpsgu", void 0, { "flagship-title": project.tier === "flagship" })}><a${attr("href", getProjectPath(data.locale, project.slug))} class="project-title-link svelte-thpsgu">${escape_html(project.title)}</a></h3> <p class="role-tag svelte-thpsgu">${escape_html(project.roleSummary)}</p></div> <p>${escape_html(project.executiveSummary)}</p> <p class="outcome-line svelte-thpsgu">${escape_html(project.keyOutcome)}</p> <p class="meta-text" aria-hidden="true"><a${attr("href", getProjectPath(data.locale, project.slug))} tabindex="-1">${escape_html(c().projectsSection.readCaseLabel)} <span aria-hidden="true">→</span></a></p></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="complementarias-heading"><div class="stack-sm"><h2 id="complementarias-heading">${escape_html(c().complementary.heading)}</h2> <p class="meta-text">${escape_html(c().complementary.intro)}</p></div> <div class="facets-grid svelte-thpsgu"><!--[-->`);
    const each_array_4 = ensure_array_like(c().complementary.items);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let facet = each_array_4[$$index_4];
      $$renderer2.push(`<div class="facet-card stack-sm svelte-thpsgu"><h3>${escape_html(facet.title)}</h3> <p class="meta-text">${escape_html(facet.role)}</p> <p>${escape_html(facet.summary)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section></div>`);
  });
}
export {
  _page as default
};
