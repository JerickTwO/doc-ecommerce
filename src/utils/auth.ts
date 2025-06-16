import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from './db';
const JWT_SECRET = import.meta.env.JWT_SECRET as string;
const SALT_ROUNDS = 12;

// Tipos
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user' | 'cliente';
  createdAt: Date;
}

// --- Funciones de hashing ---
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// --- JWT ---
export function generateToken(payload: Omit<User, 'createdAt'>): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): Omit<User, 'createdAt'> | null {
  try {
    return jwt.verify(token, JWT_SECRET) as Omit<User, 'createdAt'>;
  } catch {
    return null;
  }
}

// --- Usuarios (Admin / User) ---
export async function findUserByEmail(email: string): Promise<null | (User & { password: string })> {
  const rows = await query<(User & { password: string })[]>(
    'SELECT id, username, email, contrasenia AS password, role, createdAt FROM usuarios WHERE email = ?',
    [email]
  );
  return rows[0] || null;
}

export async function findUserByUsername(username: string): Promise<null | (User & { password: string })> {
  const rows = await query<(User & { password: string })[]>(
    'SELECT id, username, email, contrasenia AS password, role, createdAt FROM usuarios WHERE username = ?',
    [username]
  );
  return rows[0] || null;
}

export async function createUser(data: {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}): Promise<User> {
  const hashed = await hashPassword(data.password);
  const result = await query<{ insertId: number }>(
    'INSERT INTO usuarios (username, email, contrasenia, role, createdAt) VALUES (?, ?, ?, ?, NOW())',
    [data.username, data.email, hashed, data.role]
  );
  return {
    id: (result as any).insertId,
    username: data.username,
    email: data.email,
    role: data.role,
    createdAt: new Date()
  };
}

export async function authenticateUser(identifier: string, password: string): Promise<Omit<User, 'createdAt'> | null> {
  // intentamos email primero, si no, username
  let record = await findUserByEmail(identifier);
  if (!record) record = await findUserByUsername(identifier);
  if (!record) return null;

  const isValid = await verifyPassword(password, record.password);
  if (!isValid) return null;

  const { password: _, ...user } = record;
  return user;
}

// --- Clientes (solo RUC) ---
export async function findClientByRuc(ruc: string): Promise<null | { id: number; razon_social: string; ruc: string }> {
  const rows = await query<{ id: number; razon_social: string; ruc: string }[]>(
    'SELECT id, razon_social, ruc FROM clientes WHERE ruc = ?',
    [ruc]
  );
  return rows[0] || null;
}

export async function authenticateClient(ruc: string): Promise<Omit<User, 'createdAt'> | null> {
  const cli = await findClientByRuc(ruc);
  if (!cli) return null;
  return {
    id: cli.id,
    username: cli.razon_social,
    email: '',        // no aplicable, o podrías añadir campo email en clientes
    role: 'cliente'
  };
}
