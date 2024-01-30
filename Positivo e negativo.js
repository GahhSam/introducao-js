let soma = 0;

while (true) {

    let numero = prompt("Digite um número positivo (ou um número negativo para encerrar):");


    if (numero < 0) {
        break; 
    }

    if (numero % 2 === 0) {
        soma += numero; 
    }
}

console.log(`A soma dos números inseridos é: ${soma}`);
