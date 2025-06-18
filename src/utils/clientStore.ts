import { pool } from "./db";
import type { Cliente } from "./cliente";

export const getAllClientes = async (): Promise<Cliente[]> => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM clientes");
    return rows as Cliente[];
  } finally {
    conn.release();
  }
};

export const getClienteById = async (
  id: string
): Promise<Cliente | undefined> => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM clientes WHERE id = ?", [id]);
    return rows[0] as Cliente;
  } finally {
    conn.release();
  }
};

export const createCliente = async (
  data: Omit<Cliente, "id">
): Promise<Cliente> => {
  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
      "INSERT INTO clientes (razon_social, ruc) VALUES (?,?)",
      [data.razon_social, data.ruc]
    );
    return { ...data, id: res.insertId };
  } finally {
    conn.release();
  }
};

export const updateCliente = async (
  id: string,
  data: Partial<Omit<Cliente, "id">>
): Promise<Cliente | null> => {
  const conn = await pool.getConnection();
  try {
    const fields = Object.keys(data)
      .map((k) => `${k} = ?`)
      .join(", ");
    const values = Object.values(data);
    const res: any = await conn.query(
      `UPDATE clientes SET ${fields} WHERE id = ?`,
      [...values, id]
    );
    if (res.affectedRows === 0) return null;
    const cliente = await getClienteById(id);
    return cliente === undefined ? null : cliente;
  } finally {
    conn.release();
  }
};

export async function removeCliente(id: number): Promise<boolean> {
  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
      "DELETE FROM clientes WHERE id = ?",
      [id] // ← number
    );
    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}

export const getProyectosByCliente = async (
  clienteId: string
): Promise<any[]> => {
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
