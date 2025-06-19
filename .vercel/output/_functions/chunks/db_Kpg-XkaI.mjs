import mariadb from 'mariadb';
import 'dotenv/config';

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS || process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5
});
async function query(sql, params) {
  const conn = await pool.getConnection();
  try {
    const result = await conn.query(sql, params);
    return result;
  } finally {
    conn.release();
  }
}
async function fetchProyectos(clienteId) {
  const rows = await pool.query(
    `SELECT pc.id,
            pc.nombre_proyecto        AS nombreProyecto,
            pc.observacion,
            pc.estado                 AS proyectoEstado,
            d.id                      AS detalleId,
            d.observacion             AS detalleObservacion,
            d.estado                  AS detalleEstado,
            c.titulo                  AS caracteristicaTitulo
     FROM   proyectos_clientes pc
     LEFT JOIN proyectos_clientes_detalles d
            ON d.proyectoid = pc.id
     LEFT JOIN caracteristicas_ecommerce c
            ON c.id = d.caracteristicas_ecommerceid
     WHERE  pc.clientesid = ?`,
    [clienteId]
  );
  const map = /* @__PURE__ */ new Map();
  for (const r of rows) {
    if (!map.has(r.id)) {
      map.set(r.id, {
        id: r.id,
        nombreProyecto: r.nombreProyecto,
        observacion: r.observacion,
        estado: !!r.proyectoEstado,
        detalles: []
      });
    }
    if (r.detalleId) {
      map.get(r.id).detalles.push({
        id: r.detalleId,
        observacion: r.detalleObservacion,
        estado: Number(r.detalleEstado),
        caracteristica: { titulo: r.caracteristicaTitulo }
      });
    }
  }
  return [...map.values()];
}

export { fetchProyectos as f, pool as p, query as q };
