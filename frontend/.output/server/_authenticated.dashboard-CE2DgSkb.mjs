import { r as apiFetch } from "./_ssr/api-BitsYYWI.mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { a as TriangleAlert, b as Droplets, g as HeartPulse, k as Activity, n as Users, p as LoaderCircle, w as Cigarette } from "./_libs/lucide-react.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, t as Card } from "./_ssr/card-CtX3ithx.mjs";
import { n as useQuery } from "./_libs/tanstack__react-query.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as BarChart, o as Line, p as Legend, r as LineChart, s as CartesianGrid, t as PieChart, u as Cell } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authenticated.dashboard-CE2DgSkb.js
var import_jsx_runtime = require_jsx_runtime();
var RISK_COLORS = {
	Bajo: "hsl(160 70% 45%)",
	Medio: "hsl(45 90% 55%)",
	Alto: "hsl(25 90% 55%)",
	Crítico: "hsl(0 75% 55%)",
	Critico: "hsl(0 75% 55%)"
};
function KpiCard({ icon: Icon, label, value, hint, tone = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
		className: "pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-bold mt-1",
					children: value
				}),
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: hint
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `p-3 rounded-xl ${{
					primary: "bg-primary/10 text-primary",
					danger: "bg-destructive/10 text-destructive",
					warning: "bg-chart-3/15 text-chart-3",
					success: "bg-chart-2/15 text-chart-2"
				}[tone]}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			})]
		})
	}) });
}
function DashboardPage() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["dashboard-kpis"],
		queryFn: () => apiFetch("/dashboard/kpis/"),
		retry: 1
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "border-destructive/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "No se pudo cargar el dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						error.message,
						". Verifica que el backend Django esté disponible en",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "/api/dashboard/kpis/"
						}),
						"."
					]
				})] })]
			})
		})
	});
	const d = data ?? {};
	const riesgo = d.riesgo_distribucion ?? [];
	const diagnosticos = d.diagnosticos_top ?? [];
	const tendencia = d.tendencia_consultas ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Users,
						label: "Total pacientes",
						value: d.total_pacientes ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: TriangleAlert,
						tone: "danger",
						label: "Pacientes críticos",
						value: d.pacientes_criticos ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: HeartPulse,
						tone: "warning",
						label: "Hipertensos",
						value: d.pacientes_hipertensos ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Droplets,
						tone: "success",
						label: "Diabéticos",
						value: d.pacientes_diabeticos ?? "—"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Cigarette,
						label: "Fumadores",
						value: d.pacientes_fumadores ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Activity,
						label: "Riesgo promedio",
						value: d.riesgo_promedio ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						icon: Activity,
						label: "ETL ejecutados",
						value: d.etl_ejecutados ?? "—",
						tone: "primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Distribución de riesgo clínico"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "h-72",
					children: riesgo.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: riesgo,
								dataKey: "total",
								nameKey: "riesgo",
								innerRadius: 50,
								outerRadius: 90,
								paddingAngle: 2,
								children: riesgo.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: RISK_COLORS[r.riesgo] ?? `var(--chart-${i % 5 + 1})` }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {})
						] })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChart, {})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Top diagnósticos preliminares"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "h-72",
					children: diagnosticos.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: diagnosticos,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--border)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "diagnostico",
									tick: { fontSize: 11 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: { fontSize: 11 } }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "total",
									fill: "var(--chart-1)",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChart, {})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "text-base",
				children: "Tendencia de consultas"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
				className: "h-72",
				children: tendencia.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: tendencia,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "var(--border)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "fecha",
								tick: { fontSize: 11 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { tick: { fontSize: 11 } }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "total",
								stroke: "var(--chart-1)",
								strokeWidth: 2,
								dot: false
							})
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChart, {})
			})] })
		]
	});
}
function EmptyChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full flex items-center justify-center text-sm text-muted-foreground",
		children: "Sin datos disponibles"
	});
}
//#endregion
export { DashboardPage as component };
