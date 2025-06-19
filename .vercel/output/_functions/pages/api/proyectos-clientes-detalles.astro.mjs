import { q as query } from '../../chunks/db_Kpg-XkaI.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const rows = await query(
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
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Error en detalles:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Error de servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
