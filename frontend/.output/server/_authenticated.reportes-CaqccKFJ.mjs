import { i as __toESM } from "./_runtime.mjs";
import { a as tokenStore, t as API_BASE } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./_ssr/button-PJVP9td7.mjs";
import { _ as FileText, p as LoaderCircle, v as FileSpreadsheet, x as Download } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { n as toast } from "./_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.reportes-CaqccKFJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var reports = [
	{
		key: "pdf",
		label: "Reporte PDF",
		icon: FileText,
		path: "/reportes/pdf/",
		ext: "pdf"
	},
	{
		key: "excel",
		label: "Reporte Excel",
		icon: FileSpreadsheet,
		path: "/reportes/excel/",
		ext: "xlsx"
	},
	{
		key: "csv",
		label: "Exportar CSV",
		icon: Download,
		path: "/reportes/csv/",
		ext: "csv"
	}
];
function ReportesPage() {
	const [loading, setLoading] = (0, import_react.useState)(null);
	const download = async (path, filename, key) => {
		setLoading(key);
		try {
			const token = tokenStore.get();
			const res = await fetch(`${API_BASE}${path}`, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
			if (!res.ok) throw new Error(`Error ${res.status}`);
			const blob = await res.blob();
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = filename;
			a.click();
			URL.revokeObjectURL(url);
			toast.success("Descarga iniciada");
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Error al descargar");
		} finally {
			setLoading(null);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Exporta reportes clínicos consolidados generados por el backend Django."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "text-base flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-5 w-5 text-primary" }),
					" ",
					r.label
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "w-full",
				disabled: loading === r.key,
				onClick: () => download(r.path, `reporte-clinico.${r.ext}`, r.key),
				children: [loading === r.key ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 mr-2" }), "Descargar"]
			}) })] }, r.key))
		})]
	});
}
//#endregion
export { ReportesPage as component };
