import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Configuración
const JWT_SECRET = import.meta.env.JWT_SECRET || 'tu-clave-secreta-super-segura-aqui';
const SALT_ROUNDS = 12;

// Interfaz de usuario
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    createdAt: Date;
}

// Base de datos simulada (en producción usa una BD real)
const users: User[] = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@perseo.com',
        password: '$2a$12$OkGZ8/jCERkDZxspeNpm4u2lwfZ2VV9c4WHk/NSa6eRxKzM/cgxWi',
        role: 'admin',
        createdAt: new Date()
    },
    {
        id: 2,
        username: 'usuario',
        email: 'user@perseo.com',
        password: '$2a$12$OkGZ8/jCERkDZxspeNpm4u2lwfZ2VV9c4WHk/NSa6eRxKzM/cgxWi',
        role: 'user',
        createdAt: new Date()
    }
];

// Funciones de utilidad para contraseñas
export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}

// Funciones JWT
export function generateToken(user: Omit<User, 'password'>): string {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: '24h' }
    );
}

export function verifyToken(token: string): any {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

// Funciones de base de datos
export async function findUserByEmail(email: string): Promise<User | null> {
    return users.find(user => user.email === email) || null;
}

export async function findUserByUsername(username: string): Promise<User | null> {
    return users.find(user => user.username === username) || null;
}

export async function createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const newUser: User = {
        ...userData,
        id: users.length + 1,
        createdAt: new Date()
    };
    users.push(newUser);
    return newUser;
}

// Función de autenticación
export async function authenticateUser(identifier: string, password: string): Promise<Omit<User, 'password'> | null> {
    // Buscar por email o username
    let user = await findUserByEmail(identifier);
    if (!user) {
        user = await findUserByUsername(identifier);
    }

    if (!user) {
        return null;
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
        return null;
    }

    // Retornar usuario sin contraseña
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
}
