import { Router } from 'express'; 
import { getTasks, getTasksById, createTask, updateTask, deleteTask} from '../controllers/tasks.controllers.js'; // importo las funciones del controlador de tareas para usarlas en las rutas.

const router = Router(); // creo una instancia de router para definir las rutas de tareas

// DEFINO LAS RUTAS DE TAREAS
router.get('/', getTasks);          // ruta para obtener todas las tareas..
router.get('/:id', getTasksById);  // GET /api/tasks/1 obtiene tarea por su ID.
router.post('/', createTask);       // POST /api/tasks (no lleva ID  porque aun no existe la tarea, el ID se generará automáticamente al crearla).
router.put('/:id', updateTask);    // PUT /api/tasks/1 actualiza tarea por su ID.
router.delete('/:id', deleteTask); // DELETE /api/tasks/1 elimina tarea por su ID.

export default router; // exporto el router para poder usarlo en el servidor.