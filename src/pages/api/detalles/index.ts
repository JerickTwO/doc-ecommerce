import type { APIRoute } from "astro";
import { pool } from "../../../utils/db";
import { removeDetalle } from "../../../utils/proyectoStore";

export const POST: APIRoute = async ({ request }) => {
  const {
    proyectoId,
    caracteristicas_ecommerceid,
    observacion = "",
  } = await request.json();

  if (!proyectoId || !caracteristicas_ecommerceid)
    return new Response(JSON.stringify({ error: "Faltan campos" }), {
      status: 400,
    });

  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
      `INSERT INTO proyectos_clientes_detalles
       (proyectoid, caracteristicas_ecommerceid, observacion, estado)
       VALUES (?,?,?,1)`,
      [proyectoId, caracteristicas_ecommerceid, observacion]
    );

    return new Response(
      JSON.stringify({
        id: Number(res.insertId),
        proyectoid: proyectoId,
        caracteristicas_ecommerceid,
        observacion,
        estado: 1,
      }),
      { status: 201 }
    );
  } finally {
    conn.release();
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const idParam = url.searchParams.get("id");
  const id = Number(idParam);

  if (!idParam || Number.isNaN(id)) {
    return new Response(JSON.stringify({ error: "ID inválido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const eliminado = await removeDetalle(id);
    if (!eliminado) {
      return new Response(JSON.stringify({ error: "Detalle no encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(null, { status: 204 }); // Eliminado OK
  } catch (err) {
    console.error("Error al eliminar detalle:", err);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
