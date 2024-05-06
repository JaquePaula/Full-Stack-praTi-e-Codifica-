/*Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require("prompt-sync")();

let qtdeDia = parseFloat(
  prompt("Digite o numero de cigarros fumados por dia: ")
);
let qtdeAnos = parseFloat(prompt("Digite o numero de anos que ja fumou: "));
let minPorDia = qtdeDia * 10;
let minParaDia = minPorDia / 1440;
let resultado = qtdeAnos * 365 * minParaDia;
console.log("O numero de dias perdidos é aproximadamente", Math.round(resultado),"dias");
