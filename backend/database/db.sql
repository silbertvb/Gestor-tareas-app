/*
 =====================================================
 BASE DE DATOS PARA EL GESTOR DE TAREAS
 =====================================================

- Si quisiera ejecutar con Docker:
- docker exec -it postgres-tareas psql -U postgres -d tareas_db -f database/db.sql
 ===================================================== */

-- Eliminar tabla si existe (para reiniciar desde cero)
DROP TABLE IF EXISTS tasks;


-- Crear tabla tasks
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de prueba iniciales
INSERT INTO tasks (title, description) VALUES 
('Estudiar JavaScript', 'Completar módulo de backend con Node.js'),
('Aprender Docker', 'Entender contenedores y PostgreSQL'),
('Probar API con Insomnia', 'Hacer pruebas CRUD completas');

