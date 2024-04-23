// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();
let contador = 0;
let num = parseInt(prompt("Digite um número: "));

for (contador = 0; contador < 10; contador++) {
  console.log(num);
}
