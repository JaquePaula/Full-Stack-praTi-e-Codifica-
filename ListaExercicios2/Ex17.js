/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

const prompt = require("prompt-sync")();

let nomes = [];
let idades = [];
let maior = false;

for (i = 0; i < 9; i++) {
  nomes[i] = prompt("Digite seu nome: ");
  idades[i] = parseInt(prompt("Digite sua idade: "));
}

for (let x = 0; x < idades.length; x++) {
  if (idades[x] < 18) {
    console.log("A pessoa " + nomes[x] + " e tem " + idades[x] + "anos");
    maior = true;
  }
}

if (maior == false) {
  console.log("Nenhuma pessoa é menor de idade.");
}
