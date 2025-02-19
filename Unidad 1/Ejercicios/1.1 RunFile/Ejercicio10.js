/*10-	Escribe una función que simule una operación asincrónica utilizando 
setTimeout y maneje el resultado con un callback.*/

function operacionAsincrona(numero, callback) {
    console.log("Iniciando operación asincrónica...");
  
    // Cambia el tiempo a 5000 ms (5 segundos)
    setTimeout(() => {
      const resultado = numero * 4; // Operación simulada
      callback(null, resultado);   // Llama al callback con el resultado
    }, 5000); // Ahora espera 5 segundos
  }
  
  // Usamos la función
  operacionAsincrona(6, (error, resultado) => {
    if (error) {
      console.error("Ocurrió un error:", error);
    } else {
      console.log("Resultado de la operación:", resultado);
    }
  });
  