import { h as head, e as escape_html, a as attr, ae as ensure_array_like, c as attr_class, d as derived } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { S as SITE_CONFIG } from "../../../chunks/site.js";
import { d as getProjectPath } from "../../../chunks/i18n.js";
function getProjectTags(slug, isEn) {
  const tagsMap = {
    aztecbot: isEn ? ["FTC Robotics", "CAD-First", "Drive Coach"] : ["Robótica FTC", "Flujo CAD", "Drive Coach"],
    "velocity-bucks": isEn ? ["Team Founder", "Java Architecture", "Web Dev"] : ["Cofundación", "Arquitectura Java", "Web"],
    "valladolid-mun": isEn ? ["Model UN", "Horizontal Leadership", "60+ Delegations"] : ["Modelo ONU", "Liderazgo Horizontal", "60+ Delegaciones"],
    "yucatan-i6": isEn ? ["Robotics Origin", "Mechanical Intake", "3rd Place"] : ["Origen Vocacional", "Mecanismo Recolector", "3.er Lugar"]
  };
  return tagsMap[slug] ?? [];
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let c = derived(() => data.content);
    let cvFile = derived(() => SITE_CONFIG.cvFiles[data.locale]);
    let isEn = derived(() => data.locale === "en");
    let profileImgSrc = SITE_CONFIG.profileImage.src;
    head("thpsgu", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(c().meta.siteTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", c().meta.homeDescription)}/>`);
    });
    $$renderer2.push(`<div class="container"><section class="hero-section svelte-thpsgu" aria-labelledby="dossier-title"><div class="hero-identity stack-md"><div class="eyebrow anim-fade-up svelte-thpsgu">`);
    Icon($$renderer2, { name: "academic", size: 14 });
    $$renderer2.push(`<!----> <span>${escape_html(c().hero.academicStatus)}</span></div> <h1 id="dossier-title" class="hero-title anim-fade-up anim-delay-1 svelte-thpsgu">${escape_html(c().hero.fullName)}</h1> <p class="core-statement anim-fade-up anim-delay-2 svelte-thpsgu">${escape_html(c().hero.coreStatement)}</p> <div class="hero-actions anim-fade-up anim-delay-3 svelte-thpsgu"><a${attr("href", cvFile().href)}${attr("download", cvFile().filename)} class="btn-primary">`);
    Icon($$renderer2, { name: "download", size: 16 });
    $$renderer2.push(`<!----> <span>${escape_html(c().hero.primaryCta)}</span></a> <a href="#proyectos" class="btn-secondary"><span>${escape_html(c().hero.secondaryCta)}</span> `);
    Icon($$renderer2, { name: "arrow-right", size: 15 });
    $$renderer2.push(`<!----></a></div></div> <aside class="hero-sidebar stack-md anim-fade-up anim-delay-2 svelte-thpsgu"${attr("aria-label", isEn() ? "Personal record & highlights" : "Registro personal y datos destacados")}><div class="photo-frame svelte-thpsgu"><div class="photo-corner top-left svelte-thpsgu" aria-hidden="true">+</div> <div class="photo-corner top-right svelte-thpsgu" aria-hidden="true">+</div> <div class="photo-corner bottom-left svelte-thpsgu" aria-hidden="true">+</div> <div class="photo-corner bottom-right svelte-thpsgu" aria-hidden="true">+</div> <div class="photo-container svelte-thpsgu"><img${attr("src", profileImgSrc)}${attr("alt", SITE_CONFIG.profileImage.alt)} width="400" height="480" class="profile-image svelte-thpsgu" onerror="this.__e=event"/></div> <div class="photo-caption svelte-thpsgu"><span class="caption-name svelte-thpsgu">${escape_html(SITE_CONFIG.brandWordmark)}</span> <span class="caption-location svelte-thpsgu">`);
    Icon($$renderer2, { name: "pin", size: 12 });
    $$renderer2.push(`<!----> ${escape_html(c().hero.location)}</span></div></div> <div class="hero-highlights svelte-thpsgu"><ul class="highlight-list svelte-thpsgu"><li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">3</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "Years FTC Robotics" : "Años robótica FTC")}</span></li> <li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">4</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "National Awards" : "Reconocimientos nal.")}</span></li> <li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">1</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "Intl. Design Award" : "Premio internacional")}</span></li> <li class="highlight-item svelte-thpsgu"><span class="highlight-number svelte-thpsgu">60+</span> <span class="highlight-label svelte-thpsgu">${escape_html(isEn() ? "MUN Delegations" : "Delegaciones MUN")}</span></li></ul></div></aside></section> <div class="facts-strip anim-fade-up anim-delay-4 svelte-thpsgu" role="list"${attr("aria-label", isEn() ? "Quick facts" : "Datos rápidos")}><span class="fact-item meta-text svelte-thpsgu" role="listitem">`);
    Icon($$renderer2, { name: "pin", size: 14, class: "fact-icon" });
    $$renderer2.push(`<!----> <span>${escape_html(c().hero.location)}</span></span> <span class="fact-item meta-text svelte-thpsgu" role="listitem">`);
    Icon($$renderer2, { name: "academic", size: 14, class: "fact-icon" });
    $$renderer2.push(`<!----> <span>${escape_html(c().hero.academicStatus)}</span></span> <span class="fact-item meta-text svelte-thpsgu" role="listitem">`);
    Icon($$renderer2, { name: "globe", size: 14, class: "fact-icon" });
    $$renderer2.push(`<!----> <span>${escape_html(isEn() ? "Spanish (Native) · English (Professional)" : "Español (Nativo) · Inglés (Profesional)")}</span></span> <span class="fact-item meta-text svelte-thpsgu" role="listitem">`);
    Icon($$renderer2, { name: "cog", size: 14, class: "fact-icon" });
    $$renderer2.push(`<!----> <span>${escape_html(isEn() ? "Robotics · CAD · Web Dev · Leadership" : "Robótica · CAD · Desarrollo web · Liderazgo")}</span></span></div> <section class="dossier-section editorial-grid" aria-labelledby="metodo-heading"><div class="stack-sm"><span class="eyebrow">01 / Metodología</span> <h2 id="metodo-heading">${escape_html(c().method.heading)}</h2> <p class="meta-text">${escape_html(c().method.intro)}</p></div> <div class="stack-lg"><div class="philosophy-box stack-sm svelte-thpsgu"><h3 class="philosophy-title svelte-thpsgu">${escape_html(c().method.philosophyTitle)}</h3> <p class="philosophy-body svelte-thpsgu">${escape_html(c().method.philosophyBody)}</p></div> <div class="stack-md"><h3 class="subsection-title svelte-thpsgu">${escape_html(c().method.stepsTitle)}</h3> <ol class="timeline-steps svelte-thpsgu"${attr("aria-label", c().method.stepsTitle)}><!--[-->`);
    const each_array = ensure_array_like(c().method.steps);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let step = each_array[i];
      $$renderer2.push(`<li class="timeline-step svelte-thpsgu"><span class="step-number svelte-thpsgu" aria-hidden="true">${escape_html(i + 1)}</span> <div class="step-content"><strong class="step-name svelte-thpsgu">${escape_html(step.name)}</strong> <p class="step-detail svelte-thpsgu">${escape_html(step.detail)}</p></div></li>`);
    }
    $$renderer2.push(`<!--]--></ol></div> <div class="fev-block stack-md svelte-thpsgu"><div class="stack-sm"><h3 class="subsection-title svelte-thpsgu">${escape_html(c().method.fevTitle)}</h3> <p>${escape_html(c().method.fevSummary)}</p></div> <dl class="fev-pillars svelte-thpsgu"><!--[-->`);
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
    $$renderer2.push(`<!--]--></dl></div></div></section> <section id="proyectos" class="dossier-section" aria-labelledby="proyectos-heading"><div class="editorial-grid projects-intro svelte-thpsgu"><div class="stack-sm"><span class="eyebrow">02 / Trayectoria</span> <h2 id="proyectos-heading">${escape_html(c().projectsSection.heading)}</h2></div> <div><p class="section-lead svelte-thpsgu">${escape_html(c().projectsSection.intro)}</p></div></div> <div class="projects-ledger"><!--[-->`);
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
      $$renderer2.push(`<!--]--></div> <div class="stack-md"><div class="stack-sm"><h3${attr_class("svelte-thpsgu", void 0, { "flagship-title": project.tier === "flagship" })}><a${attr("href", getProjectPath(data.locale, project.slug))} class="project-title-link svelte-thpsgu">${escape_html(project.title)}</a></h3> <p class="role-tag svelte-thpsgu">${escape_html(project.roleSummary)} · ${escape_html(project.contextNote)}</p></div> <p class="project-summary svelte-thpsgu">${escape_html(project.executiveSummary)}</p> <div class="outcome-box svelte-thpsgu">`);
      Icon($$renderer2, { name: "award", size: 17, class: "outcome-icon" });
      $$renderer2.push(`<!----> <p class="outcome-line svelte-thpsgu">${escape_html(project.keyOutcome)}</p></div> <p class="meta-text" aria-hidden="true"><a${attr("href", getProjectPath(data.locale, project.slug))} tabindex="-1" class="read-more-link svelte-thpsgu"><span>${escape_html(c().projectsSection.readCaseLabel)}</span> `);
      Icon($$renderer2, { name: "arrow-right", size: 14 });
      $$renderer2.push(`<!----></a></p></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="complementarias-heading"><div class="stack-sm"><span class="eyebrow">03 / Dimensiones</span> <h2 id="complementarias-heading">${escape_html(c().complementary.heading)}</h2> <p class="meta-text">${escape_html(c().complementary.intro)}</p></div> <div class="facets-grid svelte-thpsgu"><!--[-->`);
    const each_array_4 = ensure_array_like(c().complementary.items);
    for (let idx = 0, $$length = each_array_4.length; idx < $$length; idx++) {
      let facet = each_array_4[idx];
      $$renderer2.push(`<div class="facet-card stack-sm svelte-thpsgu"><div class="facet-header svelte-thpsgu"><span class="facet-numeral svelte-thpsgu">0${escape_html(idx + 1)}</span> <p class="meta-text facet-role svelte-thpsgu">${escape_html(facet.role)}</p></div> <h3>${escape_html(facet.title)}</h3> <p>${escape_html(facet.summary)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section></div>`);
  });
}
export {
  _page as default
};
