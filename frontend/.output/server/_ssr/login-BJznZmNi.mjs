import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useAuth } from "./auth-Bd3rz0gB.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Button } from "./button-PJVP9td7.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as Activity, p as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-CtX3ithx.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BJznZmNi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { login, isAuthenticated, loading } = useAuth();
	const navigate = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!loading && isAuthenticated) navigate({
			to: "/dashboard",
			replace: true
		});
	}, [
		loading,
		isAuthenticated,
		navigate
	]);
	const onSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		try {
			await login(username, password);
			toast.success("Sesión iniciada");
			navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Credenciales inválidas");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-accent/20 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md shadow-xl border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
				className: "text-center space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-7 w-7" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
						className: "text-2xl",
						children: "HealthAnalytics IPS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Plataforma Inteligente de Analítica Clínica" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "username",
							children: "Usuario"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "username",
							autoComplete: "username",
							value: username,
							onChange: (e) => setUsername(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "password",
							children: "Contraseña"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "password",
							type: "password",
							autoComplete: "current-password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						disabled: submitting,
						children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : "Ingresar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground text-center",
						children: "Autenticación segura mediante JWT (SimpleJWT)."
					})
				]
			}) })]
		})
	});
}
//#endregion
export { LoginPage as component };
