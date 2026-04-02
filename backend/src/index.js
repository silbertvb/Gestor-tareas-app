import express from 'express'; //incluyo en package.json "type": "module" para poder usar import
import cors from 'cors'; // para permitir peticiones desde el frontend
import taskRoutes from './routes/tasks.routes.js'; // importo las rutas de tareas para poder usarlos en el servidor.

/*si no incluyo "type": "module" en package.json, tengo que usar require para importar módulos quedando así:
- const express = require('express');
- const cors = require('cors'); */

const app = express(); // creo una instancia de servidor con express para poder usar sus métodos

// MIDDLEWARES
app.use(cors()); // uso el middleware de cors. Permite que el frontend (React) pueda conectarse con el backend.
app.use(express.json()); // Permite que el backend (servidor) entienda datos en formato JSON.

app.use('/api/tasks', taskRoutes); // uso las rutas de tareas para las peticiones a /api/tasks

// inicio el servidor en el puerto 3000 y muestro un mensaje por consola cuando el servidor esté listo para recibir peticiones.
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000'); // opcional, puedo configurar en el archivo config.js el puerto con: export const PORT = 4000; y luego importarlo aquí con: import {PORT} from './config.js'; y usarlo en el listen con: app.listen(PORT, () => {});
});
 