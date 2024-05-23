/* Desenvolva um programa que leia 2 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */

const prompt = require("prompt-sync")();

let numeros = Array();
let temPar = false;

for (i = 0; i < 10; i++) {
  numeros[i] = parseInt(prompt("Digite um número Inteiro:"));
}

for (let x = 0; x < numeros.length; x++) {
  if (numeros[x] % 2 === 0) {
    console.log("O número " + numeros[x] + " é par e esta na posição: " + x);
    temPar = true;
  }
}

if (temPar == false) {
  console.log("Nenhum número par foi digitado.");
}