import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = 3000;

app.use('/Public', express.static(path.join(dirname, 'Public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(dirname, 'views', 'contact.html'));
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});