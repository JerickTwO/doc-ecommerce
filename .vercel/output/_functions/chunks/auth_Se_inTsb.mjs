import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { q as query } from './db_Kpg-XkaI.mjs';

const JWT_SECRET = "?0Rt/8h*1.wIs?d!5b0A5_yH9_Z0";
console.log("JWT_SECRET:", JWT_SECRET);
async function authenticateClient(ruc) {
  const rows = await query(
    "SELECT id, razon_social, ruc FROM clientes WHERE ruc = ?",
    [ruc]
  );
  return rows[0] || null;
}
async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
}
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
function generateClientToken(cliente) {
  return jwt.sign(
    { sub: cliente.id, ruc: cliente.ruc, role: "cliente" },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
}
async function findUserByEmail(email) {
  const rows = await query(
    "SELECT id, username, email, contrasenia AS password, role, createdAt FROM usuarios WHERE email = ?",
    [email]
  );
  return rows[0] || null;
}
async function findUserByUsername(username) {
  const rows = await query(
    "SELECT id, username, email, contrasenia AS password, role, createdAt FROM usuarios WHERE username = ?",
    [username]
  );
  return rows[0] || null;
}
async function authenticateUser(identifier, password) {
  let record = await findUserByEmail(identifier);
  if (!record) record = await findUserByUsername(identifier);
  if (!record) return null;
  const isValid = await verifyPassword(password, record.password);
  if (!isValid) return null;
  const { password: _, ...user } = record;
  return user;
}

export { authenticateUser as a, authenticateClient as b, generateClientToken as c, generateToken as g, verifyToken as v };
