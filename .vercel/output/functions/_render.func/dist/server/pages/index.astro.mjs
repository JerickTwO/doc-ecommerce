/* empty css                                            */
import { a as createComponent, m as maybeRenderHead, e as renderTemplate, c as createAstro, d as renderComponent, g as renderScript } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-5xl md:text-6xl font-bold mb-6">Perseo Ecommerce</h1> <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
Plataforma de comercio electrónico moderna, escalable y fácil de usar.
      Construye tu tienda online con las mejores prácticas y tecnologías
      actuales.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <a href="/caracteristicas" class="hover-lift-alt border-2 px-8 py-4 rounded-lg font-semibold">
Ver Detalles
</a> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto"> <div class="text-center"> <div class="text-3xl font-bold">10+</div> <div class="text-blue-200">Componentes</div> </div> <div class="text-center"> <div class="text-3xl font-bold">100%</div> <div class="text-blue-200">Sincronizado</div> </div> <div class="text-center"> <div class="text-3xl font-bold">24/7</div> <div class="text-blue-200">Soporte</div> </div> </div> </div> </section>`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/components/Hero.astro", void 0);

const $$Astro = createAstro("https://docs.perseo.com");
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white h-full p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"> <div class="text-3xl mb-4">${icon}</div> <h3 class="text-xl font-semibold text-gray-900 mb-2  cursor-text">${title}</h3> <p class="text-gray-600 cursor-text">${description}</p> </div>`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/components/FeatureCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Perseo Ecommerce - Documentaci\xF3n", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<section class="py-16 bg-gray-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-12 animate-on-scroll" data-animation="fade-up" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-astro-cid-j7pv25f6>
Características Principales
</h2> <p class="text-lg text-gray-600 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
El Ecommerce de Perseo es una plataforma de completa diseñada para
          ofrecer la mejor experiencia tanto para desarrolladores como para
          usuarios finales.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> <div class="animate-on-scroll scroll-cards" data-animation="slide-up" data-delay="100" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Gesti\xF3n de Productos", "description": "Soporte para productos simples, configurables y virtuales.", "icon": "\u{1F680}", "data-astro-cid-j7pv25f6": true })} </div> <div class="animate-on-scroll scroll-cards" data-animation="slide-up" data-delay="200" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Gesti\xF3n de Inventario", "description": "Control avanzado de inventario y stock.", "icon": "\u{1F4CA}", "data-astro-cid-j7pv25f6": true })} </div> <div class="animate-on-scroll scroll-cards" data-animation="slide-up" data-delay="300" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Sistema de Roles y Permisos", "description": "Control de acceso para diferentes usuarios.", "icon": "\u{1F6D2}", "data-astro-cid-j7pv25f6": true })} </div> <div class="animate-on-scroll scroll-cards" data-animation="slide-up" data-delay="400" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "SEO Integrado", "description": "Herramientas para optimizaci\xF3n en motores de b\xFAsqueda.", "icon": "\u{1F465}", "data-astro-cid-j7pv25f6": true })} </div> <div class="animate-on-scroll scroll-cards" data-animation="slide-up" data-delay="500" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Soporte Multiling\xFCe y Multimoneda", "description": "Vende en diferentes idiomas y monedas.", "icon": "\u{1F4B3}", "data-astro-cid-j7pv25f6": true })} </div> <div class="animate-on-scroll scroll-cards" data-animation="slide-up" data-delay="600" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Extensible", "description": "Gran cantidad de extensiones y personalizaciones disponibles.", "icon": "\u{1F4F1}", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section>  ` })}  ${renderScript($$result, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
