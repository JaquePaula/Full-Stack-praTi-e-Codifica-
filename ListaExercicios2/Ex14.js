/* Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */

const prompt = require("prompt-sync")();

let nomes = Array()

for (i=0 ; i < 7; i++) {
nomes[i] = prompt("Digite seu nome:")
}

nomes.reverse();
console.log(nomes.join(', '));
