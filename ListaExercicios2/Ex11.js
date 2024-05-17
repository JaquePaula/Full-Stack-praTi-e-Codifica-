/* Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */

let contador = 0
let novosElementos
let soma = 0; 

const prompt = require("prompt-sync")();

let primeiroTermo = parseFloat(prompt("Digite o primeiro termo: "));
let razaoPA = parseFloat(prompt("Digite a razao da progressão aritmética: "));
let elementos = [];


for (let contador = 0; contador < 10; contador++) {
    let termoAtual = primeiroTermo + contador * razaoPA;
    soma += termoAtual;
    elementos.push(termoAtual);
}

    console.log(`Os 10 primeiros elementos são: ${elementos}`)
    console.log(`A soma dos elementos é: ${soma}`)
