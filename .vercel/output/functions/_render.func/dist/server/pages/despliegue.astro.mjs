/* empty css                                            */
import { a as createComponent, d as renderComponent, e as renderTemplate, m as maybeRenderHead, g as renderScript } from '../chunks/astro/server_BTInrGQy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3tWj6AhR.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_Dex90_CJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Despliegue = createComponent(($$result, $$props, $$slots) => {
  const text = "{REQUEST_FILENAME}";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Despliegue - Perseo Ecommerce" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen bg-white"> ${renderComponent($$result2, "Sidebar", $$Sidebar, { "currentPage": "despliegue" })} <main class="flex-1 py-8 px-16 bg-gray-50 antialiased"> <div class="mx-auto flex flex-col gap-6"> <h1 class="text-3xl font-bold text-gray-900">Despliegue</h1> <!-- Proceso de despliegue --> <div> <div class="space-y-8"> <div class="flex items-start space-x-4"> <div class="flex-1"> <div class="col-span-2 bg-white rounded-lg shadow-sm p-8"> <h3 class="text-xl font-semibold text-gray-900 mb-3">
Despliegue con github mediante api
</h3> <ul class="space-y-1 list-decimal list-inside"> <li class="text-gray-700">
Configurar el .env y colocar
<span class="font-bold">
IP o dominio</span> junto con el
<span class="font-bold"> API</span> </li> <li class="text-gray-700">
La imagen que represente la
                                            categoría debe ser mínimo en
<span class="font-bold">800x600</span> </li> <li class="text-gray-700">
Ejecutar por <span class="font-bold">SSH</span> </li> </ul> </div> </div> </div> <!-- Cuadro para código SSH --> <div class="bg-gray-100 p-6 rounded-lg shadow-sm"> <div class="flex items-center justify-between mb-4"> <h4 class="text-xl font-semibold text-gray-900">
Código SSH
</h4> <button class="copy-btn p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200" data-copy="ssh" title="Copiar código"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path> </svg> </button> </div> <div class="relative"> <pre class="bg-gray-800 text-white p-4 rounded-lg"><code># Comandos  para el despliegue
composer2 install
composer2 update
php artisan storage:link
php artisan optimize:clear</code></pre> </div> </div> <!-- Configuración de PHP --> <div class="bg-gray-100 p-6 rounded-lg shadow-sm"> <h4 class="text-xl font-semibold text-gray-900 mb-4">
Configuración PHP
</h4> <p class="text-gray-700"></p><h3 class="font-bold text-base">Extensiones requeridas:</h3> bcmath,
                                dom, fileinfo, gd, gmp, imagick, imap, mbstring,
                                mysqlnd, nd_mysqli, nd_pdo_mysql, opcache, pdo, pdo_sqlite,
                                posix, soap, sockets, sysvsem, sysvshm, sysvmsg,
                                xmlreader, xmlrpc, xmlwriter, xsl, zip, igbinary,
                                intl, timezonedb, tidy.
 <p class="text-gray-700"></p><h3 class="font-bold text-base">Opciones de configuración:</h3>
allowUrlFopen, exposePhp, fileUploads.
 <p class="text-gray-700"></p><h3 class="font-bold text-base">Configuración funcional:</h3> <ul> <li><span class="font-bold">date.timezone:</span> UTC</li> <li> <span class="font-bold">disableFunctions:</span> shell_exec
</li> <li> <span class="font-bold">errorReporting:</span> E_ERROR
                                        | E_WARNING | E_PARSE | E_NOTICE | E_CORE_ERROR
                                        | E_CORE_WARNING | E_COMPILE_ERROR | E_COMPILE_WARNING
                                        | E_USER_ERROR | E_USER_WARNING | E_USER_NOTICE
                                        | E_RECOVERABLE_ERROR | E_USER_DEPRECATED
</li> <li> <span class="font-bold">includePath:</span> .:/opt/alt/php82/usr/share/pear:/opt/alt/php82/usr/share/php:/usr/share/pear:/usr/share/php
</li> <li> <span>mail.forceExtraParameters:</span> no value
</li> <li> <span class="font-bold">maxExecutionTime:</span> 360
</li> <li><span class="font-bold">maxFileUploads:</span> 20</li> <li><span class="font-bold">maxInputTime:</span> 360</li> <li><span class="font-bold">maxInputVars:</span> 5000</li> <li><span class="font-bold">memoryLimit:</span> 2048M</li> <li> <span class="font-bold">openBasedir:</span> no value
</li> <li><span class="font-bold">postMaxSize:</span> 2048M</li> <li> <span class="font-bold">session.cookieLifetime:</span>
0
</li> <li> <span class="font-bold">session.cookieSamesite:</span>
None
</li> <li> <span class="font-bold">session.gcMaxlifetime:</span> 1440
</li> <li> <span class="font-bold">session.savePath:</span> /opt/alt/php82/var/lib/php/session
</li> <li> <span class="font-bold">uploadMaxFilesize:</span> 2048M
</li> </ul>  </div> <!-- Configuración .htaccess --> <div class="bg-gray-100 p-6 rounded-lg shadow-sm"> <div class="flex items-center justify-between mb-4"> <h4 class="text-xl font-semibold text-gray-900">
Configuración .htaccess
</h4> <button class="copy-btn p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200" data-copy="htaccess" title="Copiar código"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path> </svg> </button> </div> <div class="relative"> <pre class="bg-gray-800 text-white p-4 rounded-lg"><code class="text-white w-full text-start"># .htaccess básico
RewriteEngine On
RewriteBase /
RewriteRule ^index\\.php$ - [L]
RewriteCond %${text} !-f
RewriteCond %${text} !-d
RewriteRule . /index.php [L]</code></pre> </div> </div> <!-- Creación de base de datos --> <div class="bg-gray-100 p-6 rounded-lg shadow-sm"> <h4 class="text-xl font-semibold text-gray-900 mb-4">
Crear Base de Datos
</h4> <p class="text-gray-700">
Debes crear una base de datos en tu servidor,
                                asignar un usuario con permisos adecuados y
                                configurar los detalles en el archivo .env.
</p> </div> <!-- Configuración de permisos --> <div class="bg-gray-100 p-6 rounded-lg shadow-sm"> <div class="flex items-center justify-between mb-4"> <h4 class="text-xl font-semibold text-gray-900">
Configurar Permisos de Carpetas
</h4> <button class="copy-btn p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200" data-copy="permissions" title="Copiar código"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect> <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path> </svg> </button> </div> <p class="text-gray-700 mb-4">
Utiliza FTP o la terminal para otorgar permisos
                                de lectura, escritura y ejecución a las carpetas
                                necesarias. Por ejemplo:
</p> <div class="relative"> <pre class="bg-gray-800 text-white p-4 rounded-lg"><code># Otorgar permisos de escritura en las carpetas storage y bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache</code></pre> </div> </div> <!-- Iniciar configuración --> <div class="bg-gray-100 p-6 rounded-lg shadow-sm"> <h4 class="text-xl font-semibold text-gray-900 mb-4">
Iniciar Configuración
</h4> <p class="text-gray-700">
Una vez completados los pasos anteriores, puedes
                                empezar con la configuración adicional de tu
                                proyecto según sea necesario, como la
                                configuración de variables de entorno,
                                dependencias y ajustes finales del servidor.
</p> </div> </div> </div> </div> </main> </div>  ${renderScript($$result2, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/despliegue.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/despliegue.astro", void 0);

const $$file = "C:/Users/Jerick/DEV/AstroJS/doc-ecommerce/src/pages/despliegue.astro";
const $$url = "/despliegue";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Despliegue,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
