import { APIRoute } from "astro";
import { pool } from "../../../utils/db";
import { removeProyecto } from "../../../utils/proyectoStore";

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

export const DELETE: APIRoute = async ({ params }) => {
  const id = Number(params.id);
  if (!params.id || isNaN(id)) {
    return new Response("ID inválido", { status: 400 });
  }

  try {
    const eliminado = await removeProyecto(id);

    if (!eliminado) {
      return new Response("Proyecto no encontrado", { status: 404 });
    }

    return new Response(null, { status: 204 }); // No Content
  } catch (error) {
    console.error("Error al eliminar el proyecto:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
};
