/* Escreva um algoritmo que gere os números de 1000 a 1999 
e escreva aqueles que, divididos por 11, dão resto igual a 5. */

const prompt = require("prompt-sync")();

let contador;

for (contador = 1000; contador <= 1999; contador++) {
  if (contador % 11 == 5) {
    console.log(contador);
  }
}
