// utils/auth.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { query } from "./db";

const JWT_SECRET = import.meta.env.JWT_SECRET as string;
console.log("JWT_SECRET:", JWT_SECRET);
const SALT_ROUNDS = 12;

export interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "user" | "cliente";
  createdAt: Date;
}

// NUEVA ➊
export interface Client {
  id: number;
  razon_social: string;
  ruc: string;
}

/* ───────── CLIENTES ───────── */
// NUEVA ➋  — Busca al cliente por RUC
export async function authenticateClient(ruc: string): Promise<Client | null> {
  const rows = await query<Client[]>(
    "SELECT id, razon_social, ruc FROM clientes WHERE ruc = ?",
    [ruc]
  );
  return rows[0] || null;
}

// 🔐 Hash de contraseñas
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// 🔐 JWT
export function generateToken(payload: Omit<User, "createdAt">): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}

export function verifyToken(token: string): Omit<User, "createdAt"> | null {
  try {
    return jwt.verify(token, JWT_SECRET) as Omit<User, "createdAt">;
  } catch {
    return null;
  }
}

export function generateClientToken(cliente: Client): string {
  return jwt.sign(
    { sub: cliente.id, ruc: cliente.ruc, role: "cliente" },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
}
// 📦 Buscar usuarios
export async function findUserByEmail(
  email: string
): Promise<null | (User & { password: string })> {
  const rows = await query<(User & { password: string })[]>(
    "SELECT id, username, email, contrasenia AS password, role, createdAt FROM usuarios WHERE email = ?",
    [email]
  );
  return rows[0] || null;
}

export async function findUserByUsername(
  username: string
): Promise<null | (User & { password: string })> {
  const rows = await query<(User & { password: string })[]>(
    "SELECT id, username, email, contrasenia AS password, role, createdAt FROM usuarios WHERE username = ?",
    [username]
  );
  return rows[0] || null;
}

// 🧑 Crear usuarios
export async function createUser(data: {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user" | "cliente";
}): Promise<User> {
  const hashed = await hashPassword(data.password);
  const result = await query<{ insertId: number }>(
    "INSERT INTO usuarios (username, email, contrasenia, role, createdAt) VALUES (?, ?, ?, ?, NOW())",
    [data.username, data.email, hashed, data.role]
  );
  return {
    id: (result as any).insertId,
    username: data.username,
    email: data.email,
    role: data.role,
    createdAt: new Date(),
  };
}

// 🔐 Login
export async function authenticateUser(
  identifier: string,
  password: string
): Promise<Omit<User, "createdAt"> | null> {
  let record = await findUserByEmail(identifier);
  if (!record) record = await findUserByUsername(identifier);
  if (!record) return null;

  const isValid = await verifyPassword(password, record.password);
  if (!isValid) return null;

  const { password: _, ...user } = record;
  return user;
}
