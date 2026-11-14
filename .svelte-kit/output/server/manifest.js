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
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/es","/en","/es/cv","/en/cv","/es/privacidad","/en/privacy","/es/proyectos/aztecbot","/es/proyectos/velocity-bucks","/es/proyectos/valladolid-mun","/es/proyectos/yucatan-i6","/en/projects/aztecbot","/en/projects/velocity-bucks","/en/projects/valladolid-mun","/en/projects/yucatan-i6"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
