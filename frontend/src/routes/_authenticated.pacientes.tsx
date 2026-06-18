import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { apiFetch } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Search, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/_authenticated/pacientes")({
  component: PacientesPage,
});

interface Paciente {
  id_paciente?: number | string;
  id?: number | string;
  nombres?: string;
  apellidos?: string;
  edad?: number;
  sexo?: string;
  IMC?: number;
  imc?: number;
  glucosa?: number;
  presion_sistolica?: number;
  presion_diastolica?: number;
  diagnostico_preliminar?: string;
  riesgo_enfermedad?: string;
}

function riskBadge(r?: string) {
  if (!r) return <Badge variant="outline">—</Badge>;
  const k = r.toLowerCase();
  if (k.includes("crít") || k.includes("crit"))
    return <Badge className="bg-destructive text-destructive-foreground hover:bg-destructive">{r}</Badge>;
  if (k.includes("alto")) return <Badge className="bg-chart-4 text-white hover:bg-chart-4">{r}</Badge>;
  if (k.includes("medio")) return <Badge className="bg-chart-3 text-white hover:bg-chart-3">{r}</Badge>;
  return <Badge className="bg-chart-2 text-white hover:bg-chart-2">{r}</Badge>;
}

function PacientesPage() {
  const [q, setQ] = useState("");
  const { data, isLoading, error } = useQuery<Paciente[] | { results: Paciente[] }>({
    queryKey: ["pacientes"],
    queryFn: () => apiFetch("/pacientes/"),
  });

  const items = useMemo<Paciente[]>(() => {
    if (!data) return [];
    return Array.isArray(data) ? data : (data.results ?? []);
  }, [data]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((p) =>
      [p.nombres, p.apellidos, p.diagnostico_preliminar, p.riesgo_enfermedad]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term)),
    );
  }, [items, q]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <CardTitle className="text-base">Pacientes registrados</CardTitle>
        <div className="relative w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar nombre, diagnóstico, riesgo…"
            className="pl-8"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 text-destructive text-sm">
            <AlertTriangle className="h-4 w-4" /> {(error as Error).message}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Paciente</TableHead>
                  <TableHead>Edad</TableHead>
                  <TableHead>Sexo</TableHead>
                  <TableHead>IMC</TableHead>
                  <TableHead>Glucosa</TableHead>
                  <TableHead>Presión</TableHead>
                  <TableHead>Diagnóstico</TableHead>
                  <TableHead>Riesgo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center text-muted-foreground py-8">
                      Sin pacientes para mostrar
                    </TableCell>
                  </TableRow>
                )}
                {filtered.map((p, i) => (
                  <TableRow key={p.id_paciente ?? p.id ?? i}>
                    <TableCell className="font-mono text-xs">{p.id_paciente ?? p.id ?? i + 1}</TableCell>
                    <TableCell className="font-medium">
                      {p.nombres} {p.apellidos}
                    </TableCell>
                    <TableCell>{p.edad ?? "—"}</TableCell>
                    <TableCell>{p.sexo ?? "—"}</TableCell>
                    <TableCell>{(p.IMC ?? p.imc)?.toString() ?? "—"}</TableCell>
                    <TableCell>{p.glucosa ?? "—"}</TableCell>
                    <TableCell>
                      {p.presion_sistolica ?? "—"}/{p.presion_diastolica ?? "—"}
                    </TableCell>
                    <TableCell>{p.diagnostico_preliminar ?? "—"}</TableCell>
                    <TableCell>{riskBadge(p.riesgo_enfermedad)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}