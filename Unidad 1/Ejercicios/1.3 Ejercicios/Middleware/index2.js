import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const port = 3000;
const app = express();
var nombreEquipo = "";

app.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, next){
  console.log(req.body);
  nombreEquipo = req.body["nombre"] + req.body["modelo"];
next();
}

app.use(registrador);

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
  res.send(`<h1>El nombre del usuario es: </h1> <h2>${nombreEquipo}<h2>`);
    //console.log (req.body);   
    // res.send("Formulario enviado");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`); 
});