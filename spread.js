
// COPIAS POR VALOR  o POR REFERENCIA

let a = 1
let b = a // 1

console.log(b)

// a = a + 1
a += 1

console.log( b )


// SPREAD OBJETOS

let auto = {
    marca: "vw",
    modelo: 2015
}

// let autoNuevo = auto // REFERENCIA

// console.log( autoNuevo.marca )

// auto.marca = "bmw"

// console.log( autoNuevo.marca )

let autoNuevo = {...auto, color: "rojo"}

console.log( autoNuevo.marca)

auto.marca = "audi"

console.log( autoNuevo.marca )

console.log(autoNuevo)



// SPREAD ARREGLOS

let numeros = [1, 5, 2, 6]

// let copiaNumeros = numeros

// // console.log( copiaNumeros )

// copiaNumeros.push(60)

// console.log( numeros )

let copiaNumeros = [...numeros]

console.log(copiaNumeros)

copiaNumeros.push(120)

console.log( numeros )
console.log( copiaNumeros )


let cart = [
    {
        name: "notebook",
        price: 100
    }
]

let nuevoProducto = {
    name: "tablet",
    price: 50
}

let newCart = [...cart, nuevoProducto]
console.log(newCart)


// function sumar (){

// }

// <button onClick={sumar}>Sumar</button>