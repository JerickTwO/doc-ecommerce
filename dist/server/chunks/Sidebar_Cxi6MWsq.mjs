import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderScript, b as addAttribute, r as renderTemplate } from './astro/server_BW4uXlO9.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://docs.perseo.com");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { currentPage } = Astro2.props;
  const menuItems = [
    { href: "/", label: "Inicio", id: "home" },
    { href: "/caracteristicas", label: "Caracter\xEDsticas", id: "caracteristicas" },
    { href: "/implementacion", label: "Implementaci\xF3n", id: "implementacion" },
    { href: "/requisitos", label: "Requisitos", id: "requisitos" },
    { href: "/despliegue", label: "Despliegue", id: "despliegue" }
  ];
  return renderTemplate`${maybeRenderHead()}<button id="btnToggleSidebar" class="md:hidden fixed top-4 left-4 p-2 bg-gray-100 rounded z-20" style="padding: 4px 10px;" aria-label="Toggle sidebar"> <span id="toggle-icon">☰</span> </button> <aside id="sidebar" class="
  h-full fixed left-0 top-16 w-64 bg-white border-r border-gray-200 overflow-y-auto
  transform -translate-x-full transition-transform duration-300 ease-in-out
  md:translate-x-0 md:static md:block"> <nav class="p-6"> <div class="h-full"> ${menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`, "class")}> ${item.label} </a>`)} </div> <!-- <div class="mt-8 pt-8 border-t border-gray-200">
      <h3
        class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3"
      >
        Enlaces Útiles
      </h3>
      <div class="space-y-1">
        <a
          href="https://ecommerce-demo.com"
          target="_blank"
          class="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
          >Demo en Vivo</a
        >
      </div>
    </div> --> </nav> </aside> ${renderScript($$result, "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/components/Sidebar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/components/Sidebar.astro", void 0);

export { $$Sidebar as $ };
