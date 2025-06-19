import { p as pool } from './db_Kpg-XkaI.mjs';

const getProyectosByCliente = async (clienteId) => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query(
      "SELECT * FROM proyectos_clientes WHERE clienteid = ?",
      [clienteId]
    );
    return rows;
  } finally {
    conn.release();
  }
};
const createProyectoParaCliente = async (clienteId, data) => {
  const conn = await pool.getConnection();
  try {
    const res = await conn.query(
      `INSERT INTO proyectos_clientes
   (clientesid, nombre_proyecto, observacion, estado)
   VALUES (?, ?, ?, 1)`,
      [clienteId, data.nombreProyecto, data.observacion ?? null]
    );
    return {
      id: res.insertId,
      clienteid: +clienteId,
      nombre_proyecto: data.nombreProyecto,
      observacion: data.observacion ?? null,
      estado: 1
    };
  } finally {
    conn.release();
  }
};
const getProyectoConDetalles = async (proyectoId) => {
  const conn = await pool.getConnection();
  try {
    const [proyecto] = await conn.query(
      "SELECT * FROM proyectos_clientes WHERE id = ?",
      [proyectoId]
    );
    if (!proyecto) return null;
    const detalles = await conn.query(
      `SELECT d.*, c.titulo AS caracteristica_titulo
         FROM proyectos_clientes_detalles d
         JOIN caracteristicas_ecommerce c
           ON c.id = d.caracteristicas_ecommerceid
        WHERE d.proyectoid = ?`,
      [proyectoId]
    );
    proyecto.detalles = detalles.map((row) => ({
      id: row.id,
      estado: Number(row.estado),
      observacion: row.observacion,
      caracteristica: { titulo: row.caracteristica_titulo }
    }));
    return proyecto;
  } finally {
    conn.release();
  }
};

export { getProyectoConDetalles as a, createProyectoParaCliente as c, getProyectosByCliente as g };
