import { p as pool } from '../../../chunks/db_Kpg-XkaI.mjs';
import { a as removeProyecto } from '../../../chunks/proyectoStore_C5gdYW3s.mjs';
export { renderers } from '../../../renderers.mjs';

const put = async ({ params, request }) => {
  const id = Number(params.id);
  const { estado } = await request.json();
  await pool.query(`UPDATE proyectos_clientes SET estado = ? WHERE id = ?`, [
    estado ? 1 : 0,
    id
  ]);
  const [rows] = await pool.query(
    `SELECT * FROM proyectos_clientes WHERE id = ?`,
    [id]
  );
  const proyecto = rows[0];
  return new Response(
    JSON.stringify({
      id: proyecto.id,
      nombreProyecto: proyecto.nombre_proyecto,
      observacion: proyecto.observacion,
      estado: !!proyecto.estado,
      detalles: []
    })
  );
};
const DELETE = async ({ params }) => {
  const id = Number(params.id);
  if (!params.id || isNaN(id)) {
    return new Response("ID inválido", { status: 400 });
  }
  try {
    const eliminado = await removeProyecto(id);
    if (!eliminado) {
      return new Response("Proyecto no encontrado", { status: 404 });
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error al eliminar el proyecto:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  put
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
