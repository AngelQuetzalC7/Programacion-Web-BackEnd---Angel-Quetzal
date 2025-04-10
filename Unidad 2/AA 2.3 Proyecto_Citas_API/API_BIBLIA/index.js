import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Configuración de la carpeta pública en donde se encuentra todo el HTML
app.use(express.static("public"));

// Configuración del motor de plantillas
app.get('/', async (req, res) => {

    // En caso de éxito
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        const dato = result.data.value; 
        const pagina = result.data.url;
        res.render('index.ejs', {
            joke: dato,
            category: pagina,
        });
        console.log(result.data);

    // En caso de error    
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:3000/`)
})