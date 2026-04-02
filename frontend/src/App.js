import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar tareas al iniciar la aplicación desde el backend usando useEffect.
    useEffect(() => {
        loadTasks(); 
    }, []);

    const loadTasks = async () => {
        try {
            setLoading(true);
            const data = await getTasks(); // obtiene las tareas del backend a través del servicio.
            setTasks(data);    // actualiza el estado de tareas con los datos obternidos del backend.
            setError(null);
        } catch (err) {
            setError('Error al cargar las tareas. ¿El backend está corriendo?');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // maneja la edición de una nueva tarea
    const handleAddTask = async (newTask) => {
        try {
            const created = await createTask(newTask); //POST al backend para crear una nueva tarea.
            setTasks([...tasks, created]);      // incluye la nueva tarea creada en el estado de tareas para actualizar la interfaz.
        } catch (err) {
            setError('Error al crear la tarea');
            console.error(err);
        }
    };

    // maneja la actualización de una tarea existente
    const handleUpdateTask = async (id, updatedTask) => {
        try {
            const updated = await updateTask(id, updatedTask);
            setTasks(tasks.map(task => task.id === id ? updated : task));
        } catch (err) {
            setError('Error al actualizar la tarea');
            console.error(err);
        }
    };

    // maneja la eliminación de una tarea existente
    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            setError('Error al eliminar la tarea');
            console.error(err);
        }
    };

    // maneja el gestionamiento del estado de carga y error.
    if (loading) {
        return <div className="loading">Cargando tareas...</div>;
    }

    // renderiza mostrando un mensaje de error si existe un error, y el formulario de tareas y la lista si no hay error.
    return (
        <div className="app">
            <h1>📝 Gestor de Tareas</h1>
            
            {error && <div className="error">{error}</div>}
            
            
            <div className="container">
                <TaskForm onAdd={handleAddTask} />
                <TaskList 
                    tasks={tasks} 
                    onUpdate={handleUpdateTask} 
                    onDelete={handleDeleteTask}
                />
            </div>
        </div>
    );
}

export default App;
