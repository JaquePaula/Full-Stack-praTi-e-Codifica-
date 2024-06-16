/*Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/

// quando o vetor não tem 5 valores ele não imprimi, preciso imprimir o vetor quando não atingir os 5, pois senão mesmo se for o primeiro ele não imprime nada.

const prompt = require("prompt-sync")();

let pares = Array();
let impares = Array();

function separarVetor(vetor, tipo) {
  if (pares.length === 5) {
    console.log(`Vetor de ${tipo}:`, vetor);
    pares.length = 0;
  } else if (impares.length === 5) {
    console.log(`Vetor de ${tipo}:`, vetor);
    impares.length = 0;
  }
}

for (let i = 1; i <= 20; i++) {
  let numero = parseFloat(prompt(`Digite numero ` + i + `: `));

  if (numero % 2 === 0) {
    pares.push(numero);
    separarVetor(pares, "pares");
  } else {
    impares.push(numero);
    separarVetor(impares, "ímpares");
  }
}

if (pares.length > 0) {
  console.log(`Vetor de pares incompletos:`, pares);
}
if (impares.length > 0) {
  console.log(`Vetor de impares incompletos:`, impares);
}

