/**Participantes:
 * -Cristian Camilo Cardenas Peña
 * -Daniel Felipe Sanabria
 * 1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero).
 */
'use strict';

console.log("Ingrese el primer número");
let Num1 = parseInt(prompt("Ingrese el primer número"));

console.log("Ingrese el segundo número");
let Num2 = parseInt(prompt("Ingrese el segundo número"));

let suma = Num1 + Num2;
let división = Num1/Num2;
let multiplicación = Num2*Num1;
let resta = Num1-Num2;
/**
 * if(Num2 !== 0){
    división=Num1/Num2
}*/
alert("La suma es: " + suma);
alert("La división es: " + división);
alert("la resta es: "+ resta);
alert("la multiplicacion es: " + multiplicación)
