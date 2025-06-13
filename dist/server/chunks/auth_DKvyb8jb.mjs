import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "tu-clave-secreta-super-segura-para-jwt-aqui-debe-ser-muy-larga";
const users = [
  {
    id: 1,
    username: "admin",
    email: "admin@perseo.com",
    password: "$2a$12$/rkFcpZVO7mfpQukmWMQY.1NFrUViuU76UEA3xwhuAf48SJsvRti2",
    role: "admin",
    createdAt: /* @__PURE__ */ new Date()
  },
  {
    id: 2,
    username: "usuario",
    email: "user@perseo.com",
    password: "$2a$12$/rkFcpZVO7mfpQukmWMQY.1NFrUViuU76UEA3xwhuAf48SJsvRti2",
    role: "user",
    createdAt: /* @__PURE__ */ new Date()
  }
];
async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
}
function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}
async function findUserByEmail(email) {
  return users.find((user) => user.email === email) || null;
}
async function findUserByUsername(username) {
  return users.find((user) => user.username === username) || null;
}
async function authenticateUser(identifier, password) {
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
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export { authenticateUser as a, generateToken as g, verifyToken as v };
