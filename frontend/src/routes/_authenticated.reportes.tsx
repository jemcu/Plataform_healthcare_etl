import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { API_BASE, tokenStore } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, FileText, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/reportes")({
  component: ReportesPage,
});

const reports = [
  { key: "pdf", label: "Reporte PDF", icon: FileText, path: "/reportes/pdf/", ext: "pdf" },
  { key: "excel", label: "Reporte Excel", icon: FileSpreadsheet, path: "/reportes/excel/", ext: "xlsx" },
  { key: "csv", label: "Exportar CSV", icon: Download, path: "/reportes/csv/", ext: "csv" },
];

function ReportesPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const download = async (path: string, filename: string, key: string) => {
    setLoading(key);
    try {
      const token = tokenStore.get();
      const res = await fetch(`${API_BASE}${path}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
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

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Exporta reportes clínicos consolidados generados por el backend Django.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((r) => (
          <Card key={r.key}>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <r.icon className="h-5 w-5 text-primary" /> {r.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full"
                disabled={loading === r.key}
                onClick={() => download(r.path, `reporte-clinico.${r.ext}`, r.key)}
              >
                {loading === r.key ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Download className="h-4 w-4 mr-2" />
                )}
                Descargar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}