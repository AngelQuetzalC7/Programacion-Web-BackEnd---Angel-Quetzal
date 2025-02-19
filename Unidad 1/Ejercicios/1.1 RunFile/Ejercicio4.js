//Escribe una función que tome dos números y aplique una operación

function calcular(numero1, numero2, operacion) {
    switch (operacion) {
      case "suma":
        return numero1 + numero2;
      case "resta":
        return numero1 - numero2;
    }
}
let resultadoSuma = calcular(10, 5, "suma");
console.log("Suma:", resultadoSuma);

let resultadoResta = calcular(10, 5, "resta");
console.log("Resta:", resultadoResta);