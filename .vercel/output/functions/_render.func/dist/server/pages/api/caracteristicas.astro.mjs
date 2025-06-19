import { p as pool } from '../../chunks/db_Kpg-XkaI.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { titulo, descripcion = "" } = await request.json();
  if (!titulo?.trim()) {
    return new Response(JSON.stringify({ error: "Título requerido" }), {
      status: 400
    });
  }
  const conn = await pool.getConnection();
  try {
    const res = await conn.query(
      "INSERT INTO caracteristicas_ecommerce (titulo, descripcion, estado) VALUES (?,?,1)",
      [titulo.trim(), descripcion.trim()]
    );
    const payload = {
      id: Number(res.insertId),
      // o  res.insertId.toString()
      titulo,
      descripcion,
      estado: 1
    };
    return new Response(JSON.stringify(payload), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } finally {
    conn.release();
  }
};
const GET = async ({ request }) => {
  try {
    const rows = await pool.query(`
      SELECT id, titulo
      FROM vw_caracteristicas_mostrables
    `);
    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al obtener características:", error);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
