const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
    console.log("Digite um número válido.");
} else {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
