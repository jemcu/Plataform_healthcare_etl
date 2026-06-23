const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "") || "http://localhost:8000/api";

const TOKEN_KEY = "ha_token";
const REFRESH_KEY = "ha_refresh";
const USER_KEY = "ha_user";

export const tokenStore = {
  get: () => (typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null),
  set: (t: string) => localStorage.setItem(TOKEN_KEY, t),
  clear: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
  },
};

export const refreshStore = {
  get: () => (typeof window !== "undefined" ? localStorage.getItem(REFRESH_KEY) : null),
  set: (t: string) => localStorage.setItem(REFRESH_KEY, t),
};

export const userStore = {
  get: () => {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  },
  set: (u: unknown) => localStorage.setItem(USER_KEY, JSON.stringify(u)),
};

export class ApiError extends Error {
  status: number;
  data: unknown;
  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

export async function apiFetch<T = unknown>(
  path: string,
  init: RequestInit & { auth?: boolean } = {},
): Promise<T> {
  const { auth = true, headers, ...rest } = init;
  const h = new Headers(headers);
  if (!h.has("Content-Type") && rest.body && !(rest.body instanceof FormData)) {
    h.set("Content-Type", "application/json");
  }
  if (auth) {
    const token = tokenStore.get();
    if (token) h.set("Authorization", `Bearer ${token}`);
  }
  const url = path.startsWith("http") ? path : `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, { ...rest, headers: h });
  const ct = res.headers.get("content-type") || "";
  const isJson = ct.includes("application/json");
  const data = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null);
  if (!res.ok) {
    const msg =
      (isJson && data && typeof data === "object" && ("detail" in (data as object) ? (data as { detail: string }).detail : null)) ||
      `Request failed (${res.status})`;
    throw new ApiError(msg as string, res.status, data);
  }
  return data as T;
}

export const API_BASE = BASE_URL;