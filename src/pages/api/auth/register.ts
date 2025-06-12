
// import type { APIRoute } from 'astro';
// import { createUser, findUserByEmail, findUserByUsername, hashPassword, generateToken } from '../../../utils/auth';

// // Forzar server-side rendering para esta ruta API
// export const prerender = false;

// export const POST: APIRoute = async ({ request, cookies }) => {
//     try {
//         // Verificar content type
//         const contentType = request.headers.get('content-type');
//         if (!contentType || !contentType.includes('application/json')) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'Content-Type debe ser application/json'
//                 }),
//                 {
//                     status: 400,
//                     headers: { 'Content-Type': 'application/json' }
//                 }
//             );
//         }

//         // Obtener y validar el body
//         let body;
//         try {
//             const text = await request.text();
//             if (!text) {
//                 throw new Error('Body vacío');
//             }
//             body = JSON.parse(text);
//         } catch (error) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'JSON inválido en el cuerpo de la petición'
//                 }),
//                 {
//                     status: 400,
//                     headers: { 'Content-Type': 'application/json' }
//                 }
//             );
//         }

//         const { username, email, password, confirmPassword } = body;

//         // Validaciones
//         if (!username || !email || !password || !confirmPassword) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'Todos los campos son requeridos'
//                 }),
//                 { status: 400, headers: { 'Content-Type': 'application/json' } }
//             );
//         }

//         if (password !== confirmPassword) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'Las contraseñas no coinciden'
//                 }),
//                 { status: 400, headers: { 'Content-Type': 'application/json' } }
//             );
//         }

//         if (password.length < 6) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'La contraseña debe tener al menos 6 caracteres'
//                 }),
//                 { status: 400, headers: { 'Content-Type': 'application/json' } }
//             );
//         }

//         // Validar formato de email
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'Formato de email inválido'
//                 }),
//                 { status: 400, headers: { 'Content-Type': 'application/json' } }
//             );
//         }

//         // Verificar si el usuario ya existe
//         const existingUserByEmail = await findUserByEmail(email);
//         const existingUserByUsername = await findUserByUsername(username);

//         if (existingUserByEmail) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'El email ya está registrado'
//                 }),
//                 { status: 409, headers: { 'Content-Type': 'application/json' } }
//             );
//         }

//         if (existingUserByUsername) {
//             return new Response(
//                 JSON.stringify({
//                     success: false,
//                     message: 'El nombre de usuario ya está en uso'
//                 }),
//                 { status: 409, headers: { 'Content-Type': 'application/json' } }
//             );
//         }

//         // Hashear contraseña
//         const hashedPassword = await hashPassword(password);

//         // Crear usuario
//         const newUser = await createUser({
//             username,
//             email,
//             password: hashedPassword,
//             role: 'user'
//         });

//         // Generar token
//         const { password: _, ...userWithoutPassword } = newUser;
//         const token = generateToken(userWithoutPassword);

//         // Establecer cookie
//         cookies.set('auth-token', token, {
//             httpOnly: true,
//             secure: import.meta.env.PROD,
//             sameSite: 'strict',
//             maxAge: 60 * 60 * 24,
//             path: '/'
//         });

//         return new Response(
//             JSON.stringify({
//                 success: true,
//                 message: 'Usuario registrado exitosamente',
//                 user: userWithoutPassword
//             }),
//             { status: 201, headers: { 'Content-Type': 'application/json' } }
//         );

//     } catch (error) {
//         console.error('Error en registro:', error);
//         return new Response(
//             JSON.stringify({
//                 success: false,
//                 message: 'Error interno del servidor'
//             }),
//             { status: 500, headers: { 'Content-Type': 'application/json' } }
//         );
//     }
// };
