/* empty css                                            */
import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead, g as renderScript, f as addAttribute } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
import { p as pool } from '../chunks/db_Kpg-XkaI.mjs';
export { renderers } from '../renderers.mjs';

const $$CaracteristicasProyecto = createComponent(async ($$result, $$props, $$slots) => {
  const caracteristicas = await pool.query(
    `SELECT id, titulo, descripcion
     FROM caracteristicas_ecommerce
   WHERE estado = 1 AND es_general = 1
   ORDER BY titulo`
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gesti\xF3n de Caracter\xEDsticas" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50"> <div class="max-w-4xl mx-auto px-6 py-8"> <!-- Page Header --> <div class="mb-8"> <a href="/dashboard" class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-4"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg>
Volver al Dashboard
</a> <h1 class="text-3xl font-light text-gray-900 tracking-tight mb-2">
Gestión de Características
</h1> <p class="text-sm text-gray-600">
Administra las características globales del sistema
</p> </div> <!-- Create Form Card --> <div class="bg-white border border-gray-200 rounded-lg mb-8"> <!-- Form Header --> <div class="px-6 py-4 border-b border-gray-200"> <div class="flex items-center gap-3"> <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> <h3 class="text-lg font-medium text-gray-900">
Nueva Característica Global
</h3> </div> <p class="text-sm text-gray-600 mt-1">
Crea una nueva característica que estará disponible para todos los
            proyectos
</p> </div> <!-- Form Content --> <div class="p-6"> <form id="form-caract" class="space-y-6"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> <!-- Título --> <div> <label for="titulo" class="block text-sm font-medium text-gray-700 mb-2">
Título de la característica
</label> <input type="text" id="titulo" name="titulo" required class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" placeholder="Ej. Pasarela de pago"> </div> <!-- Descripción --> <div> <label for="descripcion" class="block text-sm font-medium text-gray-700 mb-2">
Descripción (opcional)
</label> <input type="text" id="descripcion" name="descripcion" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500" placeholder="Detalles adicionales..."> </div> </div> <!-- Botones --> <div class="flex gap-3 pt-2"> <button type="reset" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-500">
Limpiar
</button> <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500">
+ Crear Característica
</button> </div> </form> <!-- Mensaje de estado --> <div id="msg" class="mt-6 hidden"> <div class="p-3 rounded-md text-sm"> <span id="msg-text"></span> </div> </div> </div> </div> <!-- Characteristics List Card --> <div class="bg-white border border-gray-200 rounded-lg"> <!-- List Header --> <div class="px-6 py-4 border-b border-gray-200"> <div class="flex items-center justify-between"> <div class="flex items-center gap-3"> <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 0 012 2"></path> </svg> <h3 class="text-lg font-medium text-gray-900">
Características Globales
</h3> </div> <span class="text-sm text-gray-600"> ${caracteristicas.length} características registradas
</span> </div> </div> <!-- List Content --> <div class="p-6"> ${caracteristicas.length === 0 ? renderTemplate`<div class="text-center py-12"> <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 0 012 2"></path> </svg> <p class="text-gray-600 text-sm">
No hay características globales registradas
</p> </div>` : renderTemplate`<div id="lista-carac" class="space-y-3"> ${caracteristicas.map((c) => renderTemplate`<div${addAttribute(`carac-${c.id}`, "id")} class="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50"> <svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 0 012 2"></path> </svg> <div class="flex-1 min-w-0"> <h4 class="font-medium text-gray-900 mb-1">${c.titulo}</h4> ${c.descripcion && renderTemplate`<p class="text-sm text-gray-600">${c.descripcion}</p>`} </div> <div class="flex items-center gap-2 flex-shrink-0"> <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
Activo
</span> <button type="button" class="text-gray-400 hover:text-red-600 p-1" title="Eliminar característica"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button> </div> </div>`)} </div>`} </div> </div> </div> </div>  ${renderScript($$result2, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/caracteristicas-proyecto.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/caracteristicas-proyecto.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/caracteristicas-proyecto.astro";
const $$url = "/caracteristicas-proyecto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CaracteristicasProyecto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
