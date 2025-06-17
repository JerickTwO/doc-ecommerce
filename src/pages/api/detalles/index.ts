// src/pages/api/detalles/index.ts
import type { APIRoute } from 'astro';
import { pool } from '../../../utils/db';

export const POST: APIRoute = async ({ request }) => {
  const { proyectoId, caracteristicas_ecommerceid, observacion = '' } = await request.json();

  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
      `INSERT INTO proyectos_clientes_detalles
       (proyectoid, caracteristicas_ecommerceid, observacion, estado)
       VALUES (?,?,?,1)`,
      [proyectoId, caracteristicas_ecommerceid, observacion]
    );

    return new Response(JSON.stringify({
      id: Number(res.insertId),
      proyectoid: proyectoId,
      caracteristicas_ecommerceid,
      observacion,
      estado: 1
    }), { status: 201 });
  } finally { conn.release(); }
};
