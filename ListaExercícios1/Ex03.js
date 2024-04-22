/*  Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações: 
● Some 25 ao primeiro inteiro; 
● Triplique o valor do segundo inteiro; 
● Modifique o valor do terceiro inteiro para 12% do valor original; 
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.  */

const prompt = require("prompt-sync")();

let n1 = parseInt(prompt("Digite o primeiro número: "))
let n2 = parseInt(prompt("Digite o segundo número: "))
let n3 = parseInt(prompt("Digite o terceiro número: "))
let n4 = parseInt(prompt("Digite o quarto número: "))

n4 = n1 + n2 + n3; 
n1 += 25
n2 = n2 * 3
n3 = (12 * n3)/100

console.log ("Primeiro número:",n1,"\nSegundo número:",n2,"\nTerceiro número:",n3,"\nQuarto número:",n4)

