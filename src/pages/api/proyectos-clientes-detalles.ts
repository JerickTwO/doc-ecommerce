import type { APIRoute } from 'astro';
import { query } from '../../utils/db';        // ← usa tu helper

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const rows = await query<any[]>(
      `SELECT pcd.id,
              pc.nombre_proyecto          AS nombreProyecto,
              ce.titulo                   AS caracteristica,
              pcd.observacion,
              pcd.estado
       FROM   proyectos_clientes_detalles pcd
       JOIN   proyectos_clientes pc        ON pc.id = pcd.proyectoid
       JOIN   caracteristicas_ecommerce ce ON ce.id = pcd.caracteristicas_ecommerceid
       ORDER  BY pcd.id`
    );

    return new Response(JSON.stringify({ success: true, data: rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error en detalles:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'Error de servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
