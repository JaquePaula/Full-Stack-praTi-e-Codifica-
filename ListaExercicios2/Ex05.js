/* Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require("prompt-sync")();

console.log("Jogo de JoKenPo");

let jogador1 = prompt("Digite o nome do jogador 1: ");
let jogador2 = prompt("Digite o nome do jogador 2: ");

console.log("Partida: ");
let joga1 = prompt(`${jogador1} escolha sua opcão(pedra, papel ou tesoura): `);
joga1 = joga1.toLowerCase();

let joga2 = prompt(`${jogador2} escolha sua opcão(pedra, papel ou tesoura): `);
joga2 = joga2.toLowerCase();

const pedra = "pedra";
const papel = "papel";
const tesoura = "tesoura";

if (
  joga1 !== "pedra" &&
  joga1 !== "tesoura" &&
  joga1 !== "papel" &&
  joga2 !== "pedra" &&
  joga2 !== "tesoura" &&
  joga2 !== "papel"
) {
  console.log("Valor invalido!!");
} else if (
  (joga1 === pedra && joga2 === tesoura) ||
  (joga1 === papel && joga2 === pedra) ||
  (joga1 === tesoura && joga2 === papel)
) {
  console.log(jogador1, "ganhou");
} else if (
  (joga2 === pedra && joga1 === tesoura) ||
  (joga2 === papel && joga1 === pedra) ||
  (joga2 === tesoura && joga1 === papel)
) {
  console.log(jogador2, "ganhou");
} else {
  console.log("Empate");
}
