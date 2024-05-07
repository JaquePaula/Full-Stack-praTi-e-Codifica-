/*Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require("prompt-sync")();

const numeroCorreto = Math.floor(Math.random() * (5 - 1) + 1);
let tentativa;

do {
  tentativa = parseInt(prompt("Digite um numero de 1 a 5: "));
  if (tentativa < numeroCorreto) {
    console.log("O numero correto é maior!");
  } else if (tentativa > numeroCorreto) {
    console.log("O numero correto é menor!");
  }
} while (tentativa !== numeroCorreto);

console.log("Parabens, você acertou o numero correto!!");
