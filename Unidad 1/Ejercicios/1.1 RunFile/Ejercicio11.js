// Escribe un bloque de código que intente convertir una cadena a un numero y que maneje cualquier error que pueda ocurrir.

function convertirCadenaANumero(cadena) {
    try {
      console.log("Intentando convertir la cadena:", cadena);
  
      // Intentamos convertir la cadena a número
      const numero = parseFloat(cadena);
  
      // Verificamos si la conversión falló (NaN)
      if (isNaN(numero)) {
        throw new Error("La cadena proporcionada no es un número válido.");
      }
  
      console.log("Conversión exitosa. El número es:", numero);
      return numero;
    } catch (error) {
      // Manejamos cualquier error
      console.error("Error al convertir la cadena a número:", error.message);
      return null; // Retornamos un valor por defecto o manejamos el caso
    }
  }
  
  // Pruebas con diferentes entradas
  convertirCadenaANumero("42.5");  // Caso válido
  convertirCadenaANumero("Hola"); // Caso inválido
  convertirCadenaANumero("");     // Caso inválido
  convertirCadenaANumero("123abc"); // Caso inválido
  