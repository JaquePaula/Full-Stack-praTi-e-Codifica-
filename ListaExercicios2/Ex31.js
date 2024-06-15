/* Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

const prompt = require("prompt-sync")();

var A = parseInt(prompt("Digite um número inteiro:"));

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * (9 - 0 + 1)) + 0;
}

function criarMatrizV() {
  var matriz = Array();
  for (var i = 0; i < 30; i++) {
    var linha = Array();
    for (var j = 0; j < 30; j++) {
      linha.push(gerarNumeroAleatorio());
    }
    matriz.push(linha);
  }
  return matriz;
}

var V = criarMatrizV();
console.log("Matriz V 30x30:");
for (var i = 0; i < V.length; i++) {
  console.log(V[i]);
}

function contarValoresIguaisA(matriz, A) {
  var contador = 0;
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === A) {
        contador++;
      }
    }
  }
  return contador;
}

var quantidadeA = contarValoresIguaisA(V, A);

function criarMatrizX(matriz, A) {
  var matrizX = Array();
  for (var i = 0; i < matriz.length; i++) {
    var linhaX = Array(); 
    for (var j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] !== A) {
        linhaX.push(matriz[i][j]);
      }
    }
      matrizX.push(linhaX);
  }
  return matrizX;
}

var X = criarMatrizX(V, A);

console.log("Quantidade de valores iguais a", A, "na matriz V:", quantidadeA);
console.log("Matriz X contendo todos os elementos de V diferentes de", A, ":");

for (var i = 0; i < X.length; i++) {
  console.log(X[i]);
}
