/* empty css                               */
import { a as createComponent, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BW4uXlO9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_vEx9IISw.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_Cxi6MWsq.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_1jyHsYeB.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const imageRequirements = new Proxy({"src":"/_astro/requirements.CaWAymSL.png","width":1012,"height":577,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/assets/requirements.png";
							}
							
							return target[name];
						}
					});

const twoImageRequirements = new Proxy({"src":"/_astro/requirementsTwo.DoiBOWSS.png","width":905,"height":469,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/assets/requirementsTwo.png";
							}
							
							return target[name];
						}
					});

const $$Requisitos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Requisitos - Perseo Ecommerce", "data-astro-cid-keccc434": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen bg-white" data-astro-cid-keccc434> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "currentPage": "requisitos", "data-astro-cid-keccc434": true })} <main class="flex-1 py-8 px-16 bg-gray-50 antialiased" data-astro-cid-keccc434> <div class="mx-auto flex flex-col gap-6" data-astro-cid-keccc434> <h1 class="text-3xl font-bold text-gray-900" data-astro-cid-keccc434>Requisitos</h1> <!-- Proceso de Requisitos --> <div class="bg-white rounded-lg shadow-sm p-8" data-astro-cid-keccc434> <div class="space-y-8" data-astro-cid-keccc434> <div class="flex items-start space-x-4" data-astro-cid-keccc434> <div class="flex-1" data-astro-cid-keccc434> <h3 class="text-xl font-semibold text-gray-900 mb-3" data-astro-cid-keccc434>
Productos parametrizados
</h3> <p class="text-gray-700 mb-4" data-astro-cid-keccc434>
Es decir debe tener los productos
                                    parametrizados con imágenes, categorías o
                                    líneas, precios y ficha técnica para una
                                    correcta visualización en el ecommerce.
</p> <div class="p-4" data-astro-cid-keccc434> <h4 class="font-semibold mb-2" data-astro-cid-keccc434>
Ejemplo de parametrización de producto:
</h4> ${renderComponent($$result2, "Image", $$Image, { "src": imageRequirements, "class": "w-full max-w-[700px] border-2 border-yellow-600 rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer zoom-image", "alt": "imagen de ejemplo de requerimientos.", "data-zoom-src": imageRequirements.src, "data-astro-cid-keccc434": true })} </div> <div class="p-4" data-astro-cid-keccc434> <h4 class="font-semibold mb-2" data-astro-cid-keccc434>
Ejemplo de parametrización de ficha
                                        técnica:
</h4> ${renderComponent($$result2, "Image", $$Image, { "src": twoImageRequirements, "class": "w-full max-w-[700px] border-2 border-yellow-600 rounded-xl hover:scale-105 transition-transform duration-500 cursor-pointer zoom-image", "alt": "segunda imagen de ejemplo de requerimientos.", "data-zoom-src": twoImageRequirements.src, "data-astro-cid-keccc434": true })} </div> </div> </div> </div> </div> <div class="grid grid-cols-2 gap-x-6 gap-y-6" data-astro-cid-keccc434> <div class="col-span-1 bg-white rounded-lg shadow-sm p-8" data-astro-cid-keccc434> <h3 class="text-xl font-semibold text-gray-900 mb-3" data-astro-cid-keccc434>
Imagenes
</h3> <p class="text-gray-700 mb-4" data-astro-cid-keccc434>
Los productos deben tener una configuración para las
                            imágenes, puede ser fondo blanco<span class="font-bold" data-astro-cid-keccc434>
o sin fondo
</span> , esto es discutido de acuerdo a la personalización
                            de la página. Y la <span class="font-bold" data-astro-cid-keccc434>
resolución mínima
</span> permitida es
<span class="font-bold" data-astro-cid-keccc434> 800x600 </span>
en formato webp de preferencia
</p> </div> <div class="col-span-1 bg-white rounded-lg shadow-sm p-8" data-astro-cid-keccc434> <h3 class="text-xl font-semibold text-gray-900 mb-3" data-astro-cid-keccc434>
Nombres de Producto
</h3> <p class="text-gray-700 mb-4" data-astro-cid-keccc434>
Los productos deben tener nombres cortos no tan
                            extensos, <span class="font-bold" data-astro-cid-keccc434>
máximo 58 caracteres
</span> incluyendo espacios y signos de puntuación.
</p> </div> <div class="col-span-2 bg-white rounded-lg shadow-sm p-8" data-astro-cid-keccc434> <h3 class="text-xl font-semibold text-gray-900 mb-3" data-astro-cid-keccc434>
Configuración de categorías
</h3> <ul class="space-y-1" data-astro-cid-keccc434> <li class="text-gray-700" data-astro-cid-keccc434>
• Deben ser nombres claros y precisos, además de
                                no ser tan extensos y de preferencia que tengan
<span class="font-bold" data-astro-cid-keccc434> 2 a 3 palabras</span> </li> <li class="text-gray-700" data-astro-cid-keccc434>
• La imagen que represente la categoría debe ser
                                mínimo en <span class="font-bold" data-astro-cid-keccc434>800x600</span> </li> <h3 class="font-semibold text-md text-gray-900 mb-3" data-astro-cid-keccc434>
Adicionales:
</h3> <li class="text-gray-700" data-astro-cid-keccc434>
• Debe contar con un logo de empresa, esto es
                                necesario para desarrollar los recursos de la
                                página
</li> <li class="text-gray-700" data-astro-cid-keccc434>
• En caso de ser Perseo PC debe contar con IP
                                pública apuntada al servidor local, además de
                                tener el
<span class="font-bold" data-astro-cid-keccc434> API KEY </span>
previamente instalada por el técnico a cargo.
</li> </ul> </div> </div> </div> <!-- Modal de Zoom --> <div id="zoomModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-20 opacity-0 invisible transition-all duration-300 ease-in-out touch-none" data-astro-cid-keccc434> <div class=" w-full h-full md:max-w-[90vw] md:max-h-[90vh] md:w-auto md:h-auto p-2 md:p-4 flex items-center justify-center" data-astro-cid-keccc434> <!-- Botón de cerrar - Mejorado para móviles --> <button id="closeModal" class="absolute top-4 right-4 md:top-2 md:right-2 bg-white rounded-full w-12 h-12 md:w-10 md:h-10 flex items-center justify-center text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 z-10 shadow-lg touch-manipulation" aria-label="Cerrar imagen" data-astro-cid-keccc434> <svg class="w-6 h-6 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-keccc434> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-keccc434></path> </svg> </button> <!-- Imagen ampliada --> <img id="zoomedImage" src="" alt="" class="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl select-none" data-astro-cid-keccc434> </div> </div> </main> </div> ` })}  ${renderScript($$result, "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/pages/requisitos.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/pages/requisitos.astro", void 0);

const $$file = "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/pages/requisitos.astro";
const $$url = "/requisitos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Requisitos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
