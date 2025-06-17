import { pool } from "./db";

export interface ProyectoCliente {
  id: number;
  clienteid: number;
  nombre_proyecto: string;
  observacion: string | null;
  estado: 0 | 1;
}

export const getProyectosByCliente = async (clienteId: string) => {
  const conn = await pool.getConnection();
  try {
    const rows = await conn.query<ProyectoCliente[]>(
      "SELECT * FROM proyectos_clientes WHERE clienteid = ?",
      [clienteId]
    );
    return rows;
  } finally {
    conn.release();
  }
};

export const createProyectoParaCliente = async (
  clienteId: string,
  data: { nombreProyecto: string; observacion?: string }
) => {
  const conn = await pool.getConnection();
  try {
    const res: any = await conn.query(
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
      estado: 1,
    };
  } finally {
    conn.release();
  }
};
