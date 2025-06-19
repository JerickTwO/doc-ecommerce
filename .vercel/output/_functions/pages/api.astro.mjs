/* empty css                                            */
import { c as createAstro, a as createComponent, m as maybeRenderHead, f as addAttribute, e as renderTemplate, d as renderComponent } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_Dex90_CJ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://docs.perseo.com");
const $$ApiEndpoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ApiEndpoint;
  const { method, endpoint, title, description, parameters, requestBody, response } = Astro2.props;
  const methodColors = {
    GET: "bg-green-100 text-green-800",
    POST: "bg-blue-100 text-blue-800",
    PUT: "bg-yellow-100 text-yellow-800",
    DELETE: "bg-red-100 text-red-800"
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-6"> <div class="p-6 border-b border-gray-200"> <div class="flex items-center gap-3 mb-2"> <span${addAttribute(`px-2 py-1 rounded text-xs font-semibold ${methodColors[method]}`, "class")}> ${method} </span> <code class="text-lg font-mono text-gray-800">${endpoint}</code> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">${title}</h3> <p class="text-gray-600">${description}</p> </div> <div class="p-6 space-y-6"> ${parameters && parameters.length > 0 && renderTemplate`<div> <h4 class="text-lg font-semibold mb-3">Parámetros</h4> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th> <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th> <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${parameters.map((param) => renderTemplate`<tr> <td class="px-4 py-2 text-sm font-mono text-gray-900">${param.name}</td> <td class="px-4 py-2 text-sm text-gray-600">${param.type}</td> <td class="px-4 py-2 text-sm text-gray-600">${param.description}</td> </tr>`)} </tbody> </table> </div> </div>`} ${requestBody && renderTemplate`<div> <h4 class="text-lg font-semibold mb-3">Request Body</h4> <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>${requestBody}</code></pre> </div>`} <div> <h4 class="text-lg font-semibold mb-3">Respuesta</h4> <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>${response}</code></pre> </div> </div> </div>`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/components/ApiEndpoint.astro", void 0);

const $$Api = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "API Reference - Perseo Ecommerce" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen bg-white"> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "currentPage": "api" })} <main class="flex-1 py-8 px-16 bg-gray-50 antialiased"> <div class="mx-auto"> <h1 class="text-3xl font-bold text-gray-900 mb-8">API Reference</h1> <div class="bg-white rounded-lg shadow-sm p-8 mb-8"> <h2 class="text-2xl font-semibold mb-4">Autenticación</h2> <p class="text-gray-700 mb-4">
Todas las rutas protegidas requieren un token JWT en el header
            Authorization:
</p> <code class="block bg-gray-100 p-4 rounded-lg">
Authorization: Bearer ${`{token}`} </code> </div> <div class="space-y-8"> <section> <h2 class="text-3xl font-bold text-gray-900 mb-6">Productos</h2> ${renderComponent($$result2, "ApiEndpoint", $$ApiEndpoint, { "method": "GET", "endpoint": "/api/products", "title": "Obtener todos los productos", "description": "Retorna una lista paginada de todos los productos disponibles", "parameters": [
    {
      name: "page",
      type: "number",
      description: "N\xFAmero de p\xE1gina (default: 1)"
    },
    {
      name: "limit",
      type: "number",
      description: "Productos por p\xE1gina (default: 20)"
    },
    {
      name: "category",
      type: "string",
      description: "Filtrar por categor\xEDa"
    },
    {
      name: "search",
      type: "string",
      description: "Buscar por nombre o descripci\xF3n"
    }
  ], "response": `{
              "products": 
                [
                  {
                    "id": "64f8a1b2c3d4e5f6a7b8c9d0",
                    "name": "Smartphone Galaxy S23",
                    "description": "\xDAltimo modelo con c\xE1mara de 108MP",
                    "price": 899.99,
                    "category": "electronics",
                    "stock": 50,
                    "images": ["image1.jpg", "image2.jpg"],
                    "createdAt": "2023-09-06T10:30:00Z"
                  }
                ],
                "pagination": {
                  "page": 1,
                  "limit": 20,
                  "total": 150,
                  "pages": 8
                }
              }` })} ${renderComponent($$result2, "ApiEndpoint", $$ApiEndpoint, { "method": "POST", "endpoint": "/api/products", "title": "Crear nuevo producto", "description": "Crea un nuevo producto (requiere autenticaci\xF3n de admin)", "requestBody": `{
  "name": "Nuevo Producto",
  "description": "Descripci\xF3n del producto",
  "price": 299.99,
  "category": "electronics",
  "stock": 100,
  "images": ["image1.jpg"]
}`, "response": `{
  "success": true,
  "product": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "name": "Nuevo Producto",
    "description": "Descripci\xF3n del producto",
    "price": 299.99,
    "category": "electronics",
    "stock": 100,
    "images": ["image1.jpg"],
    "createdAt": "2023-09-06T11:00:00Z"
  }
}` })} </section> <section> <h2 class="text-3xl font-bold text-gray-900 mb-6">
Carrito de Compras
</h2> ${renderComponent($$result2, "ApiEndpoint", $$ApiEndpoint, { "method": "GET", "endpoint": "/api/cart", "title": "Obtener carrito del usuario", "description": "Retorna el carrito actual del usuario autenticado", "response": `{
  "cart": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d2",
    "userId": "64f8a1b2c3d4e5f6a7b8c9d3",
    "items": [
      {
        "productId": "64f8a1b2c3d4e5f6a7b8c9d0",
        "quantity": 2,
        "price": 899.99,
        "product": {
          "name": "Smartphone Galaxy S23",
          "image": "image1.jpg"
        }
      }
    ],
    "total": 1799.98,
    "updatedAt": "2023-09-06T12:00:00Z"
  }
}` })} ${renderComponent($$result2, "ApiEndpoint", $$ApiEndpoint, { "method": "POST", "endpoint": "/api/cart/add", "title": "Agregar producto al carrito", "description": "Agrega un producto al carrito del usuario", "requestBody": `{
  "productId": "64f8a1b2c3d4e5f6a7b8c9d0",
  "quantity": 1
}`, "response": `{
  "success": true,
  "message": "Producto agregado al carrito",
  "cart": {
    "total": 1799.98,
    "itemCount": 3
  }
}` })} </section> <section> <h2 class="text-3xl font-bold text-gray-900 mb-6">Pedidos</h2> ${renderComponent($$result2, "ApiEndpoint", $$ApiEndpoint, { "method": "POST", "endpoint": "/api/orders", "title": "Crear nuevo pedido", "description": "Crea un nuevo pedido con los productos del carrito", "requestBody": `{
  "shippingAddress": {
    "street": "Calle Principal 123",
    "city": "Madrid",
    "postalCode": "28001",
    "country": "Espa\xF1a"
  },
  "paymentMethod": "stripe",
  "paymentToken": "tok_visa"
}`, "response": `{
  "success": true,
  "order": {
    "id": "64f8a1b2c3d4e5f6a7b8c9d4",
    "orderNumber": "ORD-2023-001",
    "status": "pending",
    "total": 1799.98,
    "items": [...],
    "shippingAddress": {...},
    "createdAt": "2023-09-06T13:00:00Z"
  }
}` })} </section> </div> </div> </main> </div> ` })}`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/api.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/api.astro";
const $$url = "/api";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Api,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
