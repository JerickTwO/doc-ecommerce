import type { MiddlewareHandler } from "astro";
import { verifyToken } from "./utils/auth";

declare module "astro" {
  interface Locals {
    user?: ReturnType<typeof verifyToken>;
  }
}

const ensureSlash = (r: string) => (r.startsWith("/") ? r : "/" + r);

const publicRoutes = [
  "/",
  "/login",
  "/login-cliente",
  "/api/auth",
  "/api/clientes",
  "/api/detalles",
  "/requisitos",
  "/caracteristicas",
  "/implementacion",
].map(ensureSlash);
const adminOnlyRoutes = [
  "/dashboard",
  "/admin",
  "/profile",
  "/despliegue",
  "/proyecto",
  "/clientes",
  "/caracteristicas-proyecto",
].map(ensureSlash);

/* Coincide si el pathname es EXACTAMENTE la ruta
   o empieza por "ruta/" (evitamos que "/" coincida con todo) */
const matchRoute = (routes: string[], pathname: string) =>
  routes.some((route) => {
    const r = route.startsWith("/") ? route : "/" + route;
    return r === "/"
      ? pathname === "/"
      : pathname === r || pathname.startsWith(r + "/");
  });

/* ------------------ Middleware ------------------ */
export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const { url, cookies, redirect, locals } = ctx;
  const pathname = new URL(url).pathname;

  /* 1. Verificar token (y manejar errores) */
  const rawToken = cookies.get("auth-token")?.value;
  let user: ReturnType<typeof verifyToken> | null = null;

  if (rawToken) {
    try {
      user = verifyToken(rawToken);
    } catch {
      // Token corrupto o expirado ⇒ lo quitamos
      cookies.delete("auth-token", { path: "/" });
    }
  }

  /* 2. No autenticado → solo rutas públicas */
  if (!user) {
    if (!matchRoute(publicRoutes, pathname)) return redirect("/login");
    return next();
  }

  /* 3. Autenticado */
  locals.user = user;
  const role = (user.role ?? "").toLowerCase();

  /* --- ADMIN --- */
  if (role === "admin") {
    if (pathname === "/login") return redirect("/dashboard");
    return next(); // acceso libre a todo
  }

  /* --- CLIENTE --- */
  if (role === "cliente") {
    if (matchRoute(adminOnlyRoutes, pathname))
      return redirect("/proyectos-clientes-detalles");
    if (pathname === "/login") return redirect("/proyectos-clientes-detalles");
    return next();
  }

  /* 4. Rol desconocido → limpiar cookie y volver a /login */
  cookies.delete("auth-token", { path: "/" });
  return redirect("/login");
};
