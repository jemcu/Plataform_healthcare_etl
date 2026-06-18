import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { apiFetch, API_BASE, tokenStore } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Play, Upload, AlertTriangle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/etl")({
  component: EtlPage,
});

interface EtlRun {
  id?: number;
  fecha?: string;
  created_at?: string;
  usuario?: string;
  registros_procesados?: number;
  tiempo_ejecucion?: number | string;
  estado?: string;
}

function statusBadge(s?: string) {
  const k = (s ?? "").toLowerCase();
  if (k.includes("ok") || k.includes("exito") || k.includes("success") || k === "completado")
    return <Badge className="bg-chart-2 text-white hover:bg-chart-2">{s}</Badge>;
  if (k.includes("error") || k.includes("fall"))
    return <Badge variant="destructive">{s}</Badge>;
  return <Badge variant="outline">{s ?? "—"}</Badge>;
}

function EtlPage() {
  const qc = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const history = useQuery<EtlRun[] | { results: EtlRun[] }>({
    queryKey: ["etl-history"],
    queryFn: () => apiFetch("/etl/historial/"),
  });

  const runEtl = useMutation({
    mutationFn: () => apiFetch("/etl/run/", { method: "POST" }),
    onSuccess: () => {
      toast.success("Proceso ETL ejecutado");
      qc.invalidateQueries({ queryKey: ["etl-history"] });
      qc.invalidateQueries({ queryKey: ["dashboard-kpis"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const onFile = async (f: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", f);
      const token = tokenStore.get();
      const res = await fetch(`${API_BASE}/etl/upload/`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: fd,
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

  const items: EtlRun[] = Array.isArray(history.data)
    ? history.data
    : history.data?.results ?? [];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ejecutar ETL automático</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Extrae, limpia, transforma y carga datos clínicos en la base de datos.
            </p>
            <Button onClick={() => runEtl.mutate()} disabled={runEtl.isPending}>
              {runEtl.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              Ejecutar proceso ETL
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Cargar dataset (CSV)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Sube un archivo CSV con registros clínicos. Se validará y ejecutará el ETL.
            </p>
            <input
              ref={fileRef}
              type="file"
              accept=".csv"
              hidden
              onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
            />
            <Button variant="secondary" disabled={uploading} onClick={() => fileRef.current?.click()}>
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Upload className="h-4 w-4 mr-2" />
              )}
              Seleccionar CSV
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-chart-2" /> Historial de ejecuciones ETL
          </CardTitle>
        </CardHeader>
        <CardContent>
          {history.isLoading ? (
            <div className="flex justify-center py-10">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : history.error ? (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertTriangle className="h-4 w-4" /> {(history.error as Error).message}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fecha</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Registros</TableHead>
                    <TableHead>Tiempo (s)</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        Sin ejecuciones aún
                      </TableCell>
                    </TableRow>
                  )}
                  {items.map((r, i) => (
                    <TableRow key={r.id ?? i}>
                      <TableCell className="text-xs">
                        {r.fecha ?? r.created_at ?? "—"}
                      </TableCell>
                      <TableCell>{r.usuario ?? "—"}</TableCell>
                      <TableCell>{r.registros_procesados ?? "—"}</TableCell>
                      <TableCell>{r.tiempo_ejecucion ?? "—"}</TableCell>
                      <TableCell>{statusBadge(r.estado)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}