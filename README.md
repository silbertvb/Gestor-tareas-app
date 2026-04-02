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
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Autor](#autor)

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
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Node.js | v18+ | Entorno de ejecución |
| Express.js | 4.x | Framework para API RESTful |
| PostgreSQL | 17 | Base de datos relacional |
| Docker | Latest | Contenedor para PostgreSQL |
| pg | 8.x | Cliente de PostgreSQL para Node.js |
| dotenv | 16.x | Variables de entorno |
| cors | 2.x | Permitir peticiones del frontend |

### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 18.x | Framework de interfaz de usuario |
| Axios | 1.x | Peticiones HTTP al backend |
| CSS3 | - | Estilos y diseño responsivo |

### Desarrollo
| Tecnología | Propósito |
|------------|-----------|
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| npm | Manejador de paquetes |

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
