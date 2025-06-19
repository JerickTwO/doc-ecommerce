import { a as authenticateUser, g as generateToken } from '../../../chunks/auth_Se_inTsb.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies }) => {
  try {
    const { identifier, password } = await request.json();
    if (!identifier || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email y contraseña requeridos"
        }),
        { status: 400 }
      );
    }
    const user = await authenticateUser(identifier, password);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Credenciales inválidas"
        }),
        { status: 401 }
      );
    }
    const token = generateToken(user);
    console.log("Login exitoso:", token), cookies.set("auth-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24
    });
    return new Response(
      JSON.stringify({
        success: true,
        message: "Login exitoso",
        user
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error en login:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor"
      }),
      { status: 500 }
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
