/* (Utilizar somente while)
 Fazer um algoritmo para receber números decimais até que o usuário 
 digite 0 e fazer a média aritmética desses números. 
 */

const prompt = require("prompt-sync")();
let numero;
let soma = 0;
let cont = 0;

while (numero != 0) {
  numero = parseFloat(prompt("Digite um número: "));
  if (numero === 0) {
    break;
  }
  soma += numero;
  cont++;
}

if (cont != 0) {
  const media = soma / cont;
  console.log("A média dos números digitados é:", media);
} else {
  console.log("Nenhum número foi digitado.");
}
