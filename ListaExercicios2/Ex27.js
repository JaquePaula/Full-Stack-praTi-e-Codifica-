/* Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

const prompt = require("prompt-sync")();

var M = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36],
];

var A = parseFloat(prompt("Digite o valor de A:"));

function multiplicarPorA(M, A) {
  var vetor = Array();
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      vetor.push(M[i][j] * A);
    }
  }
  return vetor;
}

var V = multiplicarPorA(M, A);

console.log("Vetor V(36):" + V);
