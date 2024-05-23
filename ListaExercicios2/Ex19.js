/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

const prompt = require("prompt-sync")();

let hora = []
let minuto = []
let segundo = []

for (let i = 0; i < 5; i++) {
  hora[i] = prompt("Digite Hora: ");
  minuto[i] = prompt("Digite Minuto: ");
  segundo[i] = prompt("Digite Segundo: ");
}

for (let i = 0; i < 5; i++) {
    console.log(` ${hora[i]}:${minuto[i]}:${segundo[i]} `)
  }