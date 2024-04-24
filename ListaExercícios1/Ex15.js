/* Fazer um algoritmos para receber um número decimal e 
o peso de cada número até que o usuário digite o número 0. 
Fazer a média ponderada desses números e pesos respectivos. */

const prompt = require("prompt-sync")();
let numero;
let soma = 0;
let cont = 0;
let peso = 0;
let resulParcial = 0;
let somaPeso = 0;

while (numero != 0) {
  numero = parseFloat(prompt("Digite um número: "));
  if (numero === 0) {
    break;
  }
  peso = parseFloat(prompt("Digite o peso: "));
  resulParcial = numero * peso;
  soma += resulParcial;
  cont++;
  somaPeso += peso;
}

if (cont != 0) {
  const media = soma / somaPeso;
  console.log("A média dos números digitados é:", media);
} else {
  console.log("Nenhum número foi digitado.");
}
