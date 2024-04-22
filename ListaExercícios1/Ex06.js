/* Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. 
Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B 
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

const prompt = require("prompt-sync")();

let A = parseFloat(prompt("Digite o lado A: "));
let B = parseFloat(prompt("Digite o lado B: "));
let C = parseFloat(prompt("Digite o lado C: "));

if ((A < B + C) && (B < A + C) && (C < A + B)) {
    if ((A === B) && (A === C)) {
      console.log("É um triângulo equilátero");
    } else if ((A === B) || (A === C) || (B === C)) {
      console.log("É um triângulo isósceles");
    } else {
      console.log("É um triângulo escaleno");
    }
  } else {
    console.log("Não é um triângulo");
  }