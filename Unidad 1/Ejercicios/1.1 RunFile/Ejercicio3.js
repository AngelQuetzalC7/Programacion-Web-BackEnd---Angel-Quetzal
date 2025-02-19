//Crear un array con al menos cinco elementos de diferentes tipos.

let array = [
    42,                       // Número
    "Hola, ¿Que haces?",      // Cadena (string)
    true,                     // Booleano
    [1, 2, 3],                // Arreglo anidado
    function saludar() { return "¡Hola desde el array!"; }, // Función
  ];
  
  // Mostrar el array completo
  console.log("Array:", array);
  
  // Mostrar cada elemento por separado
  console.log("Elemento 1 (Número):", array[0]);
  console.log("Elemento 2 (Cadena):", array[1]);
  console.log("Elemento 3 (Booleano):", array[2]);
  console.log("Elemento 5 (Arreglo anidado):", array[3]);
  console.log("Elemento 6 (Función ejecutada):", array[4]());
  