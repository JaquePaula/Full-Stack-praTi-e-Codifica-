// exercicio 1 
// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit. 
//  F = C x 1,8 + 32

const prompt = require("prompt-sync")();

let C = prompt ("Digite o numero em Celsius para conversão em Fahrenheit: ")
let F = (C * 1.8 + 32);
console.log(C, "temperatura em Celsius e", F, "temperatura em Fahrenheit")

