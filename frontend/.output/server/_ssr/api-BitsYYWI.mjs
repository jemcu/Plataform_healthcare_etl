//#region node_modules/.nitro/vite/services/ssr/assets/api-BitsYYWI.js
var BASE_URL = "http://localhost:8000/api".replace(/\/$/, "") || "http://localhost:8000/api";
var TOKEN_KEY = "ha_token";
var REFRESH_KEY = "ha_refresh";
var USER_KEY = "ha_user";
var tokenStore = {
	get: () => typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null,
	set: (t) => localStorage.setItem(TOKEN_KEY, t),
	clear: () => {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(REFRESH_KEY);
		localStorage.removeItem(USER_KEY);
	}
};
var refreshStore = {
	get: () => typeof window !== "undefined" ? localStorage.getItem(REFRESH_KEY) : null,
	set: (t) => localStorage.setItem(REFRESH_KEY, t)
};
var userStore = {
	get: () => {
		if (typeof window === "undefined") return null;
		const raw = localStorage.getItem(USER_KEY);
		return raw ? JSON.parse(raw) : null;
	},
	set: (u) => localStorage.setItem(USER_KEY, JSON.stringify(u))
};
var ApiError = class extends Error {
	status;
	data;
	constructor(message, status, data) {
		super(message);
		this.status = status;
		this.data = data;
	}
};
async function apiFetch(path, init = {}) {
	const { auth = true, headers, ...rest } = init;
	const h = new Headers(headers);
	if (!h.has("Content-Type") && rest.body && !(rest.body instanceof FormData)) h.set("Content-Type", "application/json");
	if (auth) {
		const token = tokenStore.get();
		if (token) h.set("Authorization", `Bearer ${token}`);
	}
	const url = path.startsWith("http") ? path : `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
	const res = await fetch(url, {
		...rest,
		headers: h
	});
	const isJson = (res.headers.get("content-type") || "").includes("application/json");
	const data = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null);
	if (!res.ok) throw new ApiError(isJson && data && typeof data === "object" && ("detail" in data ? data.detail : null) || `Request failed (${res.status})`, res.status, data);
	return data;
}
var API_BASE = BASE_URL;
//#endregion
export { tokenStore as a, refreshStore as i, ApiError as n, userStore as o, apiFetch as r, API_BASE as t };
