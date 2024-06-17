/* Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

function gerarVetor() {
  let vetor = Array();
  for (let i = 0; i < 100; i++) {
    let numero = Math.floor(Math.random() * 201) - 100;
    vetor.push(numero);
  }
  return vetor;
}

function compactarVetor(vetor) {
  let vetorCompactado = Array();
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0) {
      vetorCompactado.push(vetor[i]);
    }
  }
  return vetorCompactado;
}

let vetorA = gerarVetor();
let vetorB = compactarVetor(vetorA);
console.log("Vetor A:", vetorA);
console.log("Vetor B:", vetorB);
