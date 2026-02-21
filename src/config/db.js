import { Pool } from "pg";
import 'dotenv/config'
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

export default pool
import pg from 'pg';
// ... configuración de dotenv y pool ...

pool.connect((err, client, release) => {
    if (err) {
        // 🛑 Error: No conectado (o credenciales incorrectas)
        console.error('🛑 ERROR DE CONEXIÓN A PG:', err.stack);
        return;
    }
    // 🎉 Éxito: Conectado
    console.log('🎉 Conexión exitosa a PostgreSQL establecida.');
    
    // Es importante liberar el cliente que tomaste del pool
    release(); 
});