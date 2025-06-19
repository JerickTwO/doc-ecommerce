import { r as removeDetalle } from '../../../chunks/proyectoStore_C5gdYW3s.mjs';
export { renderers } from '../../../renderers.mjs';

const DELETE = async ({ params }) => {
  const id = Number(params.id);
  if (!params.id || Number.isNaN(id)) {
    return new Response("ID inválido", { status: 400 });
  }
  try {
    const ok = await removeDetalle(id);
    return ok ? new Response(null, { status: 204 }) : new Response("Detalle no encontrado", { status: 404 });
  } catch (e) {
    console.error(e);
    return new Response("Error interno", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
