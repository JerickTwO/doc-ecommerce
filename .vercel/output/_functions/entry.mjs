import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D-Cks2nw.mjs';
import { manifest } from './manifest_DRYUsO8k.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/login.astro.mjs');
const _page2 = () => import('./pages/api/auth/login-cliente.astro.mjs');
const _page3 = () => import('./pages/api/auth/logout.astro.mjs');
const _page4 = () => import('./pages/api/auth/register.astro.mjs');
const _page5 = () => import('./pages/api/caracteristicas/_id_.astro.mjs');
const _page6 = () => import('./pages/api/caracteristicas.astro.mjs');
const _page7 = () => import('./pages/api/caracteristicas-global.astro.mjs');
const _page8 = () => import('./pages/api/clientes/_id_/proyectos.astro.mjs');
const _page9 = () => import('./pages/api/clientes/_id_.astro.mjs');
const _page10 = () => import('./pages/api/clientes.astro.mjs');
const _page11 = () => import('./pages/api/detalles/_id_/estado.astro.mjs');
const _page12 = () => import('./pages/api/detalles/_id_.astro.mjs');
const _page13 = () => import('./pages/api/detalles.astro.mjs');
const _page14 = () => import('./pages/api/proyectos/_proyectoid_/detalles.astro.mjs');
const _page15 = () => import('./pages/api/proyectos/_proyectoid_/toggle.astro.mjs');
const _page16 = () => import('./pages/api/proyectos/_id_.astro.mjs');
const _page17 = () => import('./pages/api/proyectos-clientes-detalles.astro.mjs');
const _page18 = () => import('./pages/api.astro.mjs');
const _page19 = () => import('./pages/caracteristicas.astro.mjs');
const _page20 = () => import('./pages/caracteristicas-proyecto.astro.mjs');
const _page21 = () => import('./pages/clientes/_id_/proyectos/_proyectoid_.astro.mjs');
const _page22 = () => import('./pages/clientes/_id_.astro.mjs');
const _page23 = () => import('./pages/clientes.astro.mjs');
const _page24 = () => import('./pages/dashboard.astro.mjs');
const _page25 = () => import('./pages/despliegue.astro.mjs');
const _page26 = () => import('./pages/example.astro.mjs');
const _page27 = () => import('./pages/implementacion.astro.mjs');
const _page28 = () => import('./pages/login.astro.mjs');
const _page29 = () => import('./pages/login-cliente.astro.mjs');
const _page30 = () => import('./pages/progresoproyecto.astro.mjs');
const _page31 = () => import('./pages/proyecto.astro.mjs');
const _page32 = () => import('./pages/proyectos-clientes-detalles.astro.mjs');
const _page33 = () => import('./pages/registor.astro.mjs');
const _page34 = () => import('./pages/requisitos.astro.mjs');
const _page35 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/login.ts", _page1],
    ["src/pages/api/auth/login-cliente.ts", _page2],
    ["src/pages/api/auth/logout.ts", _page3],
    ["src/pages/api/auth/register.ts", _page4],
    ["src/pages/api/caracteristicas/[id].ts", _page5],
    ["src/pages/api/caracteristicas/index.ts", _page6],
    ["src/pages/api/caracteristicas-global.ts", _page7],
    ["src/pages/api/clientes/[id]/proyectos.ts", _page8],
    ["src/pages/api/clientes/[id]/index.ts", _page9],
    ["src/pages/api/clientes/index.ts", _page10],
    ["src/pages/api/detalles/[id]/estado.ts", _page11],
    ["src/pages/api/detalles/[id]/index.ts", _page12],
    ["src/pages/api/detalles/index.ts", _page13],
    ["src/pages/api/proyectos/[proyectoId]/detalles.ts", _page14],
    ["src/pages/api/proyectos/[proyectoId]/toggle.ts", _page15],
    ["src/pages/api/proyectos/[id].ts", _page16],
    ["src/pages/api/proyectos-clientes-detalles.ts", _page17],
    ["src/pages/api.astro", _page18],
    ["src/pages/caracteristicas.astro", _page19],
    ["src/pages/caracteristicas-proyecto.astro", _page20],
    ["src/pages/clientes/[id]/proyectos/[proyectoId].astro", _page21],
    ["src/pages/clientes/[id]/index.astro", _page22],
    ["src/pages/clientes/index.astro", _page23],
    ["src/pages/dashboard.astro", _page24],
    ["src/pages/despliegue.astro", _page25],
    ["src/pages/example.astro", _page26],
    ["src/pages/implementacion.astro", _page27],
    ["src/pages/login.astro", _page28],
    ["src/pages/login-cliente.astro", _page29],
    ["src/pages/ProgresoProyecto.astro", _page30],
    ["src/pages/proyecto.astro", _page31],
    ["src/pages/proyectos-clientes-detalles.astro", _page32],
    ["src/pages/registor.astro", _page33],
    ["src/pages/requisitos.astro", _page34],
    ["src/pages/index.astro", _page35]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "f4292236-8a3e-459c-ab7f-74971c142a27",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
