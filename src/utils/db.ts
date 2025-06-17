// src/utils/db.ts
import mariadb from "mariadb";
import "dotenv/config";

export const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS || process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});
export async function query<T = any[]>(
  sql: string,
  params?: any[]
): Promise<T> {
  const conn = await pool.getConnection();
  try {
    const result = await conn.query(sql, params);
    return result as T;
  } finally {
    conn.release();
  }
}

export async function fetchProyectos(clienteId: number) {
  /* — proyectos + detalles — */
  const rows: any[] = await pool.query(
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

  /* — agrupar por proyecto — */
  const map = new Map<number, any>();
  for (const r of rows) {
    if (!map.has(r.id)) {
      map.set(r.id, {
        id: r.id,
        nombreProyecto: r.nombreProyecto,
        observacion: r.observacion,
        estado: !!r.proyectoEstado,
        detalles: [],
      });
    }
    if (r.detalleId) {
      map.get(r.id).detalles.push({
        id: r.detalleId,
        observacion: r.detalleObservacion,
        estado: !!r.detalleEstado,
        caracteristica: { titulo: r.caracteristicaTitulo },
      });
    }
  }

  return [...map.values()]; // siempre un array (aunque vacío)
}

export const fetchDetalles = async (proyectoId: number) => {
  const [rows] = await pool.query(
    "SELECT * FROM proyectos_clientes_detalles WHERE proyectoid = ?",
    [proyectoId]
  );
  return rows;
};

export async function crearProyecto(
  clienteId: number,
  nombre: string,
  observacion: string
) {
  try {
    const sql = `
      INSERT INTO proyectos_clientes
        (clientesid, nombre_proyecto, observacion)
      VALUES (?, ?, ?)
    `;
    const result: any = await pool.query(sql, [
      clienteId,
      nombre.trim(),
      observacion.trim(),
    ]);

    return {
      id: result.insertId,
      nombreProyecto: nombre,
      observacion,
      estado: true,
      detalles: [],
    };
  } catch (err) {
    console.error("Error al crear proyecto:", err);
    throw err;
  }
}

export const eliminarProyecto = async (proyectoId: number) => {
  await pool.query("DELETE FROM proyectos_clientes WHERE id = ?", [proyectoId]);
};

export const toggleEstadoProyecto = async (
  proyectoId: number,
  estado: boolean
) => {
  const [result] = await pool.query(
    "UPDATE proyectos_clientes SET estado = ? WHERE id = ?",
    [estado ? 1 : 0, proyectoId]
  );
  return { id: proyectoId, estado: !estado };
};

export const crearDetalle = async (
  proyectoId: number,
  caracteristicaId: number,
  observacion: string
) => {
  const [result] = await pool.query(
    "INSERT INTO proyectos_clientes_detalles (proyectoid, caracteristicas_ecommerceid, observacion) VALUES (?, ?, ?)",
    [proyectoId, caracteristicaId, observacion]
  );
  return {
    id: result.insertId,
    observacion,
    estado: true,
    caracteristica: { titulo: "Característica ejemplo" }, // Esto se puede obtener también de la base de datos
  };
};

export const eliminarDetalle = async (detalleId: number) => {
  await pool.query("DELETE FROM proyectos_clientes_detalles WHERE id = ?", [
    detalleId,
  ]);
};

export const toggleEstadoDetalle = async (
  detalleId: number,
  estado: boolean
) => {
  const [result] = await pool.query(
    "UPDATE proyectos_clientes_detalles SET estado = ? WHERE id = ?",
    [estado ? 1 : 0, detalleId]
  );
  return { id: detalleId, estado: !estado };
};
