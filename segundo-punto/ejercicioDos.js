/*
Cree un programa que calcule el promedio de 10 números.
 */
let numeros = [10];
let promedio;
let contador = 0;
for (let i = 0; i < 10; i++){
    numeros[i] = i;
    contador += numeros[i];
    console.log(numeros[i]);
}
promedio = contador/10;
console.log("El promedio es: ", promedio);
console.log("----------------------------");
/*
Cree un programa que muestre el promedio de n números, dejándose de solicitar números
cuando se introduzca el cero.
*/
console.log("Recuerde que para finalizar puede oprimir el número 0");
let contadorDos = 0;
let contadorTres = -1;
let numero;
do {
    numero = parseFloat(prompt("Ingrese un número: "));
    contadorDos += numero;
    contadorTres++;
} while (numero != 0);
console.log("El promedio es: ", contadorDos/contadorTres);
console.log("---------------------------------------");
/*
12.Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
*/
let rango = parseInt(prompt("Ingrese el rango: "));
let resultado = 0;
for (let i = 1; i <= rango; i++){
    resultado += i**2;
    console.log(resultado);
}
console.log("La suma de los cuadrados es: ", resultado);


