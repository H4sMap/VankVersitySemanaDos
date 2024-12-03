// /*
// a. La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
// según se indique al momento de ejecutar el programa.*/
// let longitud = parseInt(prompt("Ingresa la longitud de la cadena: "));
// let base = prompt("Que base deseas escoger: A-T-C-G").toUpperCase();
// let cadena = [longitud];
// if (base == "A" || base == "T" || base == "C" || base == "G") {
//     for (let i = 0; i < longitud; i++) {
//         cadena[i] = base;
//     }
//     console.log("La base creada es: ", cadena.join(''));
// } else {
//     console.log("Error al crear la cadena, por favor verifique los datos");
// }
// console.log("------------");
// /*
// La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
// cualquier posición y orden dentro de la cadena.
// */
// let baseA = "A";
// let baseT = "T";
// let baseC = "C";
// let baseG = "G";
// let cadenaDos = [longitud];
// let letra;
// let letraDos;
// for (let i = 0; i < longitud; i++) {
//     if (letra == letraDos) {
//         let random = Math.floor(Math.random() * 4) + 1;
//         if (random == 1) {
//             cadenaDos[i] = baseA;
//         } else if (random == 2) {
//             cadenaDos[i] = baseT;
//         } else if (random == 3) {
//             cadenaDos[i] = baseC;
//         } else {
//             cadenaDos[i] = baseG;
//         }
//         letra = cadenaDos[i];
//         letraDos = cadenaDos[0];
//     } else {
//         let randomDos = Math.floor(Math.random() * 2) + 1;
//         if (randomDos == 1) {
//             cadenaDos[i] = letra;
//         } else {
//             cadenaDos[i] = letraDos;
//         }
//     }
// }
// console.log("La base dos creada es: ", cadenaDos.join(''));
// console.log("-----------------");

// /*
// La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: la
// cantidad de Citosina (C) es cuatro veces la cantidad de Guanina, Timina (T) es dos veces la cantidad de
// Guanina y Adenina (A) es tres veces la cantidad de Guanina. La cadena debe tener cuatro bases.
// El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se
// cumple, el programa debe informar y solicitar nuevamente los datos.
// */
// let longitudDos;
// do {
//     longitudDos = parseInt(prompt("Ingresa una longitud múltiplo de 10: "));
// } while (longitudDos % 10 !== 0);

// let guanina = longitudDos / 10;
// let timina = guanina * 2;
// let adenina = guanina * 3;
// let citosina = guanina * 4;
// let cadenaTres = [];

// for (let i = 0; i < guanina; i++) {
//     cadenaTres.push("G");
// }
// for (let i = 0; i < timina; i++) {
//     cadenaTres.push("T");
// }
// for (let i = 0; i < adenina; i++) {
//     cadenaTres.push("A");
// }
// for (let i = 0; i < citosina; i++) {
//     cadenaTres.push("C");
// }

// for (let i = cadenaTres.length - 1; i >= 0; i--) {
//     let j = Math.floor(Math.random() * i + 1);
//     [cadenaTres[i], cadenaTres[j]] = [cadenaTres[j], cadenaTres[i]];
// }

// console.log("La cadena tres es: ", cadenaTres.join(''));

// console.log("--------------");
// /*
// Cristiano, un joven investigador del LabSADN, necesita un conjunto de programas que le ayuden a
// generar e imprimir cadenas de ADN de una longitud indicada por el y además que dichas cadenas
// cumplan ciertas condiciones. Cada uno de los siguientes puntos debe ser un programa diferente.

// La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente), pero indicando el
// porcentaje de la primera base, de tal forma que el porcentaje de la segunda, sea el complemento
// para completar la longitud indicada. El programa debe impedir que el porcentaje ingresado sea menor a 0% y
// mayor al 99%. Para garantizar por lo menos un 1% para la segunda base. Si esta condición no se cumple, el
// programa debe informar y solicitar nuevamente los datos.
// */
// let porcentaje;
// let cadenas = 10;
// let cadenaCuatro = [];
// let longitudTres;

// let randomSUno = Math.floor(Math.random() * 4) + 1;
// let randomSDos = Math.floor(Math.random() * 4) + 1;

