import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    csp: {
      mode: 'auto',
      directives: { 'script-src': ['self'] }
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: true,
      strict: true
    }),
    prerender: {
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (status === 404 && path.startsWith('/images/')) {
          console.warn(`[prerender] Warning 404 on ${path} from ${referrer}`);
          return;
        }
        throw new Error(`${status} ${path}${referrer ? ` (${referenceType} from ${referrer})` : ''}`);
      },
      entries: [
        '/',
        '/sitemap.xml',
        '/es',
        '/en',
        '/es/proyectos',
        '/en/projects',
        '/es/cv',
        '/en/cv',
        '/es/privacidad',
        '/en/privacy',
        '/es/proyectos/aztecbot',
        '/es/proyectos/velocity-bucks',
        '/es/proyectos/valladolid-mun',
        '/es/proyectos/yucatan-i6',
        '/en/projects/aztecbot',
        '/en/projects/velocity-bucks',
        '/en/projects/valladolid-mun',
        '/en/projects/yucatan-i6'
      ]
    }
  }
};

export default config;

