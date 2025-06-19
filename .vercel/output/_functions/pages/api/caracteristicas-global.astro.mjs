import { p as pool } from '../../chunks/db_Kpg-XkaI.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const { titulo = "", descripcion = "" } = await request.json();
  if (!titulo.trim()) {
    return new Response(JSON.stringify({ error: "Título requerido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const res = await pool.query(
      `INSERT INTO caracteristicas_ecommerce
        (titulo, descripcion, estado, es_general)
       VALUES (?, ?, 1, 1)`,
      [titulo.trim(), descripcion.trim()]
    );
    return new Response(
      JSON.stringify({
        id: Number(res.insertId),
        titulo,
        descripcion,
        estado: 1,
        es_general: 1
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error al crear característica global:", err);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const GET = async () => {
  try {
    const rows = await pool.query(`
      SELECT id, titulo
      FROM caracteristicas_ecommerce
      WHERE estado = 1 AND es_general = 1
      ORDER BY titulo ASC
    `);
    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error al obtener características globales:", error);
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
