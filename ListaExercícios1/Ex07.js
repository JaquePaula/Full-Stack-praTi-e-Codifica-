/* As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e 
R$ 0,25 se forem compradas pelo menos doze. 
Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 
*/

const prompt = require("prompt-sync")();

let maca = parseInt(prompt("Digite a quantidade de maças: "))

if (maca >=12) {
    console.log("O valor total da compra é: R$",maca * 0.25, "reais")
} else {
    console.log("O valor total da compra é: R$", maca * 0.30, "reais")
}