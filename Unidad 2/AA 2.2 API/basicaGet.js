import axios from "axios";
const obtenerUsuario = async()=>{
    try{
        const response = await axios.get('https://reqres.in/api/users/4',{
        headers: {
            'Authorization': 'Basic' + Buffer.from('aldo.holt@reqres.in:nando').toString('base64')
        }
    });
    console.log('Datos del Usuario:', response.data);
    }catch(error){
        console.error('Error al obtener datos del usuario:', error.response.data);
    }
};

obtenerUsuario();