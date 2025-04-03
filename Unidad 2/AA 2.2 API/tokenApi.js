import axios from 'axios';

// Credenciales de prueba
const credentials = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
};

// Función para autenticar y obtener el token
async function authenticate() {
    try {
        const response = await axios.post('https://reqres.in/api/login', credentials);
        const token = response.data.token;
        console.log("Token obtenido:", token);
        
        // Usar el token para acceder a datos protegidos
        await accessProtectedResource(token);
        
        // Probar con un token inválido
        await accessProtectedResource("QpwL5tke4Pnpja7X4fAG");
    } catch (error) {
        console.error("Error en la autenticación:", error.response ? error.response.data : error.message);
    }
}

// Función para acceder a recursos protegidos con el token
async function accessProtectedResource(token) {
    try {
        const response = await axios.get('https://reqres.in/api/users/2', {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Acceso exitoso a datos protegidos:", response.data);
    } catch (error) {
        console.error("Error al acceder a datos protegidos:", error.response ? error.response.data : error.message);
    }
}

// Ejecutar autenticación
authenticate();
