import { v as verifyToken } from './chunks/auth_DKvyb8jb.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DCOXPlQV.mjs';
import 'kleur/colors';
import './chunks/astro/server_BW4uXlO9.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_D7mFmlYS.mjs';

const protectedRoutes = ["/dashboard", "/admin", "/profile", "/despliegue"];
const onRequest$1 = async (context, next) => {
  const { url, cookies, redirect } = context;
  const pathname = new URL(url).pathname;
  const token = cookies.get("auth-token")?.value;
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return redirect("/login");
    }
    const user = verifyToken(token);
    if (!user) {
      cookies.delete("auth-token");
      return redirect("/login");
    }
    context.locals.user = user;
  }
  if (pathname === "/login" && token) {
    const user = verifyToken(token);
    if (user) {
      return redirect("/dashboard");
    }
  }
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
