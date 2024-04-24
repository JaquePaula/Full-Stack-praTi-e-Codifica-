/*  Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, 
    calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: 
1 x N = N 
2 x N = 2N 
3 x N = 3N 
 */

const prompt = require("prompt-sync")();

for (let cont = 1; cont <= 5; cont++) {
  let n = parseInt(prompt("Digite um numero: "));
  for (let tabuada = 1; tabuada <= n; tabuada++) {
    console.log(tabuada, "x", n, "=", tabuada * n);
  }
}
