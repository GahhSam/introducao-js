let numeroDia = prompt("Digite um número de 1 a 7:");

numeroDia = parseInt(numeroDia);

if (numeroDia === 1) {
    console.log("Domingo");
} else if (numeroDia === 2) {
    console.log("Segunda-feira");
} else if (numeroDia === 3) {
    console.log("Terça-feira");
} else if (numeroDia === 4) {
    console.log("Quarta-feira");
} else if (numeroDia === 5) {
    console.log("Quinta-feira");
} else if (numeroDia === 6) {
    console.log("Sexta-feira");
} else if (numeroDia === 7) {
    console.log("Sábado");
} else {
    console.log("Número inválido. Insira um número de 1 a 7.");
}
