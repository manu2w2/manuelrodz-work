import { a as attr, e as escape_html, ad as ensure_array_like, b as stringify } from "./index.js";
import { d as getProjectPath, b as getHomePath } from "./i18n.js";
function CaseStudyView($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { locale, project, nextProject, labels } = $$props;
    $$renderer2.push(`<article class="container case-article svelte-x2a1mg"><nav${attr("aria-label", labels.backToHome)} class="back-nav svelte-x2a1mg"><a${attr("href", `${stringify(getHomePath(locale))}#proyectos`)} class="meta-text">← ${escape_html(labels.backToHome)}</a></nav> <header class="case-header stack-md svelte-x2a1mg"><p class="meta-text">${escape_html(project.period)} · ${escape_html(project.collaborationModel)}</p> <h1>${escape_html(project.title)}</h1> <p class="role-line svelte-x2a1mg">${escape_html(project.roleSummary)}</p> <p>${escape_html(project.executiveSummary)}</p> <nav${attr("aria-label", labels.jumpHeading)} class="jump-nav svelte-x2a1mg"><ul class="jump-list svelte-x2a1mg"><li class="svelte-x2a1mg"><a href="#contexto" class="svelte-x2a1mg">${escape_html(labels.sectionContext)}</a></li> <li class="svelte-x2a1mg"><a href="#decisiones" class="svelte-x2a1mg">${escape_html(labels.sectionDecisions)}</a></li> <li class="svelte-x2a1mg"><a href="#ejecucion" class="svelte-x2a1mg">${escape_html(labels.sectionExecution)}</a></li> <li class="svelte-x2a1mg"><a href="#resultados" class="svelte-x2a1mg">${escape_html(labels.sectionOutcomes)}</a></li> <li class="svelte-x2a1mg"><a href="#evidencia" class="svelte-x2a1mg">${escape_html(labels.sectionEvidence)}</a></li></ul></nav></header> <section class="dossier-section editorial-grid" aria-labelledby="attribution-heading"><div><h2 id="attribution-heading">${escape_html(labels.attributionHeading)}</h2></div> <div class="attribution-box svelte-x2a1mg"><p>${escape_html(project.caseStudy.attributionStatement)}</p></div></section> <section id="contexto" class="dossier-section editorial-grid" aria-labelledby="contexto-heading"><div><h2 id="contexto-heading">${escape_html(labels.sectionContext)}</h2></div> <div class="stack-md"><!--[-->`);
    const each_array = ensure_array_like(project.caseStudy.contextAndConstraints);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paragraph = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="decisiones" class="dossier-section editorial-grid" aria-labelledby="decisiones-heading"><div><h2 id="decisiones-heading">${escape_html(labels.sectionDecisions)}</h2></div> <div class="stack-md"><!--[-->`);
    const each_array_1 = ensure_array_like(project.caseStudy.analysisAndDecisions);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let paragraph = each_array_1[$$index_1];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="ejecucion" class="dossier-section editorial-grid" aria-labelledby="ejecucion-heading"><div><h2 id="ejecucion-heading">${escape_html(labels.sectionExecution)}</h2></div> <div class="stack-md"><!--[-->`);
    const each_array_2 = ensure_array_like(project.caseStudy.executionAndTeamwork);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let paragraph = each_array_2[$$index_2];
      $$renderer2.push(`<p>${escape_html(paragraph)}</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="resultados" class="dossier-section editorial-grid" aria-labelledby="resultados-heading"><div><h2 id="resultados-heading">${escape_html(labels.sectionOutcomes)}</h2></div> <div class="stack-md"><ul><!--[-->`);
    const each_array_3 = ensure_array_like(project.caseStudy.outcomesAndLessons);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      $$renderer2.push(`<li>${escape_html(item)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></section> <section id="evidencia" class="dossier-section editorial-grid" aria-labelledby="evidencia-heading"><div><h2 id="evidencia-heading">${escape_html(labels.sectionEvidence)}</h2></div> <div class="evidence-list svelte-x2a1mg"><!--[-->`);
    const each_array_4 = ensure_array_like(project.caseStudy.evidence);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let asset = each_array_4[$$index_4];
      $$renderer2.push(`<div class="evidence-row stack-sm svelte-x2a1mg"><h3>${escape_html(asset.title)}</h3> <p>${escape_html(asset.description)}</p> `);
      if (asset.status === "active" && asset.type === "photo" && asset.imageSrc) {
        $$renderer2.push(`<!--[0--><figure class="evidence-figure stack-sm svelte-x2a1mg"><img${attr("src", asset.imageSrc)}${attr("alt", asset.imageAlt ?? asset.title)} width="960" height="640" loading="lazy" class="svelte-x2a1mg"/> <button type="button" class="btn-secondary">${escape_html(labels.inspectPhotoLabel)}</button></figure>`);
      } else if (asset.status === "active" && asset.url) {
        $$renderer2.push(`<!--[1--><p class="meta-text"><a${attr("href", asset.url)} target="_blank" rel="noopener noreferrer">${escape_html(asset.url)}</a> <span>(${escape_html(labels.externalLinkHint)})</span></p>`);
      } else {
        $$renderer2.push(`<!--[-1--><p class="meta-text">${escape_html(labels.curatingNote)}</p>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <nav class="dossier-section next-project-nav svelte-x2a1mg"${attr("aria-label", labels.nextProjectLabel)}><p class="meta-text">${escape_html(labels.nextProjectLabel)}</p> <a${attr("href", getProjectPath(locale, nextProject.slug))} class="next-link svelte-x2a1mg">${escape_html(nextProject.title)} →</a></nav></article> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  CaseStudyView as C
};
