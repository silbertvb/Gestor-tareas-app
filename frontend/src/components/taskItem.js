import React, { useState } from 'react';

// recibe 3 props (propiedades) desde componentes padres
const TaskItem = ({ task, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false); 
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    // función para manejar la actualización de la tarea.
    const handleUpdate = () => {
        onUpdate(task.id, { title, description });
        setIsEditing(false);
    };

    // renderiza la tarea, si isEditing es true, muestra un formulario para editar, sino muestra la tarea con botones de editar y eliminar.
    return (
        <div className="task-item">
            {isEditing ? (
                <div className="task-edit">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título"
                    />
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descripción"
                    />
                    <button onClick={handleUpdate}>Guardar</button>
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </div>
            ) : (
                <div className="task-content">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <small>Creada: {new Date(task.created_at).toLocaleDateString()}</small>
                    <div className="task-buttons">
                        <button onClick={() => setIsEditing(true)}>✏️ Editar</button>
                        <button onClick={() => onDelete(task.id)}>🗑️ Eliminar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskItem;