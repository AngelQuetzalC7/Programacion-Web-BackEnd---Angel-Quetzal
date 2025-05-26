//Ejemplo de suma que dejo la maestra
function sumaejemplo (a, b){
    return a + b;
}
// a. Función que suma dos números, para probar igualdad exacta con toBe
function suma(c, d) {
    return c + d;  // Retorna la suma de c y d
}

// b. Función que crea un objeto carro con propiedades color, modelo y año
function objcarro(color, modelo, año) {
    // Retorna un objeto con las propiedades usando la sintaxis abreviada
    return { color, modelo, año };
}

// c. Función que devuelve diferentes tipos de valores según el parámetro recibido
function verificaValor(tipo) {
    if (tipo === 'nulo') return null;            // Retorna null si recibe 'nulo'
    if (tipo === 'indefinido') return undefined; // Retorna undefined si recibe 'indefinido'
    return 'valor';                              // Retorna un string para cualquier otro caso
}

// d. Función que retorna un número para pruebas de comparación numérica
function comparar() {
    return 5;  // Retorna el número 5 para comparaciones
}

// e. Función que retorna una cadena con una receta, para verificar coincidencia de texto
function receta() {
    return "La salsa contiene cilantro y cebolla";  // Cadena con la palabra "cilantro"
}

// f. Función que retorna un arreglo con piezas de un auto u objeto
function piezasMT() {
    return ['llanta', 'rin', 'luces', 'clutch'];  // Arreglo que contiene 'luces' entre otros elementos
}

// g. Función que retorna un número para hacer una prueba con negación de matcher
function numerosCom() {
    return 4;  // Retorna el número 3 (para que no sea igual a 5 en la prueba)
}

// h. Funciones que retornan promesas para pruebas asincrónicas

// Retorna una promesa que se resuelve exitosamente con el string "éxito"
function exito() {
    return Promise.resolve("éxito");
}

// Retorna una promesa que se rechaza con el string "fracaso"
function fracaso() {
    return Promise.reject("fracaso");
}

// Exportamos todas las funciones para que puedan ser usadas en otros archivos (ej. en los tests)
module.exports = {
    sumaejemplo,
    suma,
    objcarro,
    verificaValor,
    comparar,
    receta,
    piezasMT,
    numerosCom,
    exito,
    fracaso
};