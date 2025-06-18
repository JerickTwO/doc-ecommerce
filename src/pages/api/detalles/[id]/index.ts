import type { APIRoute } from "astro";
import { removeDetalle } from "../../../../utils/proyectoStore";

export const DELETE: APIRoute = async ({ params }) => {
  const id = Number(params.id);
  if (!params.id || Number.isNaN(id)) {
    return new Response("ID inválido", { status: 400 });
  }

  try {
    const ok = await removeDetalle(id);
    return ok
      ? new Response(null, { status: 204 })
      : new Response("Detalle no encontrado", { status: 404 });
  } catch (e) {
    console.error(e);
    return new Response("Error interno", { status: 500 });
  }
};
