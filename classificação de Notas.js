let nota = prompt("Digite sua nota (de 0 a 100):");

if (nota < 0 || nota > 100 || isNaN(nota)) {
    console.log("Nota inválida. Insira uma nota válida de 0 a 100.");
} else if (nota < 60) {
    console.log("Reprovado");
} else if (nota < 75) {
    console.log("Regular");
} else if (nota < 90) {
    console.log("Bom");
} else {
    console.log("Excelente");
}
