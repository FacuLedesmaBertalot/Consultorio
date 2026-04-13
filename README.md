# 🏥 Sistema de Gestión de Citas Médicas (MERN)

Este proyecto es una solución integral para la gestión de turnos médicos, permitiendo que los pacientes agenden citas de manera eficiente y los médicos administren su agenda profesional a través de un panel autenticado.

---

## 🚀 Tecnologías Utilizadas

El software está construido sobre el **Stack MERN**:

* **MongoDB**: Base de datos NoSQL para el almacenamiento de citas y usuarios.
* **Express.js**: Framework de servidor para la gestión de la API REST.
* **React**: Interfaz de usuario dinámica y reactiva.
* **Node.js**: Entorno de ejecución para el backend.
* **JWT (JSON Web Tokens)**: Implementación de seguridad para el acceso de médicos.

---

## ✨ Funcionalidades Principales

### 👤 Para Pacientes

* **Agendamiento de Citas**: Selección de turnos específicos con fecha y hora.
* **Registro de Datos**: Persistencia de la información del paciente vinculada a su consulta.

### 👨‍⚕️ Para Médicos

* **Sistema de Autenticación**: Login seguro para acceder a la gestión privada.
* **Panel de Control**: Visualización y seguimiento de los turnos programados en tiempo real.

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/FacuLedesmaBertalot/Consultorio
cd Consultorio
```

---

### 2. Configuración del Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` en la carpeta `backend` con las siguientes variables:

```env
PORT=4000
MONGO_URI=tu_conexion_mongodb
JWT_SECRET=tu_clave_secreta
```

Inicia el servidor:

```bash
npm run dev
```

---

### 3. Configuración del Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 📁 Estructura del Proyecto

```
/backend
  ├── models        # Modelos de datos (Mongoose)
  ├── controllers   # Lógica de negocio
  ├── routes        # Rutas de la API
  └── config        # Configuración (DB, JWT, etc.)

/frontend
  ├── components    # Componentes de React
  ├── hooks         # Hooks personalizados
  ├── services      # Consumo de API
  └── pages         # Vistas principales
```

---

## 📌 Notas

* Asegúrate de tener instalado **Node.js** y **MongoDB** en tu sistema.
* Puedes usar **MongoDB Atlas** como alternativa en la nube.

---

## 👨‍💻 Autor

Desarrollado por **[Facundo Ledesma]**
