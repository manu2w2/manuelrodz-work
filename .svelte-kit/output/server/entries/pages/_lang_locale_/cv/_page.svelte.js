import { h as head, e as escape_html, a as attr, ae as ensure_array_like, d as derived } from "../../../../chunks/index.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { S as SITE_CONFIG } from "../../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let cv = derived(() => data.content.cv);
    let cvFile = derived(() => SITE_CONFIG.cvFiles[data.locale]);
    head("1jowxvw", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(cv().heading)} — Manuel Rodríguez</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.content.meta.cvDescription)}/>`);
    });
    $$renderer2.push(`<article class="container cv-page svelte-1jowxvw"><header class="cv-header stack-md svelte-1jowxvw"><p class="meta-text">${escape_html(cv().lastUpdated)}</p> <h1>${escape_html(cv().heading)}</h1> <p>${escape_html(cv().subtitle)}</p> <div class="cv-actions no-print svelte-1jowxvw"><a${attr("href", cvFile().href)}${attr("download", cvFile().filename)} class="btn-primary">`);
    Icon($$renderer2, { name: "download", size: 17 });
    $$renderer2.push(`<!----> <span>${escape_html(cv().downloadPdfLabel)}</span> <span class="tabular meta-badge">(${escape_html(data.locale === "es" ? "PDF · aprox. 120 KB" : "PDF · approx. 120 KB")})</span></a> <button type="button" class="btn-secondary">`);
    Icon($$renderer2, { name: "print", size: 17 });
    $$renderer2.push(`<!----> <span>${escape_html(cv().printPageLabel)}</span></button></div></header> <section class="dossier-section editorial-grid" aria-labelledby="cv-edu"><div><h2 id="cv-edu">${escape_html(cv().sections.education.heading)}</h2></div> <div class="stack-md"><!--[-->`);
    const each_array = ensure_array_like(cv().sections.education.items);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let edu = each_array[$$index];
      $$renderer2.push(`<div class="stack-sm"><h3>${escape_html(edu.institution)}</h3> <p class="meta-text">${escape_html(edu.program)} · ${escape_html(edu.period)}</p> <p>${escape_html(edu.detail)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="cv-exp"><div><h2 id="cv-exp">${escape_html(cv().sections.experience.heading)}</h2></div> <div class="cv-entries svelte-1jowxvw"><!--[-->`);
    const each_array_1 = ensure_array_like(cv().sections.experience.items);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let item = each_array_1[$$index_2];
      $$renderer2.push(`<div class="cv-entry stack-sm svelte-1jowxvw"><h3>${escape_html(item.organization)}</h3> <p class="meta-text">${escape_html(item.role)} · ${escape_html(item.period)}</p> <ul><!--[-->`);
      const each_array_2 = ensure_array_like(item.highlights);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let point = each_array_2[$$index_1];
        $$renderer2.push(`<li>${escape_html(point)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="cv-honors"><div><h2 id="cv-honors">${escape_html(cv().sections.honors.heading)}</h2></div> <div class="cv-entries svelte-1jowxvw"><!--[-->`);
    const each_array_3 = ensure_array_like(cv().sections.honors.items);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let honor = each_array_3[$$index_3];
      $$renderer2.push(`<div class="cv-entry stack-sm svelte-1jowxvw"><h3>${escape_html(honor.award)}</h3> <p class="meta-text">${escape_html(honor.event)} · ${escape_html(honor.year)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="cv-skills"><div><h2 id="cv-skills">${escape_html(cv().sections.capabilities.heading)}</h2></div> <div class="cv-entries svelte-1jowxvw"><!--[-->`);
    const each_array_4 = ensure_array_like(cv().sections.capabilities.groups);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let group = each_array_4[$$index_4];
      $$renderer2.push(`<div class="cv-entry stack-sm svelte-1jowxvw"><h3>${escape_html(group.area)}</h3> <p>${escape_html(group.items)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="dossier-section editorial-grid" aria-labelledby="cv-lang"><div><h2 id="cv-lang">${escape_html(cv().sections.languages.heading)}</h2></div> <ul><!--[-->`);
    const each_array_5 = ensure_array_like(cv().sections.languages.items);
    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
      let lang = each_array_5[$$index_5];
      $$renderer2.push(`<li><strong>${escape_html(lang.language)}:</strong> ${escape_html(lang.proficiency)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></section></article>`);
  });
}
export {
  _page as default
};
