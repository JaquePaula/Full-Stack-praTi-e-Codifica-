/* Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados. */
const prompt = require("prompt-sync")();

function lerMatriz() {
  var matriz = Array();
  for (var i = 0; i < 5; i++) {
    var linha = Array();
    for (var j = 0; j < 5; j++) {
      linha.push(
        parseFloat(prompt(`Digite o elemento da posição (${i + 1},${j + 1}):`))
      );
    }
    matriz.push(linha);
  }
  return matriz;
}

function SomarLinhas(matriz) {
  var SL = Array();
  for (var i = 0; i < 5; i++) {
    var somaLinha = 0;
    for (var j = 0; j < 5; j++) {
      somaLinha += matriz[i][j];
    }
    SL.push(somaLinha);
  }
  return SL;
}

function SomarColunas(matriz) {
  var SC = Array();
  for (var i = 0; i < 5; i++) {
    var somaColuna = 0;
    for (var j = 0; j < 5; j++) {
      somaColuna += matriz[j][i];
    }
    SC.push(somaColuna);
  }
  return SC;
}

console.log("Matriz 5x5:");

var matriz = lerMatriz();

for (var i = 0; i < 5; i++) {
  console.log(matriz[i]);
}
console.log("Vetor SL (somas das linhas):", SomarLinhas(matriz));
console.log("Vetor SC (somas das colunas):", SomarColunas(matriz));
