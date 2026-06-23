import { i as __toESM } from "./_runtime.mjs";
import { r as apiFetch } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { a as TriangleAlert, c as Search, p as LoaderCircle } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.pacientes-CQ4fjCSE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function riskBadge(r) {
	if (!r) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: "—"
	});
	const k = r.toLowerCase();
	if (k.includes("crít") || k.includes("crit")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "bg-destructive text-destructive-foreground hover:bg-destructive",
		children: r
	});
	if (k.includes("alto")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "bg-chart-4 text-white hover:bg-chart-4",
		children: r
	});
	if (k.includes("medio")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "bg-chart-3 text-white hover:bg-chart-3",
		children: r
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "bg-chart-2 text-white hover:bg-chart-2",
		children: r
	});
}
function PacientesPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const { data, isLoading, error } = useQuery({
		queryKey: ["pacientes"],
		queryFn: () => apiFetch("/pacientes/")
	});
	const items = (0, import_react.useMemo)(() => {
		if (!data) return [];
		return Array.isArray(data) ? data : data.results ?? [];
	}, [data]);
	const filtered = (0, import_react.useMemo)(() => {
		const term = q.trim().toLowerCase();
		if (!term) return items;
		return items.filter((p) => [
			p.nombres,
			p.apellidos,
			p.diagnostico_preliminar,
			p.riesgo_enfermedad
		].filter(Boolean).some((v) => String(v).toLowerCase().includes(term)));
	}, [items, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
			className: "text-base",
			children: "Pacientes registrados"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-72",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "Buscar nombre, diagnóstico, riesgo…",
				className: "pl-8",
				value: q,
				onChange: (e) => setQ(e.target.value)
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-destructive text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
			" ",
			error.message
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-md border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "ID" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Paciente" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Edad" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Sexo" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "IMC" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Glucosa" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Presión" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Diagnóstico" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Riesgo" })
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: 9,
			className: "text-center text-muted-foreground py-8",
			children: "Sin pacientes para mostrar"
		}) }), filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "font-mono text-xs",
				children: p.id_paciente ?? p.id ?? i + 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
				className: "font-medium",
				children: [
					p.nombres,
					" ",
					p.apellidos
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.edad ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.sexo ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: (p.IMC ?? p.imc)?.toString() ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.glucosa ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [
				p.presion_sistolica ?? "—",
				"/",
				p.presion_diastolica ?? "—"
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: p.diagnostico_preliminar ?? "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: riskBadge(p.riesgo_enfermedad) })
		] }, p.id_paciente ?? p.id ?? i))] })] })
	}) })] });
}
//#endregion
export { PacientesPage as component };
