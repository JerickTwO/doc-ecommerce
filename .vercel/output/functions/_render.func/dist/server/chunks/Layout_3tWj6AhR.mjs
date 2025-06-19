import { c as createAstro, a as createComponent, r as renderHead, b as renderSlot, d as renderComponent, e as renderTemplate } from './astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Footer } from './Footer_puQ1_iw9.mjs';
import { g as getAllClientes } from './clientStore_BLAaA3MI.mjs';
/* empty css                       */

const $$Astro = createAstro("https://docs.perseo.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  await getAllClientes();
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Documentación oficial de Perseo Ecommerce"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="../assets/favicon.ico"><title>${title}</title>${renderHead()}</head> <body class="bg-gray-50"> <nav class="bg-white border-b border-gray-200 fixed w-full z-10 top-0"> <div class="mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="flex items-center space-x-2 ml-10 md:ml-0"> <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"> <span class="text-white font-bold text-lg">P</span> </div> <span class="text-xl font-bold text-gray-900">Ecommerce - Perseo</span> </a> </div> <div class="hidden md:flex items-center space-x-4"> <a href="/login" class="text-gray-900 hover:text-blue-600 border border-gray-900 hover:border-blue-600 px-3 py-2 rounded-md text-sm font-medium">
Login
</a> <a href="https://ecommerce-demo.com" target="_blank" class="bg-blue-600 border-blue-600 hover:border-gray-800 border text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
Demo
</a> </div> </div> </div> </nav> <div class="pt-16"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
