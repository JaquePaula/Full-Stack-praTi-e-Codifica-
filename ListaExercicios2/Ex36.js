/* Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

function ordenarNumerosCrescente(a, b) {
  return a - b;
}

function gerarNumeros() {
  let numeros = Array();
  while (numeros.length < 13) {
    let numero = Math.floor(Math.random() * (14 - 1 + 1)) + 1;
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

let gabarito = gerarNumeros();
console.log("Gabarito:", gabarito);

let apostadores = Array();
for (let i = 1; i <= 100; i++) {
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
  if (acertos === 13) {
    console.log(
      `Apostador ${
        apostador.numeroCartela
      }: números escolhidos: ${apostador.respostas.join(
        ", "
      )} : ${acertos} acertos, Parabéns, tu foi o GANHADOR`
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
