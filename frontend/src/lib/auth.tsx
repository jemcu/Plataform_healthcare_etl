import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { apiFetch, tokenStore, refreshStore, userStore } from "./api";

export interface AuthUser {
  id?: number;
  username: string;
  email?: string;
  role?: string;
  first_name?: string;
  last_name?: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setToken(tokenStore.get());
    setUser(userStore.get());
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    // SimpleJWT: POST /auth/login/ -> { access, refresh, user? } (o { token })
    const data = await apiFetch<{
      access?: string;
      refresh?: string;
      token?: string;
      user?: AuthUser;
    }>("/auth/login/", {
      method: "POST",
      auth: false,
      body: JSON.stringify({ username, password }),
    });
    const access = data.access ?? data.token;
    if (!access) throw new Error("Respuesta de login inválida");
    tokenStore.set(access);
    if (data.refresh) refreshStore.set(data.refresh);
    setToken(access);
    let u: AuthUser = data.user ?? { username };
    try {
      u = await apiFetch<AuthUser>("/auth/profile/");
    } catch {
      // si /profile/ falla, conservamos el usuario básico
    }
    userStore.set(u);
    setUser(u);
  };

  const logout = () => {
    const refresh = refreshStore.get();
    // best-effort: notificar al backend; no bloquear UI
    apiFetch("/auth/logout/", {
      method: "POST",
      body: refresh ? JSON.stringify({ refresh }) : undefined,
    }).catch(() => {});
    tokenStore.clear();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated: !!token, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}