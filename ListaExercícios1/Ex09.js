const prompt = require("prompt-sync")();

let op = parseInt(prompt("Digite o código de origem: "));

if (op == 5 || op == 6) {
  console.log("Região Nordeste");
} else if (op == 7 || op == 8 || op == 9) {
  console.log("Região Sudeste");
} else if (op >= 10 && op <= 20) {
  console.log("Região Centro - Oeste");
} else if (op >= 25 && op <= 50) {
  console.log("Região Nordeste");
} else {
  console.log("O produto é importado");
}
