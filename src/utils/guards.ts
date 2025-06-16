import { verifyToken } from './auth';

export function getUserFromRequest(request: Request) {
  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(/auth-token=([^;]+)/);
  if (!match) return null;
  try { return verifyToken(match[1]); }
  catch { return null; }
}

export function mustBeAdmin(user: { role: string } | null) {
  if (!user) throw new Response('Unauthorized', { status: 401 });
  if (user.role !== 'admin') throw new Response('Forbidden', { status: 403 });
}
