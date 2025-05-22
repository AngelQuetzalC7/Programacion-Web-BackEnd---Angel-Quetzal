// Importa el paquete dotenv para leer variables de entorno desde un archivo .env
import dotenv from 'dotenv';
// Importa el cliente de MongoDB para establecer la conexión
import { MongoClient } from 'mongodb';

// Carga las variables de entorno definidas en el archivo .env
dotenv.config();

//Clase que gestiona la conexión a la base de datos MongoDB.
class Conexion {
    constructor() {
        // Obtiene la URI de conexión desde la variable de entorno
        this.uri = process.env.uri;
        // Verifica si la URI está definida
        if (!this.uri) {
            throw new Error('La URI de MongoDB no está configurada en las variables de entorno');
        }
        // Crea una nueva instancia de MongoClient con configuración de tiempo de espera
        this.client = new MongoClient(this.uri, {
            serverSelectionTimeoutMS: 5000,  // Tiempo máximo para seleccionar un servidor
            connectTimeoutMS: 5000           // Tiempo máximo para intentar conectar
        });
        // Variable para almacenar la base de datos una vez conectada
        this.db = null;
    }
    //Establece la conexión con MongoDB y retorna la base de datos.
    async connect() {
        try {
            // Intenta conectar el cliente a MongoDB
            await this.client.connect();
            // Obtiene la base de datos predeterminada desde la URI
            this.db = this.client.db();
            console.log('Conexión exitosa a la base de datos');// Imprime mensaje de éxito en consola
            // Retorna la instancia de la base de datos
            return this.db;
        } catch (error) { // En caso de error, imprime y lanza el error para manejo externo
            console.error('Error al conectar a la base de datos:', error);
            throw error;
        }
    }
}
const dbconexion = new Conexion();// Crea una instancia única de la clase Conexion
export default dbconexion;// Exporta la instancia para que pueda ser utilizada en otros archivos
