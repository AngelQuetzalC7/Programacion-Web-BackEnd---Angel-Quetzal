import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const recetaJSON = `[
    {
        "id": "0001",  
        "tipo": "taco",  
        "nombre": "Taco lechon",  
        "precio": 20.00,  
        "ingredientes": {  
            "proteina": {  
                "nombre": "Puerco",  
                "preparacion": "Horneado" 
            },  
            "salsa": {  
                "nombre": "Tomate verde",  
                "picor": "Medio" 
            },  
            "acompañamientos": [  
                {  
                    "nombre": "Cebolla",  
                    "cantidad": "1 cucharada",  
                    "ingredientes": ["Cebolla blanca", "Cilantro", "Naranja", "Sal"] 
                },  
                {  
                    "nombre": "Guacamole",  
                    "cantidad": "2 cucharadas",  
                    "ingredientes": ["Aguacate", "Jugo de limón", "Sal", "Cebolla", "Cilantro"] 
                } 
            ] 
        } 
    },
    {
        "id": "0002",  
        "tipo": "taco",  
        "nombre": "Conejo asado",  
        "precio": 25.00,  
        "ingredientes": {  
            "proteina": {  
                "nombre": "Conejo",  
                "preparacion": "Asada a la parrilla" 
            },  
            "salsa": {  
                "nombre": "Salsa roja",  
                "picor": "Picante" 
            },  
            "acompañamientos": [  
                {  
                    "nombre": "Pico de gallo",  
                    "cantidad": "1 cucharada",  
                    "ingredientes": ["Jitomate", "Cebolla", "Cilantro", "Limón", "Sal"] 
                },  
                {  
                    "nombre": "Frijoles refritos",  
                    "cantidad": "2 cucharadas",  
                    "ingredientes": ["Frijol bayo", "Aceite", "Cebolla", "Ajo", "Sal"] 
                } 
            ] 
        } 
    },
     {
        "id": "0008",
        "tipo": "taco",
        "nombre": "Taco de Nopales",
        "precio": 15.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Nopales",
                "preparacion": "Asados y sazonados"
            },
            "salsa": {
                "nombre": "Salsa de chile pasilla",
                "picor": "Suave"
            },
            "acompañamientos": [
                {
                    "nombre": "Queso fresco",
                    "cantidad": "50g",
                    "ingredientes": ["Leche de vaca", "Sal"]
                },
                {
                    "nombre": "Frijoles refritos",
                    "cantidad": "2 cucharadas",
                    "ingredientes": ["Frijoles negros", "Aceite"]
                }
            ]
        }
    },
    {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Taco de Bistec",
        "precio": 22.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Res",
                "preparacion": "Asado a la plancha"
            },
            "salsa": {
                "nombre": "Salsa de chile de árbol",
                "picor": "Muy picante"
            },
            "acompañamientos": [
                {
                    "nombre": "Guacamole",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Aguacate", "Cilantro", "Jitomate", "Cebolla", "Sal", "Limón"]
                },
                {
                    "nombre": "Rábano",
                    "cantidad": "2 rodajas",
                    "ingredientes": ["Rábano"]
                }
            ]
        }
    },
    {
        "id": "0005",
        "tipo": "taco",
        "nombre": "Taco de Pescado",
        "precio": 28.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Pescado",
                "preparacion": "Empanizado y frito"
            },
            "salsa": {
                "nombre": "Salsa tártara",
                "picor": "Suave"
            },
            "acompañamientos": [
                {
                    "nombre": "Repollo rallado",
                    "cantidad": "1 puñado",
                    "ingredientes": ["Repollo", "Zanahoria"]
                },
                {
                    "nombre": "Lima",
                    "cantidad": "1 rodaja",
                    "ingredientes": ["Lima"]
                }
            ]
        }
    }
]`;
const recetaTaco = JSON.parse(recetaJSON);
console.log(recetaTaco);

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetaTaco.find(r => r.ingredientes.proteina.nombre.toLowerCase()=== req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});