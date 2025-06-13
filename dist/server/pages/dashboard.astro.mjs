/* empty css                               */
import { c as createAstro, a as createComponent, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BW4uXlO9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_vEx9IISw.mjs';
import { v as verifyToken } from '../chunks/auth_DKvyb8jb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://docs.perseo.com");
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const token = Astro2.cookies.get("auth-token")?.value;
  const user = token ? verifyToken(token) : null;
  if (!user) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard - Perseo Ecommerce" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="min-h-screen bg-gray-100"> <!-- Header --> <header class="bg-white shadow"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-6"> <div class="flex items-center"> <h1 class="text-3xl font-bold text-gray-900">
Dashboard
</h1> </div> <nav class="flex items-center space-x-4"> <div class="flex items-center space-x-2"> <div class="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center"> <span class="text-sm font-medium text-white"> ${user.username.charAt(0).toUpperCase()} </span> </div> <div class="hidden sm:block"> <p class="text-sm font-medium text-gray-900"> ${user.username} </p> <p class="text-xs text-gray-500 capitalize"> ${user.role} </p> </div> </div> <button id="logoutBtn" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200">
Cerrar Sesión
</button> </nav> </div> </div> </header> <!-- Main Content --> <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> <!-- Welcome Message --> <div class="px-4 py-6 sm:px-0"> <div class="bg-white overflow-hidden shadow rounded-lg"> <div class="px-4 py-5 sm:p-6"> <h2 class="text-lg font-medium text-gray-900 mb-2">
¡Bienvenido, ${user.username}! 👋
</h2> <p class="text-gray-600">
Has iniciado sesión exitosamente en el sistema de
                            Perseo Ecommerce.
</p> </div> </div> </div> <!-- User Info Cards --> <div class="px-4 py-6 sm:px-0"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <!-- User Info Card --> <div class="bg-white overflow-hidden shadow rounded-lg"> <div class="p-5"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
Información Personal
</dt> <dd class="text-lg font-medium text-gray-900"> ${user.email} </dd> </dl> </div> </div> </div> </div> <!-- Role Card --> <div class="bg-white overflow-hidden shadow rounded-lg"> <div class="p-5"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
Rol del Usuario
</dt> <dd class="text-lg font-medium text-gray-900 capitalize"> ${user.role === "admin" ? "Administrador" : "Usuario"} </dd> </dl> </div> </div> </div> </div> <!-- ID Card --> <div class="bg-white overflow-hidden shadow rounded-lg"> <div class="p-5"> <div class="flex items-center"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
ID de Usuario
</dt> <dd class="text-lg font-medium text-gray-900">
#${user.id} </dd> </dl> </div> </div> </div> </div> </div> </div> <!-- Actions Section --> <div class="px-4 py-6 sm:px-0"> <div class="bg-white shadow rounded-lg"> <div class="px-4 py-5 sm:p-6"> <h3 class="text-lg font-medium text-gray-900 mb-4">
Acciones Disponibles
</h3> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> <!-- <a
                                href="/profile"
                                class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <svg
                                    class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    ></path>
                                </svg>
                                Ver Perfil
                            </a> --> <!-- {
                                user.role === "admin" && (
                                    <a
                                        href="/admin"
                                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        <svg
                                            class="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        Panel Admin
                                    </a>
                                )
                            } --> <a href="/despliegue" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg>
Ver Información de Despliegue
</a> </div> </div> </div> </div> </main> </div> ` })} ${renderScript($$result, "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/jeric/DEV/AstroJS/doc-ecommerce/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
