import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
    console.log (req.body);
    res.send("Formulario enviado");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`); 
});