import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const { locale } = await parent();
  if (locale === 'en') throw redirect(308, '/en/projects');
  return {};
};
