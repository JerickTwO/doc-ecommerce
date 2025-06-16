import type { APIRoute } from "astro";
import { getAllClientes, createCliente } from "../../../utils/clientStore";
const replacer = (_: string, value: any) =>
  typeof value === "bigint" ? value.toString() : value;

export const GET: APIRoute = async () => {
  const data = await getAllClientes();
  return new Response(JSON.stringify(data, replacer), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  if (!body.razon_social || !body.ruc) {
    return new Response("Faltan campos", { status: 400 });
  }
  const nuevo = await createCliente({
    razon_social: body.razon_social,
    ruc: body.ruc,
  });
  return new Response(JSON.stringify(nuevo, replacer), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
