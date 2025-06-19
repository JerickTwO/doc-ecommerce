import { g as getProyectosByCliente, c as createProyectoParaCliente } from '../../../../chunks/proyectos-clientes_ygp9IoGm.mjs';
export { renderers } from '../../../../renderers.mjs';

const GET = async ({ params }) => {
  const clienteId = params.id;
  const proyectos = await getProyectosByCliente(clienteId);
  return new Response(JSON.stringify(proyectos), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const POST = async ({ request, params }) => {
  const clienteId = params.id;
  const body = await request.json();
  try {
    const nuevo = await createProyectoParaCliente(clienteId, body);
    const json = JSON.stringify(
      nuevo,
      (_, v) => typeof v === "bigint" ? v.toString() : v
    );
    return new Response(json, {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: err.code, sqlMessage: err.sqlMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
