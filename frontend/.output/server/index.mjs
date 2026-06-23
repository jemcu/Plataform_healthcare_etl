globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as NodeResponse, i as defineLazyEventHandler, l as serve, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/activity--zZ3ax9l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-rIzYJwzAIHsWr6LTqyehBtHrPHA\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 231,
		"path": "../public/assets/activity--zZ3ax9l.js"
	},
	"/assets/badge-OSbM0NcO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"329-ibplgFUedg/KhTrwgqZE0w8UAFQ\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 809,
		"path": "../public/assets/badge-OSbM0NcO.js"
	},
	"/assets/api-Y3J1APDx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"265f-uXbyJOwnayDhUiJ52TMrW16eH/o\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 9823,
		"path": "../public/assets/api-Y3J1APDx.js"
	},
	"/assets/brain-BaYPDFYg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23e-vqZsilUJecUIaP03ofmp0q7BXdA\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 574,
		"path": "../public/assets/brain-BaYPDFYg.js"
	},
	"/assets/button-BLVeHJhn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e65-ExD8WtU1jw7j+CPq1niypHH9/mg\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 3685,
		"path": "../public/assets/button-BLVeHJhn.js"
	},
	"/assets/card-DdZMSImA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41e-Nc2RcdvO5J/C9hqnmO4hfVPy+Eg\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 1054,
		"path": "../public/assets/card-DdZMSImA.js"
	},
	"/assets/dist-CHQFdNWK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e09d-NaqU5jNuYFUXGZxbGP2tnN8RrOc\"",
		"mtime": "2026-06-23T03:29:27.676Z",
		"size": 57501,
		"path": "../public/assets/dist-CHQFdNWK.js"
	},
	"/assets/dist-CvLC4lwV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"289-JoFY1OTtU5V+QqBYIH3znUpq1jY\"",
		"mtime": "2026-06-23T03:29:27.676Z",
		"size": 649,
		"path": "../public/assets/dist-CvLC4lwV.js"
	},
	"/assets/dist-UV9lCdKG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24f-uK/8jn+N6i9Yb/PPKFMEX3dWn1c\"",
		"mtime": "2026-06-23T03:29:27.677Z",
		"size": 591,
		"path": "../public/assets/dist-UV9lCdKG.js"
	},
	"/assets/input-CwgX_yiX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"268-Jdbjge3iK1+pjh7Ut0gtjqh0Ozs\"",
		"mtime": "2026-06-23T03:29:27.678Z",
		"size": 616,
		"path": "../public/assets/input-CwgX_yiX.js"
	},
	"/assets/key-round-_nAJcre_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"160-JEgieqMtaV67vIJxPZAAYUsS87E\"",
		"mtime": "2026-06-23T03:29:27.678Z",
		"size": 352,
		"path": "../public/assets/key-round-_nAJcre_.js"
	},
	"/assets/label-BTw8jO3s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28c-rOgoVaV7SaEqymLWnF9MTxaMYk8\"",
		"mtime": "2026-06-23T03:29:27.678Z",
		"size": 652,
		"path": "../public/assets/label-BTw8jO3s.js"
	},
	"/assets/loader-circle-C4tD8eSl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f92-k2jIXJmRCEzb+7xywfaZzrIqDho\"",
		"mtime": "2026-06-23T03:29:27.679Z",
		"size": 28562,
		"path": "../public/assets/loader-circle-C4tD8eSl.js"
	},
	"/assets/login-Ry76Utgv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d1-/cHxUgkBGloTsBke/R0LNyNEfRA\"",
		"mtime": "2026-06-23T03:29:27.680Z",
		"size": 2257,
		"path": "../public/assets/login-Ry76Utgv.js"
	},
	"/assets/index-BrN4qHF2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b2f1-xN+q0V7C2ZqGvamwQvhvpCI1Y48\"",
		"mtime": "2026-06-23T03:29:27.613Z",
		"size": 373489,
		"path": "../public/assets/index-BrN4qHF2.js"
	},
	"/assets/shield-alert-CJwle8xX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e-BX2XQnMVdo7y7qN/cXlsHtL61F8\"",
		"mtime": "2026-06-23T03:29:27.683Z",
		"size": 350,
		"path": "../public/assets/shield-alert-CJwle8xX.js"
	},
	"/assets/styles-Bg83DiBX.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"129b3-FLBr7Sxoggs2lYBDPHKxiFRnbA8\"",
		"mtime": "2026-06-23T03:29:27.701Z",
		"size": 76211,
		"path": "../public/assets/styles-Bg83DiBX.css"
	},
	"/assets/table-CiZpSqwF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"667-em5PP2As/SRFNgOGGMX56g3P4Gs\"",
		"mtime": "2026-06-23T03:29:27.700Z",
		"size": 1639,
		"path": "../public/assets/table-CiZpSqwF.js"
	},
	"/assets/triangle-alert-CPoFyLIO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2349-G4qZJBSpfwAOnBm1JQqm9SMod0E\"",
		"mtime": "2026-06-23T03:29:27.700Z",
		"size": 9033,
		"path": "../public/assets/triangle-alert-CPoFyLIO.js"
	},
	"/assets/useMutation-ujDjG_3E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8c2-DF2l0HszBhAiWHC0w5yAYUMmTtg\"",
		"mtime": "2026-06-23T03:29:27.700Z",
		"size": 2242,
		"path": "../public/assets/useMutation-ujDjG_3E.js"
	},
	"/assets/users-DuKu-DJl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12f-8PTtrt/GRUlZCYEL9Q0vg+sKL+o\"",
		"mtime": "2026-06-23T03:29:27.701Z",
		"size": 303,
		"path": "../public/assets/users-DuKu-DJl.js"
	},
	"/assets/_authenticated-DSYhp2R8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7775-dyE4CBMGfiPy2HIxARgwxnVWuDA\"",
		"mtime": "2026-06-23T03:29:27.613Z",
		"size": 30581,
		"path": "../public/assets/_authenticated-DSYhp2R8.js"
	},
	"/assets/_authenticated.auditoria-C2Tyfbyy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a3-yyRj3SrZeQhY3Wrqidoaa69KjGA\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 2467,
		"path": "../public/assets/_authenticated.auditoria-C2Tyfbyy.js"
	},
	"/assets/_authenticated.cambiar-password-DkL1-cE5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e5-MXiJR5WvOJ38TWd2l1aOC8yNklk\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 2021,
		"path": "../public/assets/_authenticated.cambiar-password-DkL1-cE5.js"
	},
	"/assets/_authenticated.dashboard-DKSTg8aA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"651f5-Q2B/qKmPJJZ6UC1Wn/mudz2BqTI\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 414197,
		"path": "../public/assets/_authenticated.dashboard-DKSTg8aA.js"
	},
	"/assets/_authenticated.etl-CbxAnFbz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1277-zaXKWC4rkia6LTm2okxttAIlIhI\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 4727,
		"path": "../public/assets/_authenticated.etl-CbxAnFbz.js"
	},
	"/assets/_authenticated.pacientes-Dno6HlDi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d60-dEQuL12XwZTGurR0aJZiER+DKXs\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 3424,
		"path": "../public/assets/_authenticated.pacientes-Dno6HlDi.js"
	},
	"/assets/_authenticated.predicciones-B_txb9R8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11e4-u9esbOBGSm4FCUVA12zxGnSFAtI\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 4580,
		"path": "../public/assets/_authenticated.predicciones-B_txb9R8.js"
	},
	"/assets/_authenticated.reportes-BlUhGP3w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9fb-7CJeTHe4rsNYWLEvqtk7ddN0Aus\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 2555,
		"path": "../public/assets/_authenticated.reportes-BlUhGP3w.js"
	},
	"/assets/_authenticated.usuarios-F6ubT8Wo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76c0-7gks3IwTYs6WBCCND8y/jvIBRTA\"",
		"mtime": "2026-06-23T03:29:27.644Z",
		"size": 30400,
		"path": "../public/assets/_authenticated.usuarios-F6ubT8Wo.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_l7Ohdd = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_l7Ohdd
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
