const fs = require("fs");
/*
fs.writeFile("archivo.txt","texto-contenido del archivo", (err)=>{
    if(err)throw err;
    console.log("El archivo se ha creado");
});*/

//modificar el texto del archivo.txt

fs.readFile('./archivo.txt','utf8', (err, data) =>{
    if(err)throw err;
    console.log(data);
});