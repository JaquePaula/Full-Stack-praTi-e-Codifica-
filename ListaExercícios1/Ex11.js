/* Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO. */

const prompt = require("prompt-sync")();
let numero;

do {
  numero = parseInt(
    prompt(
      console.log("Digite o numero que deseja verificar se é par ou impar: ")
    )
  );
  if (numero < 0 || isNaN(numero) || numero === null) {
    break;
  }
  if (numero % 2 === 0) {
    console.log("O numero é par");
  } else {
    console.log("O numero é impar");
  }
} while (true);
