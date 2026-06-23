import { i as __toESM } from "./_runtime.mjs";
import { r as apiFetch } from "./_ssr/api-BitsYYWI.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { t as Button } from "./_ssr/button-PJVP9td7.mjs";
import { O as Brain, a as TriangleAlert, p as LoaderCircle } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { t as Badge } from "./_ssr/badge-D1Dupn2y.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
import { n as useQuery, t as useMutation } from "./_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.predicciones-Z63BY93r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "edad",
		label: "Edad",
		type: "number"
	},
	{
		name: "IMC",
		label: "IMC",
		type: "number",
		step: "0.1"
	},
	{
		name: "glucosa",
		label: "Glucosa",
		type: "number",
		step: "0.1"
	},
	{
		name: "colesterol",
		label: "Colesterol",
		type: "number",
		step: "0.1"
	},
	{
		name: "presion_sistolica",
		label: "Presión sistólica",
		type: "number"
	},
	{
		name: "presion_diastolica",
		label: "Presión diastólica",
		type: "number"
	},
	{
		name: "frecuencia_cardiaca",
		label: "Frecuencia cardiaca",
		type: "number"
	},
	{
		name: "fumador",
		label: "Fumador (0/1)",
		type: "number"
	}
];
function pct(n) {
	if (n == null) return "—";
	return `${(n > 1 ? n : n * 100).toFixed(1)}%`;
}
function PrediccionesPage() {
	const metrics = useQuery({
		queryKey: ["ml-metrics"],
		queryFn: () => apiFetch("/ml/metrics/"),
		retry: 0
	});
	const [form, setForm] = (0, import_react.useState)({});
	const predict = useMutation({
		mutationFn: (payload) => apiFetch("/ml/predict/", {
			method: "POST",
			body: JSON.stringify(payload)
		}),
		onError: (e) => toast.error(e.message)
	});
	const onSubmit = (e) => {
		e.preventDefault();
		const payload = {};
		for (const f of fields) {
			const v = form[f.name];
			if (v === void 0 || v === "") {
				toast.error(`Falta el campo ${f.label}`);
				return;
			}
			payload[f.name] = Number(v);
		}
		predict.mutate(payload);
	};
	const m = metrics.data ?? {};
	const cm = m.confusion_matrix ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Accuracy",
					value: pct(m.accuracy)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Precision",
					value: pct(m.precision)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "Recall",
					value: pct(m.recall)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
					label: "F1-Score",
					value: pct(m.f1_score)
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "text-base flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4 text-primary" }), " Predicción de riesgo"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "grid gap-3 sm:grid-cols-2",
				children: [fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: f.name,
						children: f.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: f.name,
						type: f.type,
						step: f.step,
						value: form[f.name] ?? "",
						onChange: (e) => setForm((s) => ({
							...s,
							[f.name]: e.target.value
						}))
					})]
				}, f.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						disabled: predict.isPending,
						children: [predict.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin mr-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4 mr-2" }), "Predecir riesgo"]
					})
				})]
			}), predict.data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-lg border p-4 bg-secondary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Resultado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "bg-primary text-primary-foreground text-base px-3 py-1",
						children: predict.data.riesgo ?? predict.data.clase ?? String(predict.data.prediction)
					}), predict.data.probabilidad != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-muted-foreground",
						children: ["Probabilidad: ", pct(predict.data.probabilidad)]
					})]
				})]
			})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: "Matriz de confusión"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: metrics.isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
			}) : metrics.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-destructive text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
					" ",
					metrics.error.message
				]
			}) : cm.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
					className: "text-sm border-collapse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: cm.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((v, j) => {
						const max = Math.max(...cm.flat());
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "border w-16 h-16 text-center font-medium",
							style: { background: `color-mix(in oklch, var(--primary) ${(max ? v / max : 0) * 70}%, transparent)` },
							children: v
						}, j);
					}) }, i)) })
				}), m.model && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground mt-3",
					children: ["Modelo: ", m.model]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Sin matriz de confusión disponible."
			}) })] })]
		})]
	});
}
function MetricCard({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-3xl font-bold mt-1",
			children: value
		})]
	}) });
}
//#endregion
export { PrediccionesPage as component };
