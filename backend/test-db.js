import pool from "./src/db.js";

// Función para probar la conexión a la base de datos
async function testConnection() {
    try {
        console.log('Probando conexión a la base de datos...');

        // Realiza una consulta simple para verificar la conexión
        const result = await pool.query('SELECT NOW() as now');
        console.log('Conexión a la base de datos exitosa', result.rows[0]);

        // Prueba adicional: Obtener todas las tareas
        const task = await pool.query('SELECT * FROM tasks');
        console.log('Tareas:', task.rows);

        process.exit(0); // Salir después de la prueba
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Salir con error
    }
}

testConnection(); // Ejecuta la función de prueba de conexión