import { h as head, e as escape_html, ae as ensure_array_like, d as derived, a as attr } from "../../../../chunks/index.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let privacy = derived(() => data.content.privacy);
    head("j0uzqs", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(privacy().heading)} — Manuel Rodríguez</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.content.meta.privacyDescription)}/>`);
    });
    $$renderer2.push(`<article class="container privacy-article stack-lg svelte-j0uzqs"><header class="stack-sm"><p class="meta-text">${escape_html(privacy().effectiveDate)}</p> <h1>${escape_html(privacy().heading)}</h1></header> <!--[-->`);
    const each_array = ensure_array_like(privacy().paragraphs);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let block = each_array[$$index];
      $$renderer2.push(`<section class="stack-sm"><h2>${escape_html(block.title)}</h2> <p>${escape_html(block.body)}</p></section>`);
    }
    $$renderer2.push(`<!--]--></article>`);
  });
}
export {
  _page as default
};
