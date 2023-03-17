// ANCHOR ---> Desestructuracion de objetos

let persona = {
  nombre: "pepito",
  edad: 22,
  esCasado: true,
  direccion: {
    calle: "españa",
    numero: 22,
  },
};

//  importa el nombre pero NO el orden
let { edad, nombre, esCasado, direccion } = persona;
// let { calle, numero } = direccion;

console.log(direccion.calle)

console.log(edad);

edad = 12

console.log(edad)

console.log("---------------")
// ANCHOR ---> Desestructuracion de arreglos

let palabras = ["maria", "pepe", "juancito", "carmen"]

// console.log( palabras[2] )

// console.log( palabras[0] )

//  importa el orden y NO el nombre
let [ , , nombree ] = palabras

console.log(nombree)