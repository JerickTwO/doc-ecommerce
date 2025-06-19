import { r as removeCliente } from '../../../chunks/clientStore_BLAaA3MI.mjs';
export { renderers } from '../../../renderers.mjs';

const DELETE = async ({ params }) => {
  const idNum = Number(params.id);
  if (!params.id || Number.isNaN(idNum)) {
    return new Response("ID inválido", { status: 400 });
  }
  try {
    const eliminado = await removeCliente(idNum);
    if (!eliminado) return new Response("Cliente no encontrado", { status: 404 });
    return new Response(null, { status: 204 });
  } catch (err) {
    console.error(err);
    return new Response("Error interno del servidor", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
