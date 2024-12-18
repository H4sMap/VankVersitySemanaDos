/*
Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.
*/
//Ejercicio uno
let numeroPar = parseInt(prompt("Ingrese un número: "));
//Condicional
console.log("Con condicional");
if (numeroPar % 2 == 0) {
    console.log("El número ", numeroPar, " es par");
} else {
    console.log("El número ", numeroPar, " es impar");
}
//Switch Case
console.log("Con Switch case");
switch (numeroPar % 2 == 0) {
    case true:
        console.log("El número ", numeroPar, " es par");
        break;

    default:
        console.log("El número", numeroPar, " es impar");
        break;
}
console.log("-----------------");
/*
Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/
let divisible = parseInt(prompt("Ingrese un número: "));
//Condicional
console.log("Con condicional");
if (divisible % 5 == 0) {
    console.log("El número ", divisible, " es divisible por 5");
} else {
    console.log("El número ", divisible, " no es divisible por 5");
}
//Case
console.log("Con Switch case");
switch (divisible % 5 == 0) {
    case true:
        console.log("El número ", divisible, " es divisible por 5");
        break;

    default:
        console.log("El número ", divisible, " no es divisible por 5");
        break;
}
console.log("-----------------");
/*
Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/
let isPrimo = parseInt(prompt("Ingrese un número: "));
let contador = 0;
for (let i = 2; i <= isPrimo / 2; i++) {
    if (isPrimo % i == 0) {
        contador++;
    }
}
//Condicional
console.log("Con condicional");
if (contador > 0 || isPrimo == 0 || isPrimo == 1) {
    console.log("El número ", isPrimo, " no es primo");
} else {
    console.log("El número ", isPrimo, " es primo");
}
//Case
console.log("Con Switch case");
switch (contador > 0 || isPrimo == 0 || isPrimo == 1) {
    case true:
        console.log("El número ", isPrimo, " no es primo");
        break;

    default:
        console.log("El número ", isPrimo, " es primo");
        break;
}
