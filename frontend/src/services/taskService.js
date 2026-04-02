
import axios from 'axios'; // Importa la biblioteca axios para realizar solicitudes HTTP

const API_URL = 'http://localhost:3000/api/tasks';

// Se conecta al endpoint GET api/tasks para obtener todas las tareas
export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data; 
};

// Se conecta al endpoint POST api/tasks para crear una nueva tarea
export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data; // devuelve la tarea creada con su ID generado automáticamente.
};

// Se conecta al endpoint PUT api/tasks/:id para actualizar una tarea
export const updateTask = async (id, task) => {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
};

// Se conecta al endpoint DELETE api/tasks/:id para eliminar una tarea
export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};