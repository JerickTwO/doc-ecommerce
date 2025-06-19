import { g as getAllClientes, c as createCliente } from '../../chunks/clientStore_BLAaA3MI.mjs';
export { renderers } from '../../renderers.mjs';

const replacer = (_, value) => typeof value === "bigint" ? value.toString() : value;
const GET = async () => {
  try {
    const data = await getAllClientes();
    return new Response(JSON.stringify(data, replacer), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error(e);
    return new Response("Error interno", { status: 500 });
  }
};
const POST = async ({ request }) => {
  const body = await request.json();
  if (!body.razon_social || !body.ruc) {
    return new Response("Faltan campos", { status: 400 });
  }
  const nuevo = await createCliente({
    razon_social: body.razon_social,
    ruc: body.ruc
  });
  return new Response(JSON.stringify(nuevo, replacer), {
    status: 201,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
