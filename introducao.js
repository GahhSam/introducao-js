let nun1 = prompt("Informe o 1° valor. ");
let nun2 = prompt("Informe o 2° valor. ");
let nun3 = 7
let multi = nun1 * nun2;
let soma = Number (nun1) + Number (nun2);
let sub = soma - nun3;
let divisao = multi / nun2;
let base = nun1;
let expoente = nun2;
let potencia = base * expoente;
console.log("Soma: " + soma);
console.log("Prova Real: " + divisao);

soma = soma -1 ;

console.log("Multiplicação: " + multi);
console.log("Subtração: " + sub);
console.log("Valores utilizados para as expressoes : " + nun1 + " e "+nun2);
console.log("Potencia é :" + potencia)

const resultado=Math.pow(base,expoente);
console.log("Potencia é : " + resultado);