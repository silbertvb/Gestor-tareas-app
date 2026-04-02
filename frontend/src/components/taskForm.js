// frontend/src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd({ title, description });
            setTitle('');
            setDescription('');
        }
    };
    
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Nueva Tarea</h2>
            <input
                type="text"
                placeholder="Título de la tarea"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción (opcional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Crear Tarea</button>
        </form>
    );
};

export default TaskForm;