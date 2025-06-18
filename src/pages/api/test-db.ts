// test-db.ts
import { pool } from "../../utils/db";

(async () => {
  try {
    const conn = await pool.getConnection();
    const result = await conn.query("SELECT 1 as test");
    console.log("✅ Conexión exitosa:", result);
    conn.release();
  } catch (err) {
    console.error("❌ Error al conectar con la base de datos:", err);
  } finally {
    process.exit(0);
  }
})();
