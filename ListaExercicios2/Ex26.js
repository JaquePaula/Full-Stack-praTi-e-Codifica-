/* Dadas duas matrizes numéricas A 3 X 5 e B 3 X 5, calcular a matriz produto
P 3 X 5. */

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 201) - 100;
}

var A = Array();
for (var i = 0; i < 3; i++) {
  var linha = Array();
  for (var j = 0; j < 5; j++) {
    linha.push(gerarNumeroAleatorio());
  }
  A.push(linha);
}

var B = Array();
for (var i = 0; i < 3; i++) {
  var linha = Array();
  for (var j = 0; j < 5; j++) {
    linha.push(gerarNumeroAleatorio());
  }
  B.push(linha);
}

var P = Array();
for (var i = 0; i < 3; i++) {
  var linhaP = Array();
  for (var j = 0; j < 5; j++) {
    linhaP.push(0);
  }
  P.push(linhaP);
}

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 5; j++) {
    P[i][j] = A[i][j] * B[i][j];
  }
}

console.log("Matriz A:");
for (var i = 0; i < 3; i++) {
  console.log(A[i]);
}

console.log("Matriz B:");
for (var i = 0; i < 3; i++) {
  console.log(B[i]);
}

console.log("Matriz Produto P:");
for (var i = 0; i < 3; i++) {
  console.log(P[i]);
}
