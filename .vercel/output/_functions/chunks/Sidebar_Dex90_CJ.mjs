import { c as createAstro, a as createComponent, e as renderTemplate, f as addAttribute, m as maybeRenderHead } from './astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://docs.perseo.com");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const rawToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  let isAdmin = false;
  if (rawToken) {
    try {
      const payload = JSON.parse(atob(rawToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
      isAdmin = payload.role === "admin";
    } catch {
    }
  }
  const { currentPage } = Astro2.props;
  const menuItems = [
    { href: "/", label: "Inicio", id: "home" },
    { href: "/caracteristicas", label: "Caracter\xEDsticas", id: "caracteristicas" },
    { href: "/implementacion", label: "Implementaci\xF3n", id: "implementacion" },
    { href: "/requisitos", label: "Requisitos", id: "requisitos" },
    isAdmin ? { href: "/despliegue", label: "Despliegue", id: "despliegue" } : { href: "/login-cliente", label: "Mis Proyectos", id: "login" }
  ];
  return renderTemplate(_a || (_a = __template(["<!-- resto del marcado id\xE9ntico -->", '<button id="btnToggleSidebar" class="md:hidden fixed top-4 left-4 p-2 bg-gray-100 rounded z-20" style="padding: 4px 10px;" aria-label="Toggle sidebar"> <span id="toggle-icon">\u2630</span> </button> <aside id="sidebar" class="h-full fixed left-0 top-16 w-64 bg-white border-r border-gray-200 overflow-y-auto\n  transform -translate-x-full transition-transform duration-300 ease-in-out\n  md:translate-x-0 md:static md:block"> <nav class="p-6"> <div class="h-full"> ', ' </div> </nav> </aside> <script type="module">\n  /* El c\xF3digo para el bot\xF3n hamburguesa permanece igual */\n  const $ = (sel) => document.getElementById(sel);\n  const btn = $("btnToggleSidebar");\n  const sidebar = $("sidebar");\n  const icon = $("toggle-icon");\n\n  btn?.addEventListener("click", () => {\n    sidebar?.classList.toggle("-translate-x-full");\n    icon.textContent = icon.textContent === "\u2630" ? "\u2716" : "\u2630";\n  });\n<\/script>'])), maybeRenderHead(), menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"}`, "class")}> ${item.label} </a>`));
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/components/Sidebar.astro", void 0);

export { $$Sidebar as $ };
