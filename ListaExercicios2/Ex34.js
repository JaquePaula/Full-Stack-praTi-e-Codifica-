/* Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

function gerarNumeroRealAleatorio() {
  return (Math.random() * (100 - -100) + -100).toFixed(2);
}

function criarMatriz() {
  var matriz = Array();
  for (var i = 0; i < 50; i++) {
    var linha = Array();
    for (var j = 0; j < 50; j++) {
      linha.push(parseFloat(gerarNumeroRealAleatorio()));
    }
    matriz.push(linha);
  }
  return matriz;
}

var matriz = criarMatriz();

function multiplicarLinhaPeloElementoDiagonalPrincipal(matriz) {
  for (var i = 0; i < 50; i++) {
    var elementoDiagonalPrincipal = matriz[i][i];
    for (var j = 0; j < 50; j++) {
      matriz[i][j] = (matriz[i][j] * elementoDiagonalPrincipal).toFixed(2);
    }
  }
  return matriz;
}

console.log("Matriz 50x50 original:");
for (var i = 0; i < 50; i++) {
  console.log(matriz[i]);
}

multiplicarLinhaPeloElementoDiagonalPrincipal(matriz);

console.log("\nMatriz 50x50 após as multiplicações:");
for (var i = 0; i < 50; i++) {
  console.log(matriz[i]);
}
