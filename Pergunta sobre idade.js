let idade = prompt("Digite sua idade:");

if (idade < 18) {
    console.log("Menor de Idade.");
} else if (idade >= 18 && idade < 65) {
    console.log("Adulto.");
} else {
    console.log("Idoso.");
}
