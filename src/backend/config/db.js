import { Pool } from "pg";
import 'dotenv/config';

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('🛑 ERROR DE CONEXIÓN A PG:', err.stack);
        return;
    }
    console.log('🎉 Conexión exitosa a PostgreSQL establecida.');
    release();
});

export default pool;