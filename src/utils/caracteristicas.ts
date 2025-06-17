export const getCaracteristicasActivas = async () => {
  const conn = await pool.getConnection();
  try {
    return await conn.query(
      "SELECT id, titulo FROM caracteristicas_ecommerce WHERE estado = 1"
    );
  } finally {
    conn.release();
  }
};
