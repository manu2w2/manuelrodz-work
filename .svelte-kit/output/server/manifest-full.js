export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cv/manuel-rodriguez-cv-en.pdf","cv/manuel-rodriguez-cv-es.pdf","images/.gitkeep","robots.txt","sitemap.xml"]),
	mimeTypes: {".pdf":"application/pdf",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.nLuF7gP9.js",app:"_app/immutable/entry/app.BhvLlpQn.js",imports:["_app/immutable/entry/start.nLuF7gP9.js","_app/immutable/chunks/DdRBkMFJ.js","_app/immutable/chunks/De4YIAWW.js","_app/immutable/chunks/CO2yWxfZ.js","_app/immutable/chunks/OA8UcISh.js","_app/immutable/entry/app.BhvLlpQn.js","_app/immutable/chunks/De4YIAWW.js","_app/immutable/chunks/CITuagUv.js","_app/immutable/chunks/BQ-k8S8B.js","_app/immutable/chunks/CO2yWxfZ.js","_app/immutable/chunks/Bcvwr_hz.js","_app/immutable/chunks/BAmSCggV.js","_app/immutable/chunks/CuVmfbaH.js","_app/immutable/chunks/Pm-qnIOz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[lang=locale]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[lang=locale]/cv",
				pattern: /^\/([^/]+?)\/cv\/?$/,
				params: [{"name":"lang","matcher":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang=locale]/privacidad",
				pattern: /^\/([^/]+?)\/privacidad\/?$/,
				params: [{"name":"lang","matcher":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[lang=locale]/privacy",
				pattern: /^\/([^/]+?)\/privacy\/?$/,
				params: [{"name":"lang","matcher":"locale","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[lang=locale]/projects/[slug]",
				pattern: /^\/([^/]+?)\/projects\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"locale","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[lang=locale]/proyectos/[slug]",
				pattern: /^\/([^/]+?)\/proyectos\/([^/]+?)\/?$/,
				params: [{"name":"lang","matcher":"locale","optional":false,"rest":false,"chained":false},{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			const { match: locale } = await import ('./entries/matchers/locale.js')
			return { locale };
		},
		server_assets: {}
	}
}
})();
