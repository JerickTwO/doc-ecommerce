/* empty css                                            */
import { c as createAstro, a as createComponent, d as renderComponent, e as renderTemplate, f as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://docs.perseo.com");
const $$Example = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Example;
  const res = await fetch(Astro2.url.origin + "/api/naruto");
  const json = await res.json();
  console.log("\u2705 Datos crudos de /api/naruto:", json);
  if (!Array.isArray(json)) {
    throw new Error(
      "La respuesta no es un arreglo. Recibido: " + JSON.stringify(json)
    );
  }
  const narutos = json;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CRUD Naruto" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", "<h1>Personajes</h1>  <ul> ", ' </ul>  <h2>Nuevo personaje</h2> <form id="createForm"> <input name="nombre" placeholder="Nombre" required> <input name="clan" placeholder="Clan" required> <input name="edad" type="number" placeholder="Edad" required> <button>Crear</button> </form> <script type="module">\n    // Crear\n    document\n      .querySelector("#createForm")\n      .addEventListener("submit", async (e) => {\n        e.preventDefault();\n        const form = e.target;\n        const data = Object.fromEntries(new FormData(form));\n        await fetch("/api/naruto", {\n          method: "POST",\n          headers: { "Content-Type": "application/json" },\n          body: JSON.stringify({ ...data, edad: Number(data.edad) }),\n        });\n        location.reload(); // recarga lista r\xE1pida\n      });\n\n    // Eliminar\n    window.deleteNaruto = async (id) => {\n      await fetch("/api/naruto/" + id, { method: "DELETE" });\n      location.reload();\n    };\n  <\/script> '])), maybeRenderHead(), narutos.map((n) => renderTemplate`<a${addAttribute(`/${n.id}`, "href")}> <strong>${n.nombre}</strong> – clan ${n.clan} – ${n.edad} años
<button${addAttribute(`deleteNaruto(${n.id})`, "onclick")}>🗑</button> </a>`)) })}`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/example.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/example.astro";
const $$url = "/example";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Example,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
