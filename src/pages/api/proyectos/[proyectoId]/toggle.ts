import type { APIRoute } from "astro";
import { pool } from "../../../../utils/db";

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = Number(params.proyectoId);
  if (Number.isNaN(id)) {
    return new Response("ID inválido", { status: 400 });
  }

  const body = await request.json();
  if (typeof body.estado !== "boolean") {
    return new Response("Falta el campo 'estado'", { status: 400 });
  }

  try {
    const conn = await pool.getConnection();
    const result: any = await conn.query(
      "UPDATE proyectos_clientes SET estado = ? WHERE id = ?",
      [body.estado ? 1 : 0, id]
    );
    conn.release();

    if (result.affectedRows === 0) {
      return new Response("Proyecto no encontrado", { status: 404 });
    }

    return new Response(JSON.stringify({ id, estado: body.estado }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error al cambiar estado:", err);
    return new Response("Error interno del servidor", { status: 500 });
  }
};
