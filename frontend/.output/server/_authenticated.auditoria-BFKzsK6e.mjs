import { i as __toESM } from "./_runtime.mjs";
import { n as ApiError, r as apiFetch } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { p as LoaderCircle, s as ShieldAlert } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { n as toast } from "./_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.auditoria-BFKzsK6e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuditPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		(async () => {
			try {
				const data = await apiFetch("/auth/audit-logs/");
				setRows(Array.isArray(data) ? data : data.results ?? []);
			} catch (err) {
				const msg = err instanceof ApiError ? err.message : "Error cargando auditoría";
				toast.error(msg);
			} finally {
				setLoading(false);
			}
		})();
	}, []);
	const filtered = rows.filter((r) => {
		if (!q) return true;
		const s = q.toLowerCase();
		return (typeof r.user === "string" ? r.user : r.user?.username ?? "").toLowerCase().includes(s) || (r.action ?? "").toLowerCase().includes(s) || (r.resource ?? "").toLowerCase().includes(s) || (r.ip_address ?? "").toLowerCase().includes(s);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-5 w-5" }), " Auditoría"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Registro de actividad del sistema." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Buscar por usuario, acción, recurso o IP…",
				value: q,
				onChange: (e) => setQ(e.target.value),
				className: "max-w-md"
			})
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Usuario" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Acción" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Recurso" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "IP" })
	] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
		colSpan: 5,
		className: "text-center text-muted-foreground",
		children: "Sin registros"
	}) }) : filtered.map((r) => {
		const ts = r.timestamp ?? r.created_at;
		const userStr = typeof r.user === "string" ? r.user : r.user?.username ?? "—";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "whitespace-nowrap text-sm",
				children: ts ? new Date(ts).toLocaleString() : "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: userStr }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "secondary",
				children: r.action ?? "—"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.resource ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-mono text-xs",
				children: r.ip_address ?? "—"
			})
		] }, r.id);
	}) })] }) })] });
}
//#endregion
export { AuditPage as component };
