/*Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/

const prompt = require("prompt-sync")();

let A = parseFloat(prompt("Digite a reta A: "));
let B = parseFloat(prompt("Digite a reta B: "));
let C = parseFloat(prompt("Digite a reta C: "));

if ((A < B + C) && (B < A + C) && (C < A + B)) {
  console.log("É possivel formar um triângulo");
} else {
  console.log("Não é possivel formar um triângulo");
}