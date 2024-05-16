/* Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const prompt = require("prompt-sync")();
let continuar = 0;
let numero = 0;
let somaNumeros = 0;
let contadorTotal = 0;
let contadorPares = 0;
let menorNumero;
let primeiroNumero = true;

do {
  numero = parseFloat(prompt("Digite um número: "));
  somaNumeros += numero;
  contadorTotal++;

  if (numero % 2 == 0) contadorPares++;

  if ((primeiroNumero = true)) {
    menorNumero = numero;
    primeiroNumero = false;
  } else if (numero < menorNumero) {
    menorNumero = numero;
  }

  continuar = prompt("Para continuar digite 1 e para sair digite 2: ");
} while (continuar == 1);

const media = somaNumeros / contadorTotal;

console.log(`Somatório de todos os valores: ${somaNumeros} `);
console.log(`Menor valor digitado: ${menorNumero} `);
console.log(`Média dos valores: ${media.toFixed(2)}`);
console.log(`Quantidade de valores que são pares: ${contadorPares} `);
