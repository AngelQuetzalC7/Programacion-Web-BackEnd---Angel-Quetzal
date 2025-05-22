import { ObjectId } from 'mongodb';// Importa ObjectId para trabajar con IDs en MongoDB
import dbconexion from './conexion.js';// Importa el módulo de conexión a la base de datos

// Define la clase Usuario para realizar operaciones CRUD
class Usuario {
    constructor() {
        // Nombre de la colección en la base de datos
        this.collectionName = 'usuarios';
        // Aquí se guardará la instancia de la colección cuando se conecte
        this.collection = null;
        // Inicializa la conexión con la base de datos
        this.initializeConnection();
    }
    // Establece conexión a la base de datos y asigna la colección
    async initializeConnection() {
        try {
            const db = await dbconexion.connect();
            this.collection = db.collection(this.collectionName);
            console.log(`Colección ${this.collectionName} lista`);
        } catch (error) {
            console.error('Error al inicializar conexión:', error);
            throw error;
        }
    }
    // Crea un nuevo usuario en la base de datos
    async crearUsuario(usuarioData) {
        // Verifica si ya se inicializó la conexión
        if (!this.collection) await this.initializeConnection();

        try {
            // Agrega campos de fecha de creación y actualización
            const usuarioConFecha = {
                ...usuarioData,
                createdAt: new Date(),
                updateAt: new Date()
            };
            // Inserta el usuario
            const result = await this.collection.insertOne(usuarioConFecha);
            // Devuelve el usuario recién insertado
            return await this.collection.findOne({ _id: result.insertedId });
        } catch (error) {
            console.error('Error en crearUsuario:', error);
            throw new Error('No se pudo crear el usuario');
        }
    }
    // Obtiene todos los usuarios de la colección
    async obtenerUsuarios() {
        if (!this.collection) await this.initializeConnection();

        try {
            return await this.collection.find().toArray(); // Devuelve todos los usuarios como array
        } catch (error) {
            console.error('Error en obtener Usuarios:', error);
            throw error;
        }
    }

    // Obtiene un usuario específico por su ID
    async obtenerUsuarioPorId(id) {
        if (!this.collection) await this.initializeConnection();

        try {
            // Verifica que el ID sea válido
            if (!ObjectId.isValid(id)) {
                throw new Error('ID no válido');
            }
            // Busca el usuario por ID
            return await this.collection.findOne({ _id: new ObjectId(id) });
        } catch (error) {
            console.error('Error en obtenerUsuarioPorId:', error);
            throw new Error('No se pudo obtener el usuario');
        }
    }
    // Actualiza un usuario existente por su ID
    async actualizarUsuario(id, updateData) {
        if (!this.collection) await this.initializeConnection();

        try {
            // Verifica que el ID sea válido
            if (!ObjectId.isValid(id)) {
                throw new Error('ID no válido');
            }
            // Agrega o actualiza la fecha de modificación
            const updateDataConFecha = {
                ...updateData,
                updateAt: new Date()
            };
            // Realiza la actualización
            const result = await this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: updateDataConFecha }
            );

            // Si no se encuentra el documento, retorna null
            if (result.matchedCount === 0) {
                return null;
            }
            // Retorna el documento actualizado
            return await this.obtenerUsuarioPorId(id);
        } catch (error) {
            console.error('Error en actualizarUsuario:', error);
            throw new Error('No se pudo actualizar el usuario');
        }
    }
    // Elimina un usuario por su ID
    async eliminarUsuario(id) {
        if (!this.collection) await this.initializeConnection();

        try {
            // Verifica que el ID sea válido
            if (!ObjectId.isValid(id)) {
                throw new Error('ID no válido');
            }

            // Elimina el usuario
            const result = await this.collection.deleteOne({ _id: new ObjectId(id) });

            // Devuelve true si se eliminó correctamente
            return result.deletedCount > 0;
        } catch (error) {
            console.error('Error en eliminarUsuario:', error);
            throw new Error('No se pudo eliminar el usuario');
        }
    }
}
// Crea una instancia del modelo Usuario para exportarla y usar en rutas
const acusuario = new Usuario();
export default acusuario;
