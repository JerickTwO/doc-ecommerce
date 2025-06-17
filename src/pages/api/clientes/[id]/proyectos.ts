import type { APIRoute } from "astro";
import {
  getProyectosByCliente,
  createProyectoParaCliente,
} from "../../../../utils/proyectos-clientes";
export const GET: APIRoute = async ({ params }) => {
  const clienteId = params.id!;
  const proyectos = await getProyectosByCliente(clienteId);

  return new Response(JSON.stringify(proyectos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
export const POST: APIRoute = async ({ request, params }) => {
  const clienteId = params.id!;
  const body = await request.json();

  try {
    const nuevo = await createProyectoParaCliente(clienteId, body);

    // 🔑 BigInt → string
    const json = JSON.stringify(nuevo, (_, v) =>
      typeof v === "bigint" ? v.toString() : v
    );

    return new Response(json, {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: err.code, sqlMessage: err.sqlMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
