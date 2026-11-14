import { h as head, e as escape_html, a as attr, ad as ensure_array_like, ae as attr_class, d as derived } from "../../../chunks/index.js";
import { S as SITE_CONFIG } from "../../../chunks/site.js";
import { d as getProjectPath } from "../../../chunks/i18n.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let c = derived(() => data.content);
    let cvFile = derived(() => SITE_CONFIG.cvFiles[data.locale]);
    head("thpsgu", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(c().meta.siteTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", c().meta.homeDescription)}/>`);
    });
    $$renderer2.push(`<div class="container"><section class="opening-dossier stack-md svelte-thpsgu" aria-labelledby="dossier-title"><p class="meta-text">${escape_html(c().hero.academicStatus)} · ${escape_html(c().hero.location)}</p> <h1 id="dossier-title">${escape_html(c().hero.fullName)}</h1> <p class="core-statement svelte-thpsgu">${escape_html(c().hero.coreStatement)}</p> <div class="opening-actions svelte-thpsgu"><a${attr("href", cvFile().href)}${attr("download", cvFile().filename)} class="btn-primary">${escape_html(c().hero.primaryCta)}</a> <a href="#proyectos" class="btn-secondary">${escape_html(c().hero.secondaryCta)}</a></div></section> <section class="dossier-section editorial-grid" aria-labelledby="metodo-heading"><div class="stack-sm"><h2 id="metodo-heading">${escape_html(c().method.heading)}</h2> <p class="meta-text">${escape_html(c().method.intro)}</p></div> <div class="stack-lg"><div class="stack-sm"><h3>${escape_html(c().method.philosophyTitle)}</h3> <p>${escape_html(c().method.philosophyBody)}</p></div> <div class="stack-md"><h3>${escape_html(c().method.stepsTitle)}</h3> <ol class="steps-list svelte-thpsgu"><!--[-->`);
    const each_array = ensure_array_like(c().method.steps);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let step = each_array[$$index];
      $$renderer2.push(`<li><strong>${escape_html(step.name)}:</strong> ${escape_html(step.detail)}</li>`);
    }
    $$renderer2.push(`<!--]--></ol></div> <div class="fev-block stack-md svelte-thpsgu"><div class="stack-sm"><h3>${escape_html(c().method.fevTitle)}</h3> <p>${escape_html(c().method.fevSummary)}</p></div> <dl class="fev-list svelte-thpsgu"><!--[-->`);
    const each_array_1 = ensure_array_like(c().method.fevPillars);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let pillar = each_array_1[$$index_1];
      $$renderer2.push(`<div class="fev-item svelte-thpsgu"><dt class="svelte-thpsgu">${escape_html(pillar.term)}</dt> <dd class="svelte-thpsgu">${escape_html(pillar.definition)}</dd></div>`);
    }
    $$renderer2.push(`<!--]--></dl></div></div></section> <section id="proyectos" class="dossier-section" aria-labelledby="proyectos-heading"><div class="editorial-grid projects-intro svelte-thpsgu"><div><h2 id="proyectos-heading">${escape_html(c().projectsSection.heading)}</h2></div> <div><p>${escape_html(c().projectsSection.intro)}</p></div></div> <div class="projects-ledger"><!--[-->`);
    const each_array_2 = ensure_array_like(c().projectsSection.items);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let project = each_array_2[$$index_2];
      $$renderer2.push(`<article${attr_class("project-entry editorial-grid svelte-thpsgu", void 0, { "is-flagship": project.tier === "flagship" })}><div class="stack-sm"><p class="meta-text">${escape_html(project.period)}</p> <p class="meta-text">${escape_html(project.collaborationModel)}</p></div> <div class="stack-md"><div class="stack-sm"><h3><a${attr("href", getProjectPath(data.locale, project.slug))} class="project-title-link svelte-thpsgu">${escape_html(project.title)}</a></h3> <p class="meta-text">${escape_html(project.roleSummary)} · ${escape_html(project.contextNote)}</p></div> <p>${escape_html(project.executiveSummary)}</p> <p class="outcome-line svelte-thpsgu">${escape_html(project.keyOutcome)}</p> <p class="meta-text"><a${attr("href", getProjectPath(data.locale, project.slug))}>${escape_html(c().projectsSection.readCaseLabel)} →</a></p></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="complementarias-heading"><div class="stack-sm"><h2 id="complementarias-heading">${escape_html(c().complementary.heading)}</h2> <p class="meta-text">${escape_html(c().complementary.intro)}</p></div> <div class="facets-list svelte-thpsgu"><!--[-->`);
    const each_array_3 = ensure_array_like(c().complementary.items);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let facet = each_array_3[$$index_3];
      $$renderer2.push(`<div class="facet-row stack-sm svelte-thpsgu"><h3>${escape_html(facet.title)}</h3> <p class="meta-text">${escape_html(facet.role)}</p> <p>${escape_html(facet.summary)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section></div>`);
  });
}
export {
  _page as default
};
