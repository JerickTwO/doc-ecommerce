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
  "/api/detalles",
  "/requisitos",
  "/api/clientes",
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

const matchRoute = (routes: string[], pathname: string) =>
  routes.some((route) => {
    const r = route.startsWith("/") ? route : "/" + route;
    return r === "/"
      ? pathname === "/"
      : pathname === r || pathname.startsWith(r + "/");
  });

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const { url, cookies, redirect, locals } = ctx;
  const pathname = new URL(url).pathname;

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

  if (!user) {
    if (!matchRoute(publicRoutes, pathname)) return redirect("/login");
    return next();
  }

  locals.user = user;
  const role = (user.role ?? "").toLowerCase();

  if (role === "admin") {
    if (pathname === "/login") return redirect("/dashboard");
    return next(); // acceso libre a todo
  }

  if (role === "cliente") {
    if (matchRoute(adminOnlyRoutes, pathname))
      return redirect("/proyectos-clientes-detalles");
    if (pathname === "/login") return redirect("/proyectos-clientes-detalles");
    return next();
  }

  cookies.delete("auth-token", { path: "/" });
  return redirect("/login");
};
