import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Activity,
  AlertTriangle,
  HeartPulse,
  Droplets,
  Cigarette,
  Users,
  Loader2,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

interface KPIs {
  total_pacientes?: number;
  pacientes_criticos?: number;
  pacientes_hipertensos?: number;
  pacientes_diabeticos?: number;
  pacientes_fumadores?: number;
  riesgo_promedio?: number | string;
  riesgo_distribucion?: { riesgo: string; total: number }[];
  diagnosticos_top?: { diagnostico: string; total: number }[];
  tendencia_consultas?: { fecha: string; total: number }[];
  etl_ejecutados?: number;
}

const RISK_COLORS: Record<string, string> = {
  Bajo: "hsl(160 70% 45%)",
  Medio: "hsl(45 90% 55%)",
  Alto: "hsl(25 90% 55%)",
  Crítico: "hsl(0 75% 55%)",
  Critico: "hsl(0 75% 55%)",
};

function KpiCard({
  icon: Icon,
  label,
  value,
  hint,
  tone = "primary",
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  hint?: string;
  tone?: "primary" | "danger" | "warning" | "success";
}) {
  const tones: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    danger: "bg-destructive/10 text-destructive",
    warning: "bg-chart-3/15 text-chart-3",
    success: "bg-chart-2/15 text-chart-2",
  };
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
          </div>
          <div className={`p-3 rounded-xl ${tones[tone]}`}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardPage() {
  const { data, isLoading, error } = useQuery<KPIs>({
    queryKey: ["dashboard-kpis"],
    queryFn: () => apiFetch<KPIs>("/dashboard/kpis/"),
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-destructive/40">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            <div>
              <p className="font-medium">No se pudo cargar el dashboard</p>
              <p className="text-sm text-muted-foreground">
                {(error as Error).message}. Verifica que el backend Django esté disponible en{" "}
                <code className="font-mono">/api/dashboard/kpis/</code>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const d = data ?? {};
  const riesgo = d.riesgo_distribucion ?? [];
  const diagnosticos = d.diagnosticos_top ?? [];
  const tendencia = d.tendencia_consultas ?? [];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard icon={Users} label="Total pacientes" value={d.total_pacientes ?? "—"} />
        <KpiCard
          icon={AlertTriangle}
          tone="danger"
          label="Pacientes críticos"
          value={d.pacientes_criticos ?? "—"}
        />
        <KpiCard
          icon={HeartPulse}
          tone="warning"
          label="Hipertensos"
          value={d.pacientes_hipertensos ?? "—"}
        />
        <KpiCard
          icon={Droplets}
          tone="success"
          label="Diabéticos"
          value={d.pacientes_diabeticos ?? "—"}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          icon={Cigarette}
          label="Fumadores"
          value={d.pacientes_fumadores ?? "—"}
        />
        <KpiCard
          icon={Activity}
          label="Riesgo promedio"
          value={d.riesgo_promedio ?? "—"}
        />
        <KpiCard
          icon={Activity}
          label="ETL ejecutados"
          value={d.etl_ejecutados ?? "—"}
          tone="primary"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Distribución de riesgo clínico</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            {riesgo.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riesgo}
                    dataKey="total"
                    nameKey="riesgo"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={2}
                  >
                    {riesgo.map((r, i) => (
                      <Cell key={i} fill={RISK_COLORS[r.riesgo] ?? `var(--chart-${(i % 5) + 1})`} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <EmptyChart />
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Top diagnósticos preliminares</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            {diagnosticos.length ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={diagnosticos}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="diagnostico" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Bar dataKey="total" fill="var(--chart-1)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyChart />
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tendencia de consultas</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          {tendencia.length ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={tendencia}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="fecha" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="var(--chart-1)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <EmptyChart />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function EmptyChart() {
  return (
    <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
      Sin datos disponibles
    </div>
  );
}