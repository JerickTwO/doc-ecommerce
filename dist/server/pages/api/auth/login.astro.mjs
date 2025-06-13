import { a as authenticateUser, g as generateToken } from '../../../chunks/auth_DKvyb8jb.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies }) => {
  try {
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Content-Type debe ser application/json"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    let body;
    try {
      const text = await request.text();
      if (!text) {
        throw new Error("Body vacío");
      }
      body = JSON.parse(text);
    } catch (error) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "JSON inválido en el cuerpo de la petición"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const { identifier, password } = body;
    if (!identifier || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email/Usuario y contraseña son requeridos"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const user = await authenticateUser(identifier, password);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Credenciales inválidas"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const token = generateToken(user);
    cookies.set("auth-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      // 24 horas
      path: "/"
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Login exitoso",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error en login:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
