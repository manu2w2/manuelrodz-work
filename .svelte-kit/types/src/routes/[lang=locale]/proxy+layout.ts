// @ts-nocheck
import { contentEn } from '$lib/data/en';
import { contentEs } from '$lib/data/es';
import type { Locale } from '$lib/types/content';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load = ({ params }: Parameters<LayoutLoad>[0]) => {
  const locale = params.lang as Locale;
  const content = locale === 'en' ? contentEn : contentEs;

  return {
    locale,
    content
  };
};

