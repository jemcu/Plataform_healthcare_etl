import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { apiFetch } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Loader2, Brain, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/predicciones")({
  component: PrediccionesPage,
});

interface MLMetrics {
  accuracy?: number;
  precision?: number;
  recall?: number;
  f1_score?: number;
  confusion_matrix?: number[][];
  model?: string;
}

interface PredictionResult {
  riesgo?: string;
  probabilidad?: number;
  clase?: string;
  prediction?: string | number;
}

const fields = [
  { name: "edad", label: "Edad", type: "number" },
  { name: "IMC", label: "IMC", type: "number", step: "0.1" },
  { name: "glucosa", label: "Glucosa", type: "number", step: "0.1" },
  { name: "colesterol", label: "Colesterol", type: "number", step: "0.1" },
  { name: "presion_sistolica", label: "Presión sistólica", type: "number" },
  { name: "presion_diastolica", label: "Presión diastólica", type: "number" },
  { name: "frecuencia_cardiaca", label: "Frecuencia cardiaca", type: "number" },
  { name: "fumador", label: "Fumador (0/1)", type: "number" },
] as const;

function pct(n?: number) {
  if (n == null) return "—";
  const v = n > 1 ? n : n * 100;
  return `${v.toFixed(1)}%`;
}

function PrediccionesPage() {
  const metrics = useQuery<MLMetrics>({
    queryKey: ["ml-metrics"],
    queryFn: () => apiFetch<MLMetrics>("/ml/metrics/"),
    retry: 0,
  });

  const [form, setForm] = useState<Record<string, string>>({});
  const predict = useMutation({
    mutationFn: (payload: Record<string, number>) =>
      apiFetch<PredictionResult>("/ml/predict/", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
    onError: (e: Error) => toast.error(e.message),
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: Record<string, number> = {};
    for (const f of fields) {
      const v = form[f.name];
      if (v === undefined || v === "") {
        toast.error(`Falta el campo ${f.label}`);
        return;
      }
      payload[f.name] = Number(v);
    }
    predict.mutate(payload);
  };

  const m = metrics.data ?? {};
  const cm = m.confusion_matrix ?? [];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Accuracy" value={pct(m.accuracy)} />
        <MetricCard label="Precision" value={pct(m.precision)} />
        <MetricCard label="Recall" value={pct(m.recall)} />
        <MetricCard label="F1-Score" value={pct(m.f1_score)} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Brain className="h-4 w-4 text-primary" /> Predicción de riesgo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className="space-y-1.5">
                  <Label htmlFor={f.name}>{f.label}</Label>
                  <Input
                    id={f.name}
                    type={f.type}
                    step={(f as { step?: string }).step}
                    value={form[f.name] ?? ""}
                    onChange={(e) => setForm((s) => ({ ...s, [f.name]: e.target.value }))}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <Button type="submit" disabled={predict.isPending}>
                  {predict.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Brain className="h-4 w-4 mr-2" />
                  )}
                  Predecir riesgo
                </Button>
              </div>
            </form>

            {predict.data && (
              <div className="mt-5 rounded-lg border p-4 bg-secondary/40">
                <p className="text-sm text-muted-foreground">Resultado</p>
                <div className="flex items-center gap-3 mt-1">
                  <Badge className="bg-primary text-primary-foreground text-base px-3 py-1">
                    {predict.data.riesgo ?? predict.data.clase ?? String(predict.data.prediction)}
                  </Badge>
                  {predict.data.probabilidad != null && (
                    <span className="text-sm text-muted-foreground">
                      Probabilidad: {pct(predict.data.probabilidad)}
                    </span>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Matriz de confusión</CardTitle>
          </CardHeader>
          <CardContent>
            {metrics.isLoading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : metrics.error ? (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertTriangle className="h-4 w-4" /> {(metrics.error as Error).message}
              </div>
            ) : cm.length ? (
              <div className="overflow-x-auto">
                <table className="text-sm border-collapse">
                  <tbody>
                    {cm.map((row, i) => (
                      <tr key={i}>
                        {row.map((v, j) => {
                          const max = Math.max(...cm.flat());
                          const intensity = max ? v / max : 0;
                          return (
                            <td
                              key={j}
                              className="border w-16 h-16 text-center font-medium"
                              style={{
                                background: `color-mix(in oklch, var(--primary) ${
                                  intensity * 70
                                }%, transparent)`,
                              }}
                            >
                              {v}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {m.model && (
                  <p className="text-xs text-muted-foreground mt-3">Modelo: {m.model}</p>
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Sin matriz de confusión disponible.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </CardContent>
    </Card>
  );
}