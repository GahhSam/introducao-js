function classificarIMC() {
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

function imc() {
  const nome = document.getElementById("nome").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  const imc = peso / (altura ** 2);
  const classificacao = classificarIMC(imc);

  document.getElementById("imc").innerHTML = nome +" ; IMC" + calcularIMC(peso, altura).yoFixed(2) +" ; Classificar:" + classificar();

}

