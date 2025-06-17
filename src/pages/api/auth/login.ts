// pages/api/auth/login.ts
import type { APIRoute } from "astro";
import { authenticateUser, generateToken } from "../../../utils/auth";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { identifier, password } = await request.json();

    if (!identifier || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email/usuario y contraseña requeridos",
        }),
        { status: 400 }
      );
    }

    const user = await authenticateUser(identifier, password);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Credenciales inválidas",
        }),
        { status: 401 }
      );
    }

    const token = generateToken(user);

    cookies.set("auth-token", token, {
      httpOnly: true,
      secure: import.meta.env.PROD,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Login exitoso",
        user,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error en login:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor",
      }),
      { status: 500 }
    );
  }
};
