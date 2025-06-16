import { APIRoute } from "astro";
import { pool } from "../../../utils/db";

export const put: APIRoute = async ({ params, request }) => {
  const id = Number(params.id);
  const { estado } = await request.json();

  await pool.query(`UPDATE proyectos_clientes SET estado = ? WHERE id = ?`, [
    estado ? 1 : 0,
    id,
  ]);

  const [rows] = await pool.query(
    `SELECT * FROM proyectos_clientes WHERE id = ?`,
    [id]
  );
  const proyecto = (rows as any)[0];

  return new Response(
    JSON.stringify({
      id: proyecto.id,
      nombreProyecto: proyecto.nombre_proyecto,
      observacion: proyecto.observacion,
      estado: !!proyecto.estado,
      detalles: [],
    })
  );
};
