import { i as __toESM } from "./_runtime.mjs";
import { n as ApiError, r as apiFetch } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Button } from "./_ssr/button-PJVP9td7.mjs";
import { h as KeyRound, p as LoaderCircle } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.cambiar-password-Crj_ymcp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChangePasswordPage() {
	const [oldPassword, setOldPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (newPassword !== confirm) {
			toast.error("Las contraseñas no coinciden");
			return;
		}
		setLoading(true);
		try {
			await apiFetch("/auth/change-password/", {
				method: "POST",
				body: JSON.stringify({
					old_password: oldPassword,
					new_password: newPassword
				})
			});
			toast.success("Contraseña actualizada");
			setOldPassword("");
			setNewPassword("");
			setConfirm("");
		} catch (err) {
			const msg = err instanceof ApiError ? err.message : "Error al cambiar contraseña";
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-5 w-5" }), " Cambiar contraseña"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Actualiza tu contraseña de acceso." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "old",
						children: "Contraseña actual"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "old",
						type: "password",
						value: oldPassword,
						onChange: (e) => setOldPassword(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "new",
						children: "Nueva contraseña"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "new",
						type: "password",
						value: newPassword,
						onChange: (e) => setNewPassword(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "confirm",
						children: "Confirmar nueva contraseña"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "confirm",
						type: "password",
						value: confirm,
						onChange: (e) => setConfirm(e.target.value),
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: loading,
					children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Actualizar contraseña"]
				})
			]
		}) })] })
	});
}
//#endregion
export { ChangePasswordPage as component };
