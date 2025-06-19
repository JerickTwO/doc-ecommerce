import { b as authenticateClient, c as generateClientToken } from '../../../chunks/auth_Se_inTsb.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies }) => {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return new Response(
      JSON.stringify({ success: false, message: "Content-Type debe ser application/json" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "JSON inválido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const { ruc } = body;
  if (!ruc) {
    return new Response(
      JSON.stringify({ success: false, message: "El campo RUC es requerido" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const client = await authenticateClient(ruc);
  if (!client) {
    return new Response(
      JSON.stringify({ success: false, message: "RUC no registrado" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }
  const token = generateClientToken(client);
  cookies.set("auth-token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/"
  });
  return new Response(
    JSON.stringify({ success: true, message: "Login cliente exitoso", user: client }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
