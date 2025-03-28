import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const temas = `[
{
        "id": "001",
        "nombre": "Programacion en JavaScript",
        "descripcion": "Aprende los fundamentos de JavaScript, incluyendo variables, funciones y eventos.",
        "palabrasClaves": ["variables", "funciones", "eventos", "DOM"],
        "practicas": [
            {
                "nombre": "Practica 1: Manipulacion del DOM",
                "descripcion": "Crea dinámicamente elementos HTML mediante JavaScript.",
                "objetivo": "Comprender cómo interactuar con el DOM." 
            },
            {
                "nombre": "Practica 2: Uso de Fetch API",
                "descripcion": "Realiza peticiones a APIs externas y muestra los datos en la interfaz.",
                "objetivo": "Aprender a consumir APIs con JavaScript." 
            }
        ]
    },    {
        "id": "002",
        "nombre": "Estructuras de Datos y Algoritmos",
        "descripcion": "Explora las estructuras de datos fundamentales y algoritmos esenciales para la informática.",
        "palabrasClaves": ["Listas Enlazadas", "Pilas", "Colas", "Árboles", "Grafos"],
        "practicas": [
            {
                "nombre": "Práctica 1: Implementación de Listas Enlazadas",
                "descripcion": "Desarrolla una estructura de lista enlazada en un lenguaje de programación.",
                "objetivo": "Comprender el funcionamiento de las listas enlazadas."
            },
            {
                "nombre": "Práctica 2: Búsqueda y Ordenamiento",
                "descripcion": "Implementa algoritmos como búsqueda binaria, Quick Sort y Merge Sort.",
                "objetivo": "Analizar la eficiencia de algoritmos de búsqueda y ordenamiento."
            }
        ]
    },
    {
        "id": "003",
        "nombre": "Redes de Computadoras",
        "descripcion": "Comprende los fundamentos de redes, protocolos y comunicación entre dispositivos.",
        "palabrasClaves": ["TCP/IP", "OSI", "DNS", "HTTP", "Subredes"],
        "practicas": [
            {
                "nombre": "Práctica 1: Configuración de Redes Locales",
                "descripcion": "Configura una red local con direccionamiento IP y subredes.",
                "objetivo": "Aprender a asignar direcciones IP y configurar una red básica."
            },
            {
                "nombre": "Práctica 2: Simulación de Protocolos",
                "descripcion": "Utiliza herramientas como Wireshark para analizar el tráfico de red.",
                "objetivo": "Comprender cómo funcionan los protocolos de red."
            }
        ]
    },
    {
        "id": "004",
        "nombre": "Ciberseguridad y Protección de Datos",
        "descripcion": "Estudia amenazas cibernéticas y estrategias de protección en entornos informáticos.",
        "palabrasClaves": ["Firewalls", "Criptografía", "Pentesting", "Phishing", "Malware"],
        "practicas": [
            {
                "nombre": "Práctica 1: Análisis de Vulnerabilidades",
                "descripcion": "Utiliza herramientas de escaneo para detectar vulnerabilidades en sistemas.",
                "objetivo": "Identificar posibles brechas de seguridad en aplicaciones y redes."
            },
            {
                "nombre": "Práctica 2: Cifrado de Datos",
                "descripcion": "Implementa algoritmos de cifrado como AES y RSA.",
                "objetivo": "Comprender cómo funciona la criptografía en la seguridad informática."
            }
        ]
    },
    {
        "id": "005",
        "nombre": "Bases de Datos y SQL",
        "descripcion": "Aprende a modelar, diseñar y gestionar bases de datos relacionales y no relacionales.",
        "palabrasClaves": ["SQL", "NoSQL", "Normalización", "Índices", "Stored Procedures"],
        "practicas": [
            {
                "nombre": "Práctica 1: Diseño de Bases de Datos Relacionales",
                "descripcion": "Crea un esquema de base de datos siguiendo las reglas de normalización.",
                "objetivo": "Diseñar estructuras eficientes para almacenamiento de datos."
            },
            {
                "nombre": "Práctica 2: Consultas SQL Avanzadas",
                "descripcion": "Escribe consultas SQL con joins, subconsultas y funciones agregadas.",
                "objetivo": "Aprender técnicas avanzadas de manipulación de datos en SQL."
            }
        ]
    },
    {
        "id": "006",
        "nombre": "Sistemas Operativos",
        "descripcion": "Explora el funcionamiento de sistemas operativos, su estructura y gestión de recursos.",
        "palabrasClaves": ["Procesos", "Memoria", "Sistemas de Archivos", "Multitarea", "Shell Scripting"],
        "practicas": [
            {
                "nombre": "Práctica 1: Gestión de Procesos",
                "descripcion": "Monitorea y administra procesos en un sistema operativo.",
                "objetivo": "Comprender la administración de procesos en sistemas operativos."
            },
            {
                "nombre": "Práctica 2: Automatización con Shell Scripting",
                "descripcion": "Desarrolla scripts para automatizar tareas en Linux.",
                "objetivo": "Aprender a utilizar comandos y scripts en sistemas Unix/Linux."
            }
        ]
    }
]`;

const temaJson = JSON.parse(temas);
console.log(temaJson);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/tema/:type', (req, res)=>{
    const tipoTema = temaJson.find(t => t.nombre.toLowerCase()=== req.params.type.toLowerCase());
    res.json(tipoTema || { error: "Tema no existe"});
});

app.listen(port, ()=> {
    console.log("Servidor corriendo en http://localhost:3000");
});