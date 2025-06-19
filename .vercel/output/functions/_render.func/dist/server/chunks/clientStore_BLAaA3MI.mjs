import { p as pool } from './db_Kpg-XkaI.mjs';

const getAllClientes = async () => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM clientes");
    return rows;
  } finally {
    conn.release();
  }
};
const getClienteById = async (id) => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM clientes WHERE id = ?", [id]);
    return rows[0];
  } finally {
    conn.release();
  }
};
const createCliente = async (data) => {
  const conn = await pool.getConnection();
  try {
    const res = await conn.query(
      "INSERT INTO clientes (razon_social, ruc) VALUES (?,?)",
      [data.razon_social, data.ruc]
    );
    return { ...data, id: res.insertId };
  } finally {
    conn.release();
  }
};
async function removeCliente(id) {
  const conn = await pool.getConnection();
  try {
    const res = await conn.query(
      "DELETE FROM clientes WHERE id = ?",
      [id]
      // ← number
    );
    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}
const getProyectosByCliente = async (clienteId) => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      // antes  →  "SELECT * FROM proyectos WHERE cliente_id = ?"
      "SELECT * FROM proyectos_clientes WHERE clientesid = ?",
      [clienteId]
    );
    return rows;
  } finally {
    conn.release();
  }
};

export { getClienteById as a, getProyectosByCliente as b, createCliente as c, getAllClientes as g, removeCliente as r };
