
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/[lang=locale]" | "/[lang=locale]/cv" | "/[lang=locale]/privacidad" | "/[lang=locale]/privacy" | "/[lang=locale]/projects" | "/[lang=locale]/projects/[slug]" | "/[lang=locale]/proyectos" | "/[lang=locale]/proyectos/[slug]";
		RouteParams(): {
			"/[lang=locale]": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/cv": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/privacidad": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/privacy": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/projects": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/projects/[slug]": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug: string };
			"/[lang=locale]/proyectos": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/proyectos/[slug]": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug: string }
		};
		LayoutParams(): {
			"/": { lang?: MatcherParam<typeof import('../src/params/locale.js').match> | undefined; slug?: string | undefined };
			"/[lang=locale]": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug?: string | undefined };
			"/[lang=locale]/cv": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/privacidad": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/privacy": { lang: MatcherParam<typeof import('../src/params/locale.js').match> };
			"/[lang=locale]/projects": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug?: string | undefined };
			"/[lang=locale]/projects/[slug]": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug: string };
			"/[lang=locale]/proyectos": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug?: string | undefined };
			"/[lang=locale]/proyectos/[slug]": { lang: MatcherParam<typeof import('../src/params/locale.js').match>; slug: string }
		};
		Pathname(): "/" | `/${string}` & {} | `/${string}/cv` & {} | `/${string}/privacidad` & {} | `/${string}/privacy` & {} | `/${string}/projects/${string}` & {} | `/${string}/proyectos/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/cv/manuel-rodriguez-cv-en.pdf" | "/cv/manuel-rodriguez-cv-es.pdf" | "/images/.gitkeep" | "/images/hero-robot.png" | "/images/manuel-rodriguez-placeholder.svg" | "/images/manuel-rodriguez.webp" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}