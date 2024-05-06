/* Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.  */

const prompt = require("prompt-sync")();

let distancia = prompt("Qual distância em Km deseja percorrer? ");

if (distancia <= 200) {
  console.log("O preço da passagem é R$", distancia * 0.5, "reais");
} else {
  console.log("O preço da passagem é R$", distancia * 0.45, "reais");
}
