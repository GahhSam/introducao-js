// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
  }
  
  // Função para classificar o IMC
  function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
      return "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
      return "Obesidade Grau I (leve)";
    } else if (imc >= 35.0 && imc <= 39.9) {
      return "Obesidade Grau II (moderada)";
    } else {
      return "Obesidade Grau III (grave)";
    }
  }
  
  // Dados de Maria
  const pesoMaria = 55;
  const alturaMaria = 1.65;
  const idadeMaria = 25;
  
  // Dados de Pedro
  const pesoPedro = 70;
  const alturaPedro = 1.80;
  const idadePedro = 28;
  
  // Calculando IMC e classificando Maria
  const imcMaria = calcularIMC(pesoMaria, alturaMaria);
  const classificacaoMaria = classificarIMC(imcMaria);
  
  // Calculando IMC e classificando Pedro
  const imcPedro = calcularIMC(pesoPedro, alturaPedro);
  const classificacaoPedro = classificarIMC(imcPedro);
  
  // Exibindo resultados
  console.log(`Maria - IMC: ${imcMaria.toFixed(2)} - Classificação: ${classificacaoMaria}`);
  console.log(`Pedro - IMC: ${imcPedro.toFixed(2)} - Classificação: ${classificacaoPedro}`);
  