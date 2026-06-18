import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { apiFetch, ApiError } from "@/lib/api";
import { toast } from "sonner";
import { Loader2, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/_authenticated/auditoria")({
  component: AuditPage,
});

interface AuditRow {
  id: number;
  user?: string | { username?: string };
  action?: string;
  resource?: string;
  ip_address?: string;
  timestamp?: string;
  created_at?: string;
  details?: unknown;
}

function AuditPage() {
  const [rows, setRows] = useState<AuditRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await apiFetch<AuditRow[] | { results: AuditRow[] }>("/auth/audit-logs/");
        setRows(Array.isArray(data) ? data : data.results ?? []);
      } catch (err) {
        const msg = err instanceof ApiError ? err.message : "Error cargando auditoría";
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = rows.filter((r) => {
    if (!q) return true;
    const s = q.toLowerCase();
    const userStr = typeof r.user === "string" ? r.user : r.user?.username ?? "";
    return (
      userStr.toLowerCase().includes(s) ||
      (r.action ?? "").toLowerCase().includes(s) ||
      (r.resource ?? "").toLowerCase().includes(s) ||
      (r.ip_address ?? "").toLowerCase().includes(s)
    );
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><ShieldAlert className="h-5 w-5" /> Auditoría</CardTitle>
        <CardDescription>Registro de actividad del sistema.</CardDescription>
        <div className="pt-2">
          <Input placeholder="Buscar por usuario, acción, recurso o IP…" value={q} onChange={(e) => setQ(e.target.value)} className="max-w-md" />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-10"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Usuario</TableHead>
                <TableHead>Acción</TableHead>
                <TableHead>Recurso</TableHead>
                <TableHead>IP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground">Sin registros</TableCell></TableRow>
              ) : filtered.map((r) => {
                const ts = r.timestamp ?? r.created_at;
                const userStr = typeof r.user === "string" ? r.user : r.user?.username ?? "—";
                return (
                  <TableRow key={r.id}>
                    <TableCell className="whitespace-nowrap text-sm">{ts ? new Date(ts).toLocaleString() : "—"}</TableCell>
                    <TableCell>{userStr}</TableCell>
                    <TableCell><Badge variant="secondary">{r.action ?? "—"}</Badge></TableCell>
                    <TableCell>{r.resource ?? "—"}</TableCell>
                    <TableCell className="font-mono text-xs">{r.ip_address ?? "—"}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}