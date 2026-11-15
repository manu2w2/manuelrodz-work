# manuelrodz.work

Bilingual (ES/EN) personal portfolio for Manuel Enrique Rodríguez Nicolás, built with SvelteKit and `@sveltejs/adapter-static`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run check    # svelte-check + type checking
npm run build    # static build into ./build
npm run preview  # serve the production build
```

## Structure

- `src/lib/data/en.ts`, `src/lib/data/es.ts`: all page copy. Both files must satisfy `SiteContent` in `src/lib/types/content.ts`, so a missing string in one locale fails type checking.
- `src/lib/config/site.ts`: domain, contact details, hero image, CV files.
- `src/routes/[lang=locale]/`: localized routes (`/es`, `/en`, CV, privacy, case studies).
- `static/`: images, CV PDFs, `robots.txt`, `sitemap.xml`.

## Adding a route

Static prerendering only builds routes listed in `kit.prerender.entries` in `svelte.config.js`. Add new routes there and to `static/sitemap.xml`.

## Deployment

Deployed on Vercel. Security headers and caching live in `vercel.json`.

## Preview hosts

`vite.config.ts` lists the sandbox preview hostnames in `server.allowedHosts`. If the dev server reports a blocked host, add the hostname shown in the error.
