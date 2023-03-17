
// MAP FILTER - FIND SOME

// CALLBACK ---> function


// MAP
let numeros = [ 2, 5, 7 ] // [4, 10, 14]

// let nuevoArr = []
// for (let i = 0; i < numeros.length; i++) {
    
//     nuevoArr.push( numeros[i] * 2 )
    
// }

let nuevoArr = numeros.map( (element, index)=> element * index ) // [0, 5, 14]

console.log(nuevoArr)

let numeritos = [ 12, 15, 14, 22, 34, 55]
// NUEVO ARR CON TODOS LOS ELEMENTOS MAYORES A 20 
// let arrFiltrados = []
// for (let i = 0; i < numeritos.length; i++) {
//     if(numeritos[i] > 20){
//         arrFiltrados.push( numeritos[i] )
//     }
// }
// console.log(arrFiltrados)

let arrFiltrado = numeritos.filter( (elemento)=> elemento > 20 ) // []
console.log(arrFiltrado)