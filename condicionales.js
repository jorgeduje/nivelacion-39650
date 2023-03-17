
let nombre = "juan"

// LOGICA BOOLEANA


const probando = ( ...numeros )=>{

    // []
    // if( nombre === "juan" ){
    //     return "se cumple la condicion"
    // }

    // // OPERADOR TERNARIO 
    // return nombre === "juan" ? "se cumple la condicion" : "no se cumple"

    // OPERADOR AND
    return nombre === "juan" && "se cumple la condicion" 


}

console.log( probando( 12, 14, 16 ) )

// // OR ---> o ( || )
// DEVUELVE EL PRIMER TRUE O EL ULTOMO FALSE

// // AND --> > y ( && )
// SE QUEDA CON EL ULTIMO TRUE, O CON EL PRIMER FALSE

let esTrue = 1 < 2 && 6 < 10 && "soy un true"

console.log( esTrue )