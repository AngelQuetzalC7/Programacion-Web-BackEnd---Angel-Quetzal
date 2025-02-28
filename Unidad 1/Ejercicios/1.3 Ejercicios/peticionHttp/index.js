import express from 'express';

const app = express();
const port =  3000;

app.get("/", (req, res) =>{
   res.send("<h1>respuesta GET</h1>")
});
app.post("/registro", (req, res) =>{
    res.sendStatus(201);
 });
 app.put("/usuario/actualizar", (req, res) =>{
    res.sendStatus(200);
    res.send("<h1>Usuario actualizado</h1>");
 });
 app.patch("/usuario/modificar", (req, res) =>{
    res.sendStatus(200);
    res.send("<h1>Usuario modificado</h1>");
 });
 app.delete("/usuario/borrar", (req, res) =>{
    res.sendStatus(200);
    res.send("<h1>Usuario borrado</h1>");
 });

app.listen (port, () =>{
    console.log ("Servidor Corriendo en http://localhost:3000")
    } 
);
