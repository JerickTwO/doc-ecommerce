import { v as verifyToken } from './chunks/auth_Se_inTsb.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CzDD8ETm.mjs';
import 'kleur/colors';
import './chunks/astro/server_BTInrGQy.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_bCzdt9fr.mjs';

const ensureSlash = (r) => r.startsWith("/") ? r : "/" + r;
const publicRoutes = [
  "/",
  "/login",
  "/login-cliente",
  "/api/auth",
  "/api/detalles",
  "/requisitos",
  "/api/clientes",
  "/caracteristicas",
  "/implementacion"
].map(ensureSlash);
const adminOnlyRoutes = [
  "/dashboard",
  "/admin",
  "/profile",
  "/despliegue",
  "/proyecto",
  "/clientes",
  "/caracteristicas-proyecto"
].map(ensureSlash);
const matchRoute = (routes, pathname) => routes.some((route) => {
  const r = route.startsWith("/") ? route : "/" + route;
  return r === "/" ? pathname === "/" : pathname === r || pathname.startsWith(r + "/");
});
const onRequest$1 = async (ctx, next) => {
  const { url, cookies, redirect, locals } = ctx;
  const pathname = new URL(url).pathname;
  const rawToken = cookies.get("auth-token")?.value;
  let user = null;
  if (rawToken) {
    try {
      user = verifyToken(rawToken);
    } catch {
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
    return next();
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

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
