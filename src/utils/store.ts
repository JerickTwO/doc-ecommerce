// src/utils/store.ts
import { pool } from "./db";
import type { Naruto } from "./naruto";

export const getAll = async (): Promise<Naruto[]> => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query("SELECT * FROM narutos");
    return rows as Naruto[];
  } finally {
    conn.release();
  }
};

export const getById = async (id: number): Promise<Naruto | undefined> => {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM narutos WHERE id = ?", [id]);
  conn.release();
  return rows[0] as Naruto;
};

export const create = async (data: Omit<Naruto, "id">): Promise<Naruto> => {
  const conn = await pool.getConnection();
  const res = await conn.query(
    "INSERT INTO narutos (nombre, edad, clan) VALUES (?, ?, ?)",
    [data.nombre, data.edad, data.clan]
  );
  conn.release();
  return { ...data, id: res.insertId };
};

export const update = async (
  id: number,
  data: Partial<Omit<Naruto, "id">>
): Promise<Naruto | null> => {
  const conn = await pool.getConnection();
  const fields = Object.keys(data)
    .map((key) => `${key} = ?`)
    .join(", ");
  const values = Object.values(data);
  const res = await conn.query(`UPDATE narutos SET ${fields} WHERE id = ?`, [
    ...values,
    id,
  ]);
  conn.release();
  if (res.affectedRows === 0) return null;
  return await getById(id);
};

export const remove = async (id: number): Promise<boolean> => {
  const conn = await pool.getConnection();
  const res = await conn.query("DELETE FROM narutos WHERE id = ?", [id]);
  conn.release();
  return res.affectedRows > 0;
};
