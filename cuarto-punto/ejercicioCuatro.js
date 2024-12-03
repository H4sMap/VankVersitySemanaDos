// /*
// 2. Se denomina número reversible a aquél que al ser sumado a sí mismo tras invertir sus dígitos da
// como resultado un número en el que todos los dígitos son impares. Por ejemplo, el número 36 es reversible pues
// 36 + 63 = 99, y los dos dígitos de 99 son impares. También lo son el 409 y el 904. Crea un programa que reciba
// un número entre 0 y 999 y retorne como salida true si el número es reversible o false si no lo es.
// */
// // let numero;
// // do {
// //     numero = parseInt(prompt("Ingresa tu número: "));
// // } while (numero < 0 || numero > 999);

// // let numeroInvertido = parseInt(numero.toString().split('').reverse().join(''));
// // let suma = numero + numeroInvertido;

// // let stringSuma = suma.toString();
// // let reversible = true;

// // for (let i = 0; i < stringSuma.length; i++) {
// //     let digito = parseInt(stringSuma[i]);
// //     if (digito%2 === 0) {
// //         reversible = !reversible;
// //         break
// //     }
// // }
// // console.log(reversible);
// // console.log("---------------");
// /*
// Se trata de implementar un programa que devuelva la cantidad de ocurrencias del dígito que más se repite en
// un número entero no negativo. Por ejemplo, para el caso de 343331 el número que más se repite es 3, por ende
// se debe devolver 4, que es la cantidad de ocurrencias del 3.
// */
// let numero;

// do {
//     numero = parseInt(prompt("Ingresa tu número: "));
// } while (numero < 0);

// let stringNumero = numero.toString();
// let valor = stringNumero[0];
// let contador = 1;
// let contadorComp = 1;

// for (let i = 1; i < stringNumero.length; i++) {
//     if (valor == stringNumero[i]) {
//         contador++;
//     } else {
//         valor = stringNumero[i];
//         contador = 1;
//     }
//     if (contador > contadorComp) {
//         contadorComp = contador;
//     }
// }
// console.log("La secuencia más larga de dígitos consecutivos del número ", numero, " es: ", contadorComp);
// console.log("-------------");
/*
Usted es contratado por la empresa SoftwareCorp S.A. para crear un conjunto de programas de apoyo.

Construir un programa que reciba tres números de un dígito y los combine mostrando todos los posibles
números pares que se pueden construir con estos tres.
*/
let numeroUno;
let numeroDos;
let numeroTres;

do {
    numeroUno = parseInt(prompt("Ingrese el número uno: "));
} while (numeroUno > 9 || numeroUno < -9);

do {
    numeroDos = parseInt(prompt("Ingrese el número dos: "));
} while (numeroDos > 9 || numeroDos < -9);

do {
    numeroTres = parseInt(prompt("Ingrese el número tres: "));
} while (numeroTres > 9 || numeroTres < -9);

let cadenaUno = numeroUno.toString();
let cadenaDos = numeroDos.toString();
let cadenaTres = numeroTres.toString();

let cadenaFinal = cadenaUno + cadenaDos + cadenaTres;

let cadena = [];

for (let i = 0; i < cadenaFinal.length; i++) {
    cadena = [i].push();
    for (let j = 0; j < cadenaFinal.length; j++) {
        if (cadenaFinal[i] == cadena[j]) {
            cadena[i] = cadena[j];
        }
    }
}
console.log(cadena);