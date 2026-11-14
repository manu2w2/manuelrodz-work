// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import type { ProjectSlug } from '$lib/types/content';
import type { PageLoad } from './$types';

const VALID_SLUGS: ProjectSlug[] = [
  'aztecbot',
  'velocity-bucks',
  'valladolid-mun',
  'yucatan-i6'
];

export const load = async ({ params, parent }: Parameters<PageLoad>[0]) => {
  const { locale, content } = await parent();
  const slug = params.slug as ProjectSlug;

  if (!VALID_SLUGS.includes(slug)) {
    throw error(404, 'Project not found');
  }

  if (locale === 'es') {
    throw redirect(308, `/es/proyectos/${slug}`);
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

