// Importamos las funciones y objetos que vamos a testear desde el archivo suma.js
const {
  sumaejemplo,    // Función para sumar dos números (ejemplo)
  suma,           // Otra función para sumar
  objcarro,       // Función que crea un objeto carro
  verificaValor,  // Función que verifica distintos tipos de valores (null, undefined, definido)
  comparar,       // Función que devuelve un número para comparar
  receta,         // Función que devuelve una cadena de texto (una receta)
  piezasMT,       // Función que devuelve un arreglo con piezas
  numerosCom,     // Función que devuelve un número para comparar
  exito,          // Función que retorna una promesa que se resuelve correctamente
  fracaso         // Función que retorna una promesa que se rechaza
} = require('./suma.js');

// Test que verifica que la suma de 1 + 2 es igual a 3 usando la función sumaejemplo
test('suma 1 + 2 es igual a 3', () => {
  expect(sumaejemplo(1, 2)).toBe(3);  // toBe hace comparación estricta (===)
});

// a. Test que verifica que 10 + 10 es igual a 20 usando la función suma
test('10 + 10 es igual a 20', () => {
  expect(suma(10, 10)).toBe(20);  // toBe para igualdad estricta entre números
});

// b. Test que compara dos objetos para ver si son iguales en contenido (no referencia)
test('Los carros deben ser iguales', () => {
  const carro1 = objcarro('Azul', 'Ford', 2010);  // Creamos un objeto con la función
  const carro2 = {color: 'Azul', modelo: 'Ford', año: 2010}; // Objeto literal igual
  expect(carro1).toEqual(carro2);  // toEqual compara recursivamente las propiedades
});

// c. Test para verificar distintos tipos de valores (null, undefined y definido)
test('Verificar valores nulos, indefinidos y definidos', () => {
  expect(verificaValor('nulo')).toBeNull();        // Espera que el resultado sea null
  expect(verificaValor('indefinido')).toBeUndefined(); // Espera undefined
  expect(verificaValor('valor')).toBeDefined();    // Espera que el valor esté definido (no null ni undefined)
});

// d. Test para comparaciones numéricas con diferentes matchers
test('comparacion de numeros', () => {
  const num = comparar();  // Obtenemos un número para evaluar
  expect(num).toBeGreaterThan(3);           // num > 3
  expect(num).toBeGreaterThanOrEqual(5);    // num >= 5
  expect(num).toBeLessThan(10);              // num < 10
});

// e. Test que verifica que la cadena que devuelve receta contiene la palabra "cilantro"
test('La receta contiene "cilantro"', () => {
  expect(receta()).toMatch(/cilantro/);  // toMatch con expresión regular busca coincidencia
});

// f. Test para verificar que un array contiene un elemento específico ('luces')
test('Lista de piezas tiene luces', () => {
  expect(piezasMT()).toContain('luces');  // toContain verifica que el array incluya 'luces'
});

// g. Test para verificar que un número NO sea igual a 5 (negación con .not)
test('Numero no es igual a 5', () => {
  expect(numerosCom()).not.toBe(5);  // .not invierte la condición del matcher toBe
});

// h. Tests para funciones que retornan promesas (asincronía)

// Test para promesa que se resuelve exitosamente con valor 'éxito'
test('Promesa exitosa', () => {
  return expect(exito()).resolves.toBe('éxito');  // Espera que la promesa se resuelva con 'éxito'
});

// Test para promesa que se rechaza con valor 'fracaso'
test('Promesa fracasada', () => {
  return expect(fracaso()).rejects.toBe('fracaso'); // Espera que la promesa sea rechazada con 'fracaso'
});
