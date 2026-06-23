import { i as __toESM } from "./_runtime.mjs";
import { a as tokenStore, r as apiFetch, t as API_BASE } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./_ssr/button-PJVP9td7.mjs";
import { C as CircleCheck, a as TriangleAlert, i as Upload, p as LoaderCircle, u as Play } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as useQueryClient, n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.etl-DqPHrwfi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function statusBadge(s) {
	const k = (s ?? "").toLowerCase();
	if (k.includes("ok") || k.includes("exito") || k.includes("success") || k === "completado") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "bg-chart-2 text-white hover:bg-chart-2",
		children: s
	});
	if (k.includes("error") || k.includes("fall")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "destructive",
		children: s
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: s ?? "—"
	});
}
function EtlPage() {
	const qc = useQueryClient();
	const fileRef = (0, import_react.useRef)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const history = useQuery({
		queryKey: ["etl-history"],
		queryFn: () => apiFetch("/etl/historial/")
	});
	const runEtl = useMutation({
		mutationFn: () => apiFetch("/etl/run/", { method: "POST" }),
		onSuccess: () => {
			toast.success("Proceso ETL ejecutado");
			qc.invalidateQueries({ queryKey: ["etl-history"] });
			qc.invalidateQueries({ queryKey: ["dashboard-kpis"] });
		},
		onError: (e) => toast.error(e.message)
	});
	const onFile = async (f) => {
		setUploading(true);
		try {
			const fd = new FormData();
			fd.append("file", f);
			const token = tokenStore.get();
			const res = await fetch(`${API_BASE}/etl/upload/`, {
				method: "POST",
				headers: token ? { Authorization: `Bearer ${token}` } : {},
				body: fd
			});
			if (!res.ok) throw new Error(`Error ${res.status}`);
			toast.success("CSV cargado y ETL ejecutado");
			qc.invalidateQueries({ queryKey: ["etl-history"] });
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Error al cargar CSV");
		} finally {
			setUploading(false);
			if (fileRef.current) fileRef.current.value = "";
		}
	};
	const items = Array.isArray(history.data) ? history.data : history.data?.results ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: "Ejecutar ETL automático"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Extrae, limpia, transforma y carga datos clínicos en la base de datos."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => runEtl.mutate(),
					disabled: runEtl.isPending,
					children: [runEtl.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 mr-2" }), "Ejecutar proceso ETL"]
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: "Cargar dataset (CSV)"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Sube un archivo CSV con registros clínicos. Se validará y ejecutará el ETL."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: ".csv",
						hidden: true,
						onChange: (e) => e.target.files?.[0] && onFile(e.target.files[0])
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						disabled: uploading,
						onClick: () => fileRef.current?.click(),
						children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4 mr-2" }), "Seleccionar CSV"]
					})
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "text-base flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-chart-2" }), " Historial de ejecuciones ETL"]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: history.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
		}) : history.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-destructive text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
				" ",
				history.error.message
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-md border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Fecha" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Usuario" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Registros" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Tiempo (s)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Estado" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				colSpan: 5,
				className: "text-center text-muted-foreground py-8",
				children: "Sin ejecuciones aún"
			}) }), items.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-xs",
					children: r.fecha ?? r.created_at ?? "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.usuario ?? "—" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.registros_procesados ?? "—" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.tiempo_ejecucion ?? "—" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: statusBadge(r.estado) })
			] }, r.id ?? i))] })] })
		}) })] })]
	});
}
//#endregion
export { EtlPage as component };
