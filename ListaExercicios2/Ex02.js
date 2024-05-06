/* Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h
-1
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require("prompt-sync")();

let velocidade = parseInt(prompt("Qual velocidade em km o carro está? "));
let multa = (velocidade - 80) * 5;
if (velocidade > 80) {
  console.log("Você recebeu uma multa no valor de: R$", multa, "reais");
} else {
  console.log("Você está dentro do limite de velocidade");
}
