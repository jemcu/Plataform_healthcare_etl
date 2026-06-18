import { createFileRoute, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useAuth } from "@/lib/auth";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
  component: AuthenticatedLayout,
});

const titles: Record<string, string> = {
  "/dashboard": "Dashboard Clínico",
  "/pacientes": "Pacientes",
  "/etl": "Procesos ETL",
  "/predicciones": "Predicciones ML",
  "/reportes": "Reportes",
  "/cambiar-password": "Cambiar contraseña",
  "/usuarios": "Gestión de usuarios",
  "/auditoria": "Auditoría",
};

function AuthenticatedLayout() {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!loading && !isAuthenticated) navigate({ to: "/login", replace: true });
  }, [loading, isAuthenticated, navigate]);

  if (loading || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const title =
    titles[pathname] ||
    Object.entries(titles).find(([k]) => pathname.startsWith(k))?.[1] ||
    "HealthAnalytics";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-3 border-b bg-card px-4">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-base font-semibold">{title}</h1>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}