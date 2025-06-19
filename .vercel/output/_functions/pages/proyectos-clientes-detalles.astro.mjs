/* empty css                                            */
import { c as createAstro, a as createComponent, e as renderTemplate, f as addAttribute, r as renderHead } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import 'clsx';
import { f as fetchProyectos } from '../chunks/db_Kpg-XkaI.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://docs.perseo.com");
const $$ProyectosClientesDetalles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProyectosClientesDetalles;
  const user = Astro2.locals.user;
  if (!user?.sub || user.role !== "cliente") {
    return Astro2.redirect("/login-cliente");
  }
  const proyectos = await fetchProyectos(Number(user.sub));
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Mis proyectos</title>', '</head> <body class="bg-gray-50 min-h-screen p-6 font-sans"> <main class="max-w-6xl mx-auto"> <div class="flex items-start justify-between mb-4 sm:mb-6"> <div class="flex flex-col"> <a href="/" class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-2"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> Volver a la Documentaci\xF3n\n</a> <h1 class="text-3xl font-light text-gray-900 tracking-tight">\nRUC: <span class="font-normal text-green-950">', '</span> </h1> <p class="text-gray-600">Administra tu proyectos de forma sencilla</p> </div> <!-- BOT\xD3N LOGOUT --> <button id="logout-btn" class="inline-flex gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path> <polyline points="16 17 21 12 16 7"></polyline> <line x1="21" y1="12" x2="9" y2="12"></line> </svg>\nCerrar sesi\xF3n\n</button> </div> ', ' <div class="grid gap-6"> ', ' </div> </main> <script>\n      async function handleLogout() {\n        try {\n          const res = await fetch("/api/auth/logout", {\n            method: "POST",\n            headers: { "Content-Type": "application/json" },\n          });\n          const data = await res.json();\n\n          if (data.success) {\n            window.location.href = "/caracteristicas";\n          } else {\n            alert("Error al cerrar sesi\xF3n");\n          }\n        } catch (err) {\n          console.error("Error al cerrar sesi\xF3n:", err);\n          alert("Error al cerrar sesi\xF3n");\n        }\n      }\n\n      document\n        .getElementById("logout-btn")\n        ?.addEventListener("click", handleLogout);\n    <\/script> </body> </html>'])), renderHead(), user.ruc, proyectos.length === 0 && renderTemplate`<p class="text-gray-600">No tienes proyectos aún.</p>`, proyectos.map((p) => renderTemplate`<div class="bg-white shadow-sm border border-gray-200 rounded-xl"> <header class="flex flex-row items-center space-x-4 justify-between  p-6 pb-4"> <div class="flex gap-5 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-500"> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path> </svg> <h3 class="text-xl font-semibold text-gray-800"> ${p.nombreProyecto} </h3> <p class="text-sm text-gray-500 italic">${p.observacion}</p> </div> <span${addAttribute(`ml-auto inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${p.estado ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`, "class")}> ${p.estado ? "Activo" : "Inactivo"} </span> </header> <div class="p-6 pt-0"> ${p.detalles.length > 0 ? renderTemplate`<div class="overflow-x-auto"> <table class="min-w-full text-sm border-collapse"> <thead class="bg-gray-50"> <tr> <th class="py-2 px-3 text-left font-medium text-gray-600 w-[50px]">
#
</th> <th class="py-2 px-3 text-left font-medium text-gray-600">
Característica
</th> <th class="py-2 px-3 text-left font-medium text-gray-600">
Observación
</th> <th class="py-2 px-3 text-left font-medium text-gray-600">
Estado
</th> </tr> </thead> <tbody> ${p.detalles.map(
    (d, idx) => renderTemplate`<tr class="border-b border-gray-200 last:border-0"> <td class="py-2 px-3 font-medium">${idx + 1}</td> <td class="py-2 px-3"> ${d.caracteristica.titulo} </td> <td class="py-2 px-3 text-gray-500"> ${d.observacion ?? "-"} </td> <td class="py-2 px-3"> <span${addAttribute(`inline-block px-3 py-1 rounded-full text-xs font-medium ${d.estado === 1 ? "bg-gray-100 text-gray-800" : d.estado === 2 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`, "class")}> ${d.estado === 1 ? "Por hacer" : d.estado === 2 ? "En progreso" : "Completado"} </span> </td> </tr>`
  )} </tbody> </table> </div>` : renderTemplate`<p class="text-gray-500 italic text-sm">
No hay detalles registrados para este proyecto.
</p>`} </div> </div>`));
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/proyectos-clientes-detalles.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/proyectos-clientes-detalles.astro";
const $$url = "/proyectos-clientes-detalles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProyectosClientesDetalles,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
