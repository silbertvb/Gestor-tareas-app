# 📝 Gestor de Tareas - Aplicación Completa

Aplicación web para gestión de tareas con **React** en el frontend y **Node.js + Express** en el backend, con **PostgreSQL** como base de datos ejecutándose en **Docker**.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Configuración](#instalación-y-configuración)
  - [1. Clonar el repositorio](#1-clonar-el-repositorio)
  - [2. Configurar el Backend](#2-configurar-el-backend)
  - [3. Configurar el Frontend](#3-configurar-el-frontend)
  - [4. Configurar la Base de Datos con Docker](#4-configurar-la-base-de-datos-con-docker)
- [Endpoints de la API](#endpoints-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)

---

## ✨ Características

- ✅ **CRUD completo**: Crear, Leer, Actualizar y Eliminar tareas
- ✅ **Interfaz interactiva**: Diseñada con React y estilos modernos
- ✅ **API RESTful**: Backend con Node.js y Express
- ✅ **Persistencia de datos**: PostgreSQL en Docker
- ✅ **Comunicación asíncrona**: Axios para peticiones HTTP
- ✅ **Actualización dinámica**: Sin recargar la página
- ✅ **Diseño responsivo**: Adaptable a móvil, tablet y escritorio
- ✅ **Edición inline**: Editar tareas directamente en la lista
- ✅ **Validación de datos**: Evita tareas vacías

---

## 🛠️ Tecnologías Utilizadas

### Backend
| Tecnología | Versión |            Propósito               |
|------------|---------|------------------------------------|
| Node.js    | v18+    | Entorno de ejecución               |
| Express.js | 4.x     | Framework para API RESTful         |
| PostgreSQL | 17      | Base de datos relacional           |
| Docker     | Latest  | Contenedor para PostgreSQL         |
| pg         | 8.x     | Cliente de PostgreSQL para Node.js |
| dotenv     | 16.x    | Variables de entorno               |
| cors       | 2.x     | Permitir peticiones del frontend   |

### Frontend
| Tecnología | Versión |            Propósito             |
|------------|---------|----------------------------------|
| React      | 18.x    | Framework de interfaz de usuario |
| Axios      | 1.x     | Peticiones HTTP al backend       |
| CSS3       | -       | Estilos y diseño responsivo      |

### Desarrollo
| Tecnología |      Propósito        |
|------------|-----------------------|
| Git        | Control de versiones  |
| GitHub     | Repositorio remoto    |
| npm        | Manejador de paquetes |

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (para PostgreSQL)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

---

## 🔧 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/silbertvb/Gestor-tareas-app.git
cd Gestor-tareas-app
```

### 2. Configurar el Backend

```bash
# Entrar a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de PostgreSQL

# Iniciar el servidor (modo desarrollo)
npm run dev
```

### 3. Configurar el Frontend

```bash
# Entrar a la carpeta del frontend (desde otra terminal)
cd frontend

# Instalar dependencias
npm install

# Iniciar la aplicación React
npm start
```

### 4. Configurar la Base de Datos con Docker

```bash
# Crear y ejecutar el contenedor PostgreSQL
docker run --name postgres-tareas \
  -e POSTGRES_USER=         \
  -e POSTGRES_PASSWORD=     \
  -e POSTGRES_DB=tareas_db  \
  -p 5432:5432              \
  -d postgres:latest

# Crear la tabla tasks
docker exec -it postgres-tareas psql -U postgres -d tareas_db -c "
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
"

# Insertar datos de prueba (opcional)
docker exec -it postgres-tareas psql -U postgres -d tareas_db -c "
INSERT INTO tasks (title, description) VALUES 
('Estudiar JavaScript', 'Completar módulo de backend con Node.js'),
('Aprender Docker', 'Entender contenedores y PostgreSQL');
"
```

## Endpoints de la API

| Método   | Endpoint         | Descripción                    |
| -------- | ---------------- | ------------------------------ |
| `GET`    | `/api/tasks`     | Obtener todas las tareas       |
| `GET`    | `/api/tasks/:id` | Obtener una tarea por ID       |
| `POST`   | `/api/tasks`     | Crear una nueva tarea          |
| `PUT`    | `/api/tasks/:id` | Actualizar una tarea existente |
| `DELETE` | `/api/tasks/:id` | Eliminar una tarea             |


## Estructura del Proyecto

```shell
Gestor-tareas-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── tasks.controllers.js
│   │   ├── routes/
│   │   │   └── tasks.routes.js
│   │   ├── db.js
│   │   └── index.js
│   ├── database/
│   │   └── db.sql
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskItem.js
│   │   │   └── TaskList.js
│   │   ├── services/
│   │   │   └── taskService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
│
├── screenshots/
│   ├── 01-Contenedor docker corriendo con la BD tareas en el puerto 5432.png
│   ├── 02-GET obteniendo todas las tareas.png
│   ├── 03-GET por ID especifico.png
│   ├── 04-GET por ID no existente.png
│   ├── 05-POST creando una nueva tarea.png
│   ├── 06-PUT actualizando tarea 1.png
│   ├── 07-DELETE eliminando tarea 4.png
│   ├── 08-Lista final actualizada utilizando un ORDER BY con id ASC.png
│   ├── 09-Gestor de Tareas con una ultima tarea creada y descripción tarea 3 actualizada.png
│   
│
└── README.md
