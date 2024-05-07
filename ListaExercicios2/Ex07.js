/* Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require("prompt-sync")();

let carro = parseInt(
  prompt("Qual é o tipo do carro alugado? Escolha 1 - popular ou 2 - luxo)")
);

let dias = prompt("Por quantos dias alugou? ");

let km = prompt("Quantos Km foram percorridos? ");

if (carro == 1) {
  if (km <= 100) {
    console.log("Valor a ser pago R$", km * 0.2 + dias * 90);
  } else if (km > 100) {
    console.log("Valor a ser pago R$", km * 0.1 + dias * 90);
  }
}

if (carro == 2) {
  if (km <= 200) {
    console.log("Valor a ser pago R$", km * 0.3 + dias * 150);
  } else if (km > 200) {
    console.log("Valor a ser pago R$", km * 0.25 + dias * 150);
  }
}
