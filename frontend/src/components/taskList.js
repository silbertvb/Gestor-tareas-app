import TaskItem from './taskItem'; 

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    if (tasks.length === 0) {
        return <p className="no-tasks">No hay tareas. ¡Crea una!</p>;
    }

    // renderiza mapeando cada tarea en el array de tareas, pasando la tarea y las funciones de actualización y eliminación como props a cada taskItem.
    return (
        <div className="task-list">
            <h2> Mis Tareas</h2>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;