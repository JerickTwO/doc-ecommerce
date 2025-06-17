import type { APIRoute } from "astro";

// Forzar server-side rendering para esta ruta API
export const prerender = false;

export const POST: APIRoute = async ({ cookies }) => {
  try {
    cookies.delete("auth-token", { path: "/" });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Logout exitoso",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error en logout:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
