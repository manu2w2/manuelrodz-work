import { h as head, e as escape_html, a as attr } from "../../../../../chunks/index.js";
import { C as CaseStudyView } from "../../../../../chunks/CaseStudyView.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("y9kjv3", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.project.title)} — Manuel Rodríguez</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.project.executiveSummary)}/>`);
    });
    CaseStudyView($$renderer2, {
      locale: data.locale,
      project: data.project,
      nextProject: data.nextProject,
      labels: data.content.projectsSection.caseLabels
    });
  });
}
export {
  _page as default
};
