import { pool } from "./db";

export async function removeProyecto(id: number): Promise<boolean> {
  const conn = await pool.getConnection();
  try {
    await conn.query(
      "DELETE FROM proyectos_clientes_detalles WHERE proyectoid = ?",
      [id]
    );

    const res: any = await conn.query(
      "DELETE FROM proyectos_clientes WHERE id = ?",
      [id]
    );

    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}
export async function removeDetalle(id: number): Promise<boolean> {
  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
      "DELETE FROM proyectos_clientes_detalles WHERE id = ?",
      [id]
    );
    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}
export async function cambiarEstadoProyecto(
  id: number,
  estado: 1 | 2 | 3
): Promise<boolean> {
  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
      "UPDATE proyectos_clientes SET estado = ? WHERE id = ?",
      [estado, id]
    );
    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}
