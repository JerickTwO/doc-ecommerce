import type { APIRoute } from 'astro';
import { authenticateUser, generateToken } from '../../../utils/auth';

// Forzar server-side rendering para esta ruta API
export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        // Verificar que el request tenga contenido
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Content-Type debe ser application/json'
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Obtener y validar el body
        let body;
        try {
            const text = await request.text();
            if (!text) {
                throw new Error('Body vacío');
            }
            body = JSON.parse(text);
        } catch (error) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'JSON inválido en el cuerpo de la petición'
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        const { identifier, password } = body;

        // Validar datos
        if (!identifier || !password) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Email/Usuario y contraseña son requeridos'
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Autenticar usuario
        const user = await authenticateUser(identifier, password);

        if (!user) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Credenciales inválidas'
                }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Generar token
        const token = generateToken(user);

        // Establecer cookie
        cookies.set('auth-token', token, {
            httpOnly: true,
            secure: import.meta.env.PROD,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 24 horas
            path: '/'
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Login exitoso',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('Error en login:', error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Error interno del servidor'
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};
