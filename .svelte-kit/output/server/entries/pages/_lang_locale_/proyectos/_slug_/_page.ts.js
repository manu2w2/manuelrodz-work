import { error, redirect } from "@sveltejs/kit";
const VALID_SLUGS = [
  "aztecbot",
  "velocity-bucks",
  "valladolid-mun",
  "yucatan-i6"
];
const load = async ({ params, parent }) => {
  const { locale, content } = await parent();
  const slug = params.slug;
  if (!VALID_SLUGS.includes(slug)) {
    throw error(404, "Project not found");
  }
  if (locale === "en") {
    throw redirect(308, `/en/projects/${slug}`);
  }
  const items = content.projectsSection.items;
  const index = items.findIndex((item) => item.slug === slug);
  const project = items[index];
  const nextProject = items[(index + 1) % items.length];
  return {
    project,
    nextProject
  };
};
export {
  load
};
