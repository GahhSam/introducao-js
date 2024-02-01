// Função para somar dois números
function somar(numeroA, numeroB) {
    return numeroA + numeroB;
  }
  
  // Função para subtrair dois números
  function subtrair(a, b) {
    return a - b;
  }
  
  // Função para multiplicar dois números
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Função para dividir dois números
  function dividir(a, b) {
    return a / b;
  }
  
  // Função para cubo que calcula o cubo de um número
  function calcularCubo(a, b) {
    return (a + b) * (a + b) * (a + b);
  }
  
  // Função para quadrado que calcula o quadrado de um número
  function calcularQuadrado(a, b) {
    return (a + b) * (a + b);
  }
  
  // Função para media para calcular a média de dois números
  function calcularMedia(a, b) {
    return (a + b)/2;
  }
  
  // Função para media para calcular dois valores é o maior entre eles
  function calcularAdicional(a, b) {
  if (a > b) {
    return (a/2) * b;
  }
  else {
    return (b/2) * a;
  }
  }
  
  // Função principal para realizar os cálculos e exibir os resultados na página
  function calcular() {
    // Obter os valores dos campos de entrada
    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);
  
    // Exibir os resultados na página HTML
    document.getElementById("soma").innerHTML = "Soma: " + somar(numeroA, numeroB);
    document.getElementById("subtracao").innerHTML = "Subtração: " + subtrair(numeroA, numeroB);
    document.getElementById("multiplicacao").innerHTML = "Multiplicação: " + multiplicar(numeroA, numeroB);
    document.getElementById("divisao").innerHTML = "Divisão: " + dividir(numeroA, numeroB);
    document.getElementById("cubo").innerHTML = "cubo: " + calcularCubo(numeroA, numeroB);
    document.getElementById("quadrado").innerHTML = "quadrado: " + calcularQuadrado(numeroA, numeroB);
    document.getElementById("media").innerHTML = "media: " + calcularMedia(numeroA, numeroB);
    document.getElementById("adicional").innerHTML = "adicional: " + calcularAdicional(numeroA, numeroB);
  }
