// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ parent }: Parameters<PageLoad>[0]) => {
  const { locale } = await parent();
  if (locale === 'en') {
    throw redirect(308, '/en/privacy');
  }
  return {};
};

