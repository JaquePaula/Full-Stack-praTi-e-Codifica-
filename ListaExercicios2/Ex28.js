/* Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function gerarMatrizAleatoria() {
  var matriz = Array();
  for (var i = 0; i < 10; i++) {
    var linha = Array();
    for (var j = 0; j < 10; j++) {
      linha.push(Math.floor(Math.random() * 100));
    }
    matriz.push(linha);
  }
  return matriz;
}

var matriz = gerarMatrizAleatoria();

function somarAcimaDiagonalPrincipal(matriz) {
  var somaAcima = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i < j) {
        somaAcima += matriz[i][j];
      }
    }
  }
  return somaAcima;
}

function somarAbaixoDiagonalPrincipal(matriz) {
  var somaAbaixo = 0;
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i > j) {
        somaAbaixo += matriz[i][j];
      }
    }
  }
  return somaAbaixo;
}

console.log("Matriz 10x10:");
for (var i = 0; i < 10; i++) {
  console.log(matriz[i]);
}
console.log(
  "Soma dos elementos acima da diagonal principal:",
  somarAcimaDiagonalPrincipal(matriz)
);
console.log(
  "Soma dos elementos abaixo da diagonal principal:",
  somarAbaixoDiagonalPrincipal(matriz)
);
