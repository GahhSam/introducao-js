let primeiroNumero = prompt("Digite o primeiro número:");

let segundoNumero = prompt("Digite o segundo número:");

primeiroNumero = parseInt(primeiroNumero);
segundoNumero = parseInt(segundoNumero);

if (primeiroNumero > segundoNumero) {
    console.log("O primeiro número é maior.");
} else if (primeiroNumero === segundoNumero) {
    console.log("Os números são iguais.");
} else {
    console.log("O segundo número é maior.");
}
