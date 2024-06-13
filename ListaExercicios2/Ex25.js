/* Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

function gerarNumeroAleatorio() {
  return (Math.random() * 200 - 100).toFixed(2);
}

var matriz = Array();

for (var i = 0; i < 15; i++) {
  var linha = Array();
  for (var j = 0; j < 20; j++) {
    linha.push(parseFloat(gerarNumeroAleatorio()));
  }
  matriz.push(linha);
}

var somas = Array();
for (var i = 0; i < 20; i++) {
  somas[i] = 0;
}

for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 20; j++) {
    somas[j] += matriz[i][j];
  }
}

console.log("Matriz:");
for (var i = 0; i < 15; i++) {
  console.log(matriz[i]);
}

console.log("Soma de cada coluna:");
for (var i = 0; i < 20; i++) {
  console.log("Coluna", i , ":" , parseFloat(somas[i]).toFixed(2));
}