// let variableUno;
// let variableDos;

// do {
//     randomSDos = Math.floor(Math.random() * 4) + 1;
// } while (randomSUno == randomSDos);

// console.log(randomSUno, "AAAAAA", randomSDos);

// do {
//     porcentaje = parseFloat(prompt("Ingresa el % de la primera base: "));
//     longitudTres = parseFloat(prompt("Ingrese la longitud: "));
// } while (porcentaje > 99 || porcentaje < 1);

// let cantidadBase = Math.floor((longitudTres * (porcentaje / 100)));

// switch (randomSUno) {
//     case 1:
//         variableUno = "G";
//         console.log(variableUno);
//         break;
//     case 2:
//         variableUno = "T";
//         console.log(variableUno);
//         break;
//     case 3:
//         variableUno = "A";
//         console.log(variableUno);
//         break;
//     default:
//         variableUno = "C";
//         console.log(variableUno);
//         break;
// }

// switch (randomSDos) {
//     case 1:
//         variableDos = "G";
//         console.log(variableDos);
//         break;
//     case 2:
//         variableDos = "T";
//         console.log(variableDos);
//         break;
//     case 3:
//         variableDos = "A";
//         console.log(variableDos);
//         break;
//     default:
//         variableDos = "C";
//         console.log(variableDos);
//         break;
// }

// for (let i = 0; i < cantidadBase; i++) {
//     cadenaCuatro.push(variableUno);
// }

// for (let i = 0; i < longitudTres - cantidadBase; i++) {
//     cadenaCuatro.push(variableDos);
// }

// for (let i = cadenaCuatro.length - 1; i >= 0; i--) {
//     let j = Math.floor(Math.random() * i + 1);
//     [cadenaCuatro[i], cadenaCuatro[j]] = [cadenaCuatro[j], cadenaCuatro[i]];
// }

// console.log("LA cadena 4 es: ", cadenaCuatro.join(''));
// console.log("-------------------");
//console.log("Ejercicios punto 3-2B")
/*
a. Determinar la primera posición en la que la segunda secuencia está dentro de la primera. Si no aparece debe
imprimir -1.
*/
const secuenciaUno = "TAAATA";
let posiciones = [];
let contador = 0;
console.log("La cadena principal es: ", secuenciaUno);
let secuenciaDos = prompt("Ingresa la cadena a buscar: ").toUpperCase();

if (secuenciaUno.indexOf(secuenciaDos) !== -1) {
    console.log("La cadena: ", secuenciaDos, " se encuentra por primera vez en la posición: ", secuenciaUno.indexOf(secuenciaDos));
} else {
    console.log(-1);
}
console.log("-----");

/*
b. Determinar cuántas veces está la segunda secuencia dentro de la primera. Si no aparece debe imprimir 0.
*/
let contadorDos = 0;
let posicion = secuenciaUno.indexOf(secuenciaDos);

while (posicion !== -1) {
    contadorDos++;
    posicion = secuenciaUno.indexOf(secuenciaDos, posicion + 1);
}

console.log("La secuencia se repite: ", contadorDos);

/*
Claudia, una investigadora invitada de otro laboratorio necesita otros programas sobre una cadena dada como
constante en el programa y otra de menor tamaño ingresada por ella:
Finalmente la directora del laboratorio quiere un programa que:
a. Dada una cadena ingresada como constante en el programa, mostrarla en formato de frecuencia de
bases consecutivas, es decir si la secuencia es "AAAGTCCAGGTTTT" la salida debe ser
"A3,G1,T1,C2,A1,G2,T4"
*/
const cadenaConstante = prompt("Ingresa la cadena para conocer las bases consecutivas: ").toUpperCase();
let base = cadenaConstante[0];
let contadorTres = 0;
let consecutivas = [];

for (let i = 0; i < cadenaConstante.length; i++) {
    if (cadenaConstante[i] == base) {
        contadorTres++;
    } else {
        consecutivas.push(base + contadorTres);
        base = cadenaConstante[i];
        contadorTres = 1;
    }
}
consecutivas.push(base + contadorTres);
console.log("Cadena original: ", cadenaConstante);
console.log("Cadena generada: ", consecutivas.join('-'));
