// Agrega un método al objeto creado anteriormente e imprima una descripción del mismo.

const casco = {

    color: "Naranaja",
    certificado : "DOT-4",
    material: "Fibra de carbono",
    tipo: "Abatible",
    //Metodo para imprimir las propiedades del objeto

    mostrarInfo: function(){
        console.log(`1 caracteristica: ${this.tipo}`);
    }
};
casco.mostrarInfo();