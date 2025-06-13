
import type { APIRoute } from 'astro';
import bcrypt from 'bcryptjs';

// Forzar server-side rendering para esta ruta API
export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        // Generar hashes correctos
        const adminHash = await bcrypt.hash('admin123', 12);
        const userHash = await bcrypt.hash('user123', 12);

        // Verificar que funcionan
        const adminTest = await bcrypt.compare('admin123', adminHash);
        const userTest = await bcrypt.compare('user123', userHash);

        const result = {
            message: 'Debug de autenticación',
            hashes: {
                admin: {
                    password: 'admin123',
                    hash: adminHash,
                    verification: adminTest
                },
                user: {
                    password: 'user123',
                    hash: userHash,
                    verification: userTest
                }
            },
            currentHashes: {
                admin: '$2a$12$OOn793k31Y4VbYbuCD0Qjeup6enS1sDZxR0fs5kaTmN1MID2fhcC6',
                user: '$2a$12$OOn793k31Y4VbYbuCD0Qjeup6enS1sDZxR0fs5kaTmN1MID2fhcC6'
            }
        };

        return new Response(JSON.stringify(result, null, 2), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error en debug:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
