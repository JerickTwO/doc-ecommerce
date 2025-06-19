/* empty css                                            */
import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_Dex90_CJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Caracteristicas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Caracter\xEDsticas - Perseo Ecommerce" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen bg-white"> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "currentPage": "caracteristicas" })} <main class="flex-1 py-8 px-16 bg-gray-50 antialiased"> <div class="mx-auto"> <h1 class="text-3xl font-bold text-gray-900 mb-8">Características</h1> <!-- Proceso de Implementación --> <div class="bg-white rounded-lg shadow-sm p-8 mb-8"> <div class="flex-1"> <h3 class="text-2xl font-semibold mb-2">Personalización</h3> <div class="p-4"> <h3 class="font-semibold mb-2">
Características de la sincronización:
</h3> <ul class="space-y-1"> <li>• Configuración de colores y logotipo corporativo</li> <li>
• Adaptación de la estructura de categorías de productos
</li> <li>
• Personalización de campos de productos según tu industria
</li> <li>• Configuración de políticas de venta y términos de uso</li> </ul> </div> </div> <div class="flex items-start space-x-4"> <div class="flex-1"> <div class="rounded-lg p-4"> <h3 class="font-semibold mb-2">
Características de la sincronización:
</h3> <ul class="space-y-1"> <li>• Importación automática de catálogo de productos</li> <li>• Actualización de inventarios en tiempo real</li> <li>• Sincronización de precios y promociones</li> <li>• Gestión automática de stock y disponibilidad</li> <li>• Integración de códigos de barras y SKUs</li> </ul> </div> </div> </div> </div> <div class="bg-white rounded-xl shadow-sm p-8 mb-8"> <div class="flex items-start space-x-4"> <div class="flex-1"> <h3 class="text-xl font-semibold text-gray-900 mb-3">
Configuración de Pagos y Envíos
</h3> <div class="px-4 mb-4"> <h4 class="font-semibold mb-2">Métodos de Pago Disponibles:</h4> <ul class="space-y-1"> <li>• Pago contra entrega</li> <li>• Pagos con PagoPlux y DataFast</li> </ul> </div> <div class="px-4"> <h4 class="font-semibold mb-2">Opciones de Envío:</h4> <ul class="space-y-1"> <li>• Envío a domicilio con empresas courier</li> <li>• Retiro en punto de venta</li> <li>• Envío express y programado</li> </ul> </div> </div> </div> </div> </div> <!-- Call to Action --> <!-- <div
        class="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 rounded-lg shadow-sm p-8 text-center text-white"
        >
          <h3 class="text-2xl font-semibold mb-4">¿Listo para comenzar?</h3>
          <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para implementar tu tienda
            online de manera rápida y eficiente. Contacta con nosotros para
            comenzar el proceso de implementación.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Solicitar Implementación
            </button>
            <button
              class="border-2 border-white font-semibold py-3 px-8 rounded-lg hover-lift-alt"
            >
              Agendar Consulta
            </button>
          </div>
        </div> --> </main> </div> ` })}`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/caracteristicas.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/caracteristicas.astro";
const $$url = "/caracteristicas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Caracteristicas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
