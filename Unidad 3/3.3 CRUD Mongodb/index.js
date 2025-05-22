// Importación de módulos necesarios
import express from 'express';            // Framework web para Node.js
import dotenv from 'dotenv';              // Para manejar variables de entorno
import dbconexion from './models/conexion.js'; // Módulo de conexión a la base de datos
import acusuario from './models/usuario.model.js'; // Funciones del modelo de usuario

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express(); // Crea una aplicación de Express
const port = 3000;     // Puerto donde se ejecutará el servidor

// ----------- MIDDLEWARES ---------------
// Middleware para interpretar JSON en las solicitudes
app.use(express.json());
// Middleware para interpretar datos de formularios (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// ----------- CONEXIÓN A LA BASE DE DATOS -----------
// Se intenta conectar a la base de datos al iniciar el servidor
dbconexion.connect().catch(err => {
    console.error('Error fatal al conectar a la base de datos:', err);
    process.exit(1); // Finaliza el proceso si hay un error
});

// ----------- RUTAS DE LA API ---------------

// Ruta raíz: mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD con MongoDB');
});

// Crear un nuevo usuario (CREATE)
app.post('/usuarios', async (req, res) => {
    try {
        const usuarios = await acusuario.crearUsuario(req.body);
        res.status(201).json(usuarios); // Respuesta con el nuevo usuario creado
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

// Obtener todos los usuarios (READ - lista)
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await acusuario.obtenerUsuarios();
        res.status(200).json(usuarios); // Envía la lista de usuarios
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

// Obtener un usuario por ID (READ - individual)
app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await acusuario.obtenerUsuarioPorId(req.params.id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: "Error al obtener el usuario" });
    }
});

// Actualizar un usuario por ID (UPDATE)
app.put('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await acusuario.actualizarUsuario(req.params.id, req.body);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario); // Envía el usuario actualizado
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
});

// Eliminar un usuario por ID (DELETE)
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const eliminado = await acusuario.eliminarUsuario(req.params.id);
        if (!eliminado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
});

// ----------- INICIO DEL SERVIDOR ---------------
// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
