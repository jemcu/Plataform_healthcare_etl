import { i as __toESM } from "../_runtime.mjs";
import { a as tokenStore, i as refreshStore, o as userStore, r as apiFetch } from "./api-BitsYYWI.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Bd3rz0gB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [token, setToken] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setToken(tokenStore.get());
		setUser(userStore.get());
		setLoading(false);
	}, []);
	const login = async (username, password) => {
		const data = await apiFetch("/auth/login/", {
			method: "POST",
			auth: false,
			body: JSON.stringify({
				username,
				password
			})
		});
		const access = data.access ?? data.token;
		if (!access) throw new Error("Respuesta de login inválida");
		tokenStore.set(access);
		if (data.refresh) refreshStore.set(data.refresh);
		setToken(access);
		let u = data.user ?? { username };
		try {
			u = await apiFetch("/auth/profile/");
		} catch {}
		userStore.set(u);
		setUser(u);
	};
	const logout = () => {
		const refresh = refreshStore.get();
		apiFetch("/auth/logout/", {
			method: "POST",
			body: refresh ? JSON.stringify({ refresh }) : void 0
		}).catch(() => {});
		tokenStore.clear();
		setToken(null);
		setUser(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			token,
			isAuthenticated: !!token,
			loading,
			login,
			logout
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
//#endregion
export { useAuth as n, AuthProvider as t };
