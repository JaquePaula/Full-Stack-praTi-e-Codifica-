/* Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */

const prompt = require("prompt-sync")();

let vetor = Array();
for (let i = 0; i < 6; i++) {
  let valor = parseFloat(prompt(`Digite o valor para a posição ${i + 1}:`));
  vetor.push(valor);
}

let operação = parseInt(
  prompt(
    "Digite a operação desejada (1: Soma, 2: Produto, 3: Média, 4: Ordenar em ordem crescente, 5: Mostrar vetor):"
  )
);

function Somar() {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }
  return soma;
}

function calcularProduto() {
  let produto = 1;
  for (let i = 0; i < vetor.length; i++) {
    produto *= vetor[i];
  }
  return produto;
}

function calcularMedia() {
  let soma = Somar();
  return soma / vetor.length;
}

function ordenarNumerosCrescente(a, b) {
  return a - b;
}

function ordenarVetor(vetor) {
  let ordenado = [...vetor];
  ordenado.sort(ordenarNumerosCrescente);
  return ordenado;
}

function mostrarVetor() {
  console.log(`Vetor: ${vetor.join(", ")}`);
}

switch (operação) {
  case 1:
    let soma = Somar();
    console.log(`Soma dos elementos: ${soma}`);
    break;
  case 2:
    let produto = calcularProduto();
    console.log(`Produto dos elementos: ${produto}`);
    break;
  case 3:
    let media = calcularMedia();
    console.log(`Média dos elementos: ${media}`);
    break;
  case 4:
    let ordenado = ordenarVetor();
    console.log(`Vetor ordenado: ${ordenado.join(", ")}`);
    break;
  case 5:
    mostrarVetor();
    break;
  default:
    console.log("Operador inválido.");
}
