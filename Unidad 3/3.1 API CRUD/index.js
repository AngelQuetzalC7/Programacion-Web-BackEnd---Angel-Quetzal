import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Usuario from "./models/usuario.model.js";

dotenv.config();

const app = express();
const port = 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.send('Bienvenido en mi API CRUD');
})

app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error){
        console.error("Error al crear el usuario:", error);
        res.status(500).json({error: "Error al crear el usuario"});
    } 
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

//define la URI 
const uri = process.env.uri;

//conectar a la base de datos
mongoose.connect(uri)
    .then(() => {
        console.log("Conexion exitosa a la base de datos");
    })
    .catch ((error) => {
        console.log("Error al conectar a la base de datos", error);
    });

    