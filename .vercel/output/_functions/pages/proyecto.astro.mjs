/* empty css                                            */
import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://docs.perseo.com");
const prerender = false;
const $$Proyecto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyecto;
  const cookies = Astro2.cookies;
  console.log("Cookies:", cookies.get("auth-token"));
  const res = await fetch("http://localhost:4321/api/proyectos-cliente", {
    headers: { cookie: cookies.get("auth-token")?.value || "" }
    // Usa el token almacenado
  });
  console.log("API Response:", res);
  if (!res.ok) {
    const errorText = await res.text();
    console.error(errorText);
    console.error("Error al obtener los proyectos:", errorText);
  } else {
    const proyectos2 = await res.json();
    console.log("Proyectos:", proyectos2);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate`${proyectos?.map((p) => renderTemplate`${maybeRenderHead()}<section${addAttribute(p.id, "key")}> <h2>${p.nombre_proyecto}</h2> <table> ${p.detalles.map((d) => renderTemplate`<tr${addAttribute(d.id, "key")}> <td>${d.titulo}</td> <td>${d.descripcion}</td> <td> <input type="checkbox"${addAttribute(d.estado, "checked")} disabled> </td> </tr>`)} </table> </section>`)}` })}`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/proyecto.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/proyecto.astro";
const $$url = "/proyecto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Proyecto,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
