import type { MiddlewareHandler } from 'astro';
import type { Locals } from 'astro';

import { verifyToken } from './utils/auth';

// Extend Locals type to include 'user'
declare module 'astro' {
    interface Locals {
        user?: ReturnType<typeof verifyToken>;
    }
}

const protectedRoutes = ['/dashboard', '/admin', '/profile'];
const publicRoutes = ['/3141592653589793', '/'];

export const onRequest: MiddlewareHandler = async (context, next) => {
    const { url, cookies, redirect } = context;
    const pathname = new URL(url).pathname;

    // Obtener token de las cookies
    const token = cookies.get('auth-token')?.value;

    // Si es una ruta protegida
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        if (!token) {
            return redirect('/3141592653589793');
        }

        const user = verifyToken(token);
        if (!user) {
            cookies.delete('auth-token');
            return redirect('/3141592653589793');
        }

        // Añadir usuario al contexto (opcional)
        context.locals.user = user;
    }

    // Si ya está logueado y trata de acceder al 3141592653589793
    if (pathname === '/3141592653589793' && token) {
        const user = verifyToken(token);
        if (user) {
            return redirect('/dashboard');
        }
    }

    return next();
};