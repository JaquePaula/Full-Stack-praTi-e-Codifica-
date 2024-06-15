/* Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */

const prompt = require("prompt-sync")();

function lerMatriz() {
  var matriz = Array();
  for (var i = 0; i < 3; i++) {
    var linha = Array();
    for (var j = 0; j < 3; j++) {
      linha.push(
        parseFloat(prompt(`Digite o elemento da posição (${i + 1},${j + 1}):`))
      );
    }
    matriz.push(linha);
  }
  return matriz;
}

var matriz = lerMatriz();

function calcularMediaDiagonalSecundaria(matriz) {
  var soma = 0;
  for (var i = 0; i < 3; i++) {
    soma += matriz[i][2 - i]; // matriz[i][2 - i] - diagonal secundaria
  }
  return (soma / 3).toFixed(2);
}

function multiplicarDiagonalPrincipalPorMedia(matriz, media) {
  for (var i = 0; i < 3; i++) {
    matriz[i][i] *= media; // matriz[i][i] - diagonal principal
  }

  return matriz;
}

console.log("Matriz 3x3 original:");
for (var i = 0; i < 3; i++) {
  console.log(matriz[i]);
}

var mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

console.log("A média é: ", mediaDiagonalSecundaria);

matriz = multiplicarDiagonalPrincipalPorMedia(matriz, mediaDiagonalSecundaria);
console.log("\nMatriz 3x3 após multiplicação pela média:");
for (var i = 0; i < 3; i++) {
  console.log(matriz[i]);
}
