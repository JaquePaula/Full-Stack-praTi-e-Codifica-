/* Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, 
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, 
somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação). 
*/

const prompt = require("prompt-sync")()

let n1 = parseFloat(prompt("Digite a primeira nota: "))
let n2 = parseFloat(prompt("Digite a segunda nota: "))
let media = (n1 + n2)/2

if (media >= 6) {
    console.log ("PARABÉNS! Você foi aprovado")
} else {
    console.log ("Você não foi aprovado")
}
console.log ("Sua nota foi:", media)

