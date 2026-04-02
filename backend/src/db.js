import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const { Pool } = pkg;

// Crea la conexión a la base de datos PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,          // Usuario de PostgreSQL
    host: process.env.DB_HOST,          // Dirección del servidor PostgreSQL
    database: process.env.DB_DATABASE,  // Nombre de la base de datos
    password: process.env.DB_PASSWORD,  // Contraseña del usuario de PostgreSQL
    port: process.env.DB_PORT,          // Puerto de PostgreSQL
});

export default pool; // Exporta el pool(conexiones) para usarlo en otros archivos