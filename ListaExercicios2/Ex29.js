// Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz.

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

var matriz = lerMatriz();

function somarLinha4(matriz) {
  var soma = 0;
  for (var j = 0; j < 5; j++) {
    soma += matriz[3][j];
  }
  return soma;
}

function somarColuna2(matriz) {
  var soma = 0;
  for (var i = 0; i < 5; i++) {
    soma += matriz[i][1];
  }
  return soma;
}

function somarDiagonalPrincipal(matriz) {
  var soma = 0;
  for (var i = 0; i < 5; i++) {
    soma += matriz[i][i]; //
  }
  return soma;
}

function somarTodosElementos(matriz) {
  var soma = 0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

console.log("Matriz 5x5:");
for (var i = 0; i < 5; i++) {
  console.log(matriz[i]);
}

console.log("Soma da linha 4:", somarLinha4(matriz));
console.log("Soma da coluna 2:", somarColuna2(matriz));
console.log("Soma da diagonal principal:", somarDiagonalPrincipal(matriz));
console.log("Soma de todos os elementos:", somarTodosElementos(matriz));
