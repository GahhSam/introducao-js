let lado1 = prompt("Digite o comprimento do primeiro lado:");
let lado2 = prompt("Digite o comprimento do segundo lado:");
let lado3 = prompt("Digite o comprimento do terceiro lado:");

 
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Isósceles");
    } else {
        console.log("Escaleno");
    }
