 import pool from '../db.js'; 


export const getTasks = async (req, res) => {
    try {
        // ORDER BY id ASC para asegurar que siempre vengan ordenadas por ID de forma ascendente.
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json(result.rows); // Devuelve todass las tareas 
        
        // controla cualquier error con un mensaje de error genérico con un código 500.
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al obtener las tareas'});
    }
};

export const getTasksById = async(req, res) => {
    try {
        const {id} = req.params; // obtengo el id de la tarea desde los parametros de la URL.

        const result = await pool.query(
            'SELECT * FROM tasks WHERE id = $1', // consulta SQL para obtener la tarea con el ID especificado.
            [id] // el ID se para como un parámetro para evitar inyecciones SQL y asegurar la seguridad de la consulta.
        );

        // Si no se encuentra la tarea con el ID especificado, se devuelve un error 404.
        if (result.rows.length === 0) {
            return res.status(404).json({message: 'Tarea no encontrada'});
        }

        res.json(result.rows[0]); // si se encuentra la tarea, se devuelve en formato JSON. 
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al obtener la tarea'});
    }
};

export const createTask = async(req, res) => {
    const {title, description} = req.body; // Datos: título y descripción (opcional).
    try {
        const result = await pool.query(
            'INSERT INTO tasks(title, description) VALUES($1, $2) RETURNING *',
            [title, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al crear la tarea'});
    }
};

export const updateTask = async (req, res) => {
    try {
        // Extraer datos de la solicitud
        const {id} = req.params; // ID en la URL para identificar la tarea a actualizar.
        const {title, description} = req.body; // Datos del JSON a actualizar enviados por el cliente.

        // Ejecutar consulta SEGURA con parametros para evitar inyecciones SQL.
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *',
            [title, description, id] 
        );

        // varifica si se encontro la tarea con el ID especifico, si no se encuentra, devuelve un 404.
        if (result.rows.length === 0) {
            return res.status(404).json({message: 'Tarea no encontrada'});
        }

        // devuelve la tarea actualizada en formato JSON.
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al actualizar la tarea'});
    }
};

export const deleteTask = async (req, res) => {
    const {id} = req.params; // obtengo el id de la tarea a eliminar desde los parametros de la URL
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.json({message: `Tarea con ID ${id} eliminada`});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error al eliminar la tarea'});
    }
};

