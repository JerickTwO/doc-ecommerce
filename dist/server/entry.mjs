import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_-kAOS10f.mjs';
import { manifest } from './manifest_CGce-_Yu.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/debug.astro.mjs');
const _page2 = () => import('./pages/api/auth/login.astro.mjs');
const _page3 = () => import('./pages/api/auth/logout.astro.mjs');
const _page4 = () => import('./pages/api/auth/register.astro.mjs');
const _page5 = () => import('./pages/api.astro.mjs');
const _page6 = () => import('./pages/caracteristicas.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/despliegue.astro.mjs');
const _page9 = () => import('./pages/implementacion.astro.mjs');
const _page10 = () => import('./pages/login.astro.mjs');
const _page11 = () => import('./pages/registor.astro.mjs');
const _page12 = () => import('./pages/requisitos.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/auth/debug.ts", _page1],
    ["src/pages/api/auth/login.ts", _page2],
    ["src/pages/api/auth/logout.ts", _page3],
    ["src/pages/api/auth/register.ts", _page4],
    ["src/pages/api.astro", _page5],
    ["src/pages/caracteristicas.astro", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/despliegue.astro", _page8],
    ["src/pages/implementacion.astro", _page9],
    ["src/pages/login.astro", _page10],
    ["src/pages/registor.astro", _page11],
    ["src/pages/requisitos.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "production",
    "client": "file:///C:/Users/jeric/DEV/AstroJS/doc-ecommerce/dist/client/",
    "server": "file:///C:/Users/jeric/DEV/AstroJS/doc-ecommerce/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
