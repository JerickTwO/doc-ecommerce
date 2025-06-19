import { p as pool } from '../../../../chunks/db_Kpg-XkaI.mjs';
export { renderers } from '../../../../renderers.mjs';

const PATCH = async ({ params, request }) => {
  const id = Number(params.id);
  const { estado } = await request.json().catch(() => ({}));
  if (!id || ![1, 2, 3].includes(estado)) {
    return new Response("Estado debe ser 1, 2 ó 3", { status: 400 });
  }
  try {
    const conn = await pool.getConnection();
    const res = await conn.query(
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
