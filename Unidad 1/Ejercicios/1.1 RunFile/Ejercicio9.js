// Crea un módulo que contenga funciones matemáticas básica (suma, resta, etc.) y utilízalo en otro archivo.


// Importamos el módulo de funciones matemáticas
const modulo = require('./Modulo.js');

// Utilizamos las funciones
const num1 = 20;
const num2 = 10;

console.log(`Suma: ${modulo.suma(num1, num2)}`);
console.log(`Resta: ${modulo.resta(num1, num2)}`);
console.log(`Multiplicación: ${modulo.multiplicacion(num1, num2)}`);

try {
  console.log(`División: ${modulo.division(num1, num2)}`);
} catch (error) {
  console.error(error.message);
}
