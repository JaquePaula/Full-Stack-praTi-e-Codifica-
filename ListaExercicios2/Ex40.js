/* Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

const prompt = require("prompt-sync")();

function lerNumerosLoteria() {
  let numeros = Array();
  for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1} da loteria (1 a 60):`));
    numeros.push(numero);
  }
  return numeros.sort(ordenarNumerosCrescente);
}

function ordenarNumerosCrescente(a, b) {
  return a - b;
}

function gerarNumeros() {
  let numeros = Array();
  while (numeros.length < 5) {
    let numero = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
    let existe = false;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] === numero) {
        existe = true;
        break;
      }
    }
    if (existe === false) {
      numeros.push(numero);
    }
  }
  return numeros.sort(ordenarNumerosCrescente);
}

let gabarito = lerNumerosLoteria();
console.log("Gabarito:", gabarito);

let apostadores = Array();
for (let i = 1; i <= 50; i++) {
  let respostas = gerarNumeros();
  let apostador = {
    numeroCartela: i,
    respostas: respostas,
  };
  apostadores.push(apostador);
}

function contarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < respostas.length; i++) {
    for (let j = 0; j < gabarito.length; j++) {
      if (respostas[i] === gabarito[j]) {
        acertos++;
        break;
      }
    }
  }
  return acertos;
}

for (let i = 0; i < apostadores.length; i++) {
  let apostador = apostadores[i];
  let acertos = contarAcertos(gabarito, apostador.respostas);
  if (acertos === 5) {
    console.log(
      `Apostador ${
        apostador.numeroCartela
      }: números escolhidos: ${apostador.respostas.join(
        ", "
      )} : ${acertos} acertos, GANHADOR`
    );
  } else {
    console.log(
      `Apostador ${
        apostador.numeroCartela
      }: números escolhidos: ${apostador.respostas.join(
        ", "
      )} : ${acertos} acertos`
    );
  }
}
