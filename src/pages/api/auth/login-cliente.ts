import type { APIRoute } from 'astro';
import {
  authenticateClient,
  generateClientToken
} from '../../../utils/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  // 1. Validar Content-Type
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return new Response(
      JSON.stringify({ success: false, message: 'Content-Type debe ser application/json' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 2. Parsear body
  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: 'JSON inválido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 3. Extraer RUC
  const { ruc } = body;
  if (!ruc) {
    return new Response(
      JSON.stringify({ success: false, message: 'El campo RUC es requerido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 4. Autenticar cliente
  const client = await authenticateClient(ruc);
  if (!client) {
    return new Response(
      JSON.stringify({ success: false, message: 'RUC no registrado' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // 5. Generar token y setear cookie
  const token = generateClientToken(client);
  cookies.set('auth-token', token, {
    httpOnly : true,
    secure   : import.meta.env.PROD,
    sameSite : 'strict',
    maxAge   : 60 * 60 * 24,
    path     : '/'
  });

  // 6. Respuesta
  return new Response(
    JSON.stringify({ success: true, message: 'Login cliente exitoso', user: client }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
