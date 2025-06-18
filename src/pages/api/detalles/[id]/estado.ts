import type { APIRoute } from "astro";
import { pool } from "../../../../utils/db";

export const PATCH: APIRoute = async ({ params, request }) => {
  const id = Number(params.id);
  const { estado } = await request.json().catch(() => ({}));

  if (!id || ![1, 2, 3].includes(estado)) {
    return new Response("Estado debe ser 1, 2 ó 3", { status: 400 });
  }

  try {
    const conn = await pool.getConnection();
    const res: any = await conn.query(
      "UPDATE proyectos_clientes_detalles SET estado = ? WHERE id = ?",
      [estado, id]
    );
    conn.release();

    if (res.affectedRows === 0) {
      return new Response("Detalle no encontrado", { status: 404 });
    }
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error(err);
    return new Response("Error interno", { status: 500 });
  }
};
