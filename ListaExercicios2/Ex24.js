/* Dada uma matriz M 6 x 8, criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.  */

function GerarNumeroAleatorio() {
  return Math.floor(Math.random() * 21) - 10;
}

let matrizM = Array();
for (let i = 0; i < 6; i++) {
  let linha = Array();
  for (let j = 0; j < 8; j++) {
    linha.push(GerarNumeroAleatorio());
  }
  matrizM.push(linha);
}

let vetorC = Array();
for (let i = 0; i < 6; i++) {
  let ContadorNegativo = 0;
  for (let j = 0; j < 8; j++) {
    if (matrizM[i][j] < 0) {
      ContadorNegativo++;
    }
  }
  vetorC.push(ContadorNegativo);
}


console.log("Matriz M:");
for (let i = 0; i < 6; i++) {
  console.log(matrizM[i]);
}

console.log("Vetor C (quantidade de elementos negativos por linha): " + vetorC);
