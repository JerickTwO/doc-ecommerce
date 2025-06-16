import { APIRoute } from "astro";
import { pool } from "../../../utils/db";

export const del: APIRoute = async ({ params }) => {
  const id = Number(params.id);
  await pool.query(`DELETE FROM proyectos_clientes_detalles WHERE id = ?`, [
    id,
  ]);
  return new Response(null, { status: 204 });
};
