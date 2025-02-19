
// Función para sumar
function suma(a, b) {
    return a + b;
  }
  
  // Función para restar
  function resta(a, b) {
    return a - b;
  }
  
  // Función para multiplicar
  function multiplicacion(a, b) {
    return a * b;
  }
  
  // Función para dividir
  function division(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero.");
    }
    return a / b;
  }
  
  // Exportamos las funciones
  module.exports = { suma,resta,multiplicacion,division,};
  