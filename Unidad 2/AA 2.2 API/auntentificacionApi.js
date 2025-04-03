import axios from "axios";
//Configuramos la API o nuetra llave de acceso
const key = '41c13628727a018001c38887dbb0c7b6';  // Reemplázala con tu clave API
const ciudad = 'Felipe Carrillo Puerto';

const estadodeltiempo = async () => {
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric&lang=es`);
    
    //Se imprime en consola los datos que se desean obtner por medio de la API
    console.log(`Clima en ${ciudad}:`);
    console.log(`Temperatura: ${data.main.temp}°C`);
    console.log(`Sensación térmica: ${data.main.feels_like}°C`);
    console.log(`Condición: ${data.weather[0].description}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message || error.message);
  }
};

// Ejecución
estadodeltiempo();