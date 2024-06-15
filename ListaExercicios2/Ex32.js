/* Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada. */

// maior elemento em módulo: Maior valor sem considerar se é positivo ou negativo

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * (50 - -25 + 1)) + -25;
}

function criarMatriz() {
  var matriz = Array();
  for (var i = 0; i < 12; i++) {
    var linha = Array();
    for (var j = 0; j < 13; j++) {
      linha.push(gerarNumeroAleatorio());
    }
    matriz.push(linha);
  }
  return matriz;
}

function encontrarMaiorElemento(linha) {
  var maiorElemento;

  // verificar o primeiro número da linha fora do loop, para transformar negativo em positivo e ter um valor para comparar dentro do loop
  if (linha[0] >= 0) {
    maiorElemento = linha[0];
  } else {
    maiorElemento = -linha[0];
  }

  for (var i = 1; i < linha.length; i++) {
    var elementoAtual;
    if (linha[i] >= 0) {
      elementoAtual = linha[i];
    } else {
      elementoAtual = -linha[i];
    }

    if (elementoAtual > maiorElemento) {
      maiorElemento = elementoAtual;
    }
  }

  return maiorElemento;
}

function dividirPorMaiorElementoLinha(linha) {
  var maiorElemento = encontrarMaiorElemento(linha);
  for (var i = 0; i < linha.length; i++) {
    linha[i] = (linha[i] / maiorElemento).toFixed(2);
  }
}

var M = criarMatriz();

console.log("Matriz M(12,13) original:");
console.log("-------------------------");
for (var i = 0; i < 12; i++) {
  console.log("Linha gerada:", M[i]);
  dividirPorMaiorElementoLinha(M[i]);
  console.log("Linha modificada:", M[i]);
  console.log("-------------------------");
}
