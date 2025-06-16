import type { APIRoute } from 'astro';
import { crearProyecto, fetchProyectos } from '../../../../utils/db';

export const get: APIRoute = async ({ params }) => {
  const clienteId = Number(params.id);
  const proyectos  = await fetchProyectos(clienteId);
  return new Response(JSON.stringify(proyectos));
};

export const post: APIRoute = async ({ params, request }) => {
  const clienteId = Number(params.id);
  const { nombreProyecto, observacion } = await request.json();

  if (!nombreProyecto)
    return new Response(JSON.stringify({ error: 'nombreProyecto es requerido' }), { status: 400 });

  const nuevo = await crearProyecto(clienteId, nombreProyecto, observacion ?? '');
  return new Response(JSON.stringify(nuevo), { status: 201 });
};