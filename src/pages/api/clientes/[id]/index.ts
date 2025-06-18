import type { APIRoute } from "astro";
import { removeCliente } from "../../../../utils/clientStore";

export const DELETE: APIRoute = async ({ params }) => {
  const idNum = Number(params.id);
  if (!params.id || Number.isNaN(idNum)) {
    return new Response("ID inválido", { status: 400 });
  }

  try {
    const eliminado = await removeCliente(idNum);  // ← ahora es number
    if (!eliminado) return new Response("Cliente no encontrado", { status: 404 });
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error(err);
    return new Response("Error interno del servidor", { status: 500 });
  }
};
