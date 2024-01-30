let numero = prompt("Digite um número:");

numero = parseInt(numero);

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else {
    console.log(`Tabuada de multiplicação do número ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
