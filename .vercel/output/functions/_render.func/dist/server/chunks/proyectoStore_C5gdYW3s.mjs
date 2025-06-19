import { p as pool } from './db_Kpg-XkaI.mjs';

async function removeProyecto(id) {
  const conn = await pool.getConnection();
  try {
    await conn.query(
      "DELETE FROM proyectos_clientes_detalles WHERE proyectoid = ?",
      [id]
    );
    const res = await conn.query(
      "DELETE FROM proyectos_clientes WHERE id = ?",
      [id]
    );
    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}
async function removeDetalle(id) {
  const conn = await pool.getConnection();
  try {
    const res = await conn.query(
      "DELETE FROM proyectos_clientes_detalles WHERE id = ?",
      [id]
    );
    return res.affectedRows > 0;
  } finally {
    conn.release();
  }
}

export { removeProyecto as a, removeDetalle as r };
