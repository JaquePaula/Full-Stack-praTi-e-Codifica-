// Acrescente ao exercício 5 a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0 

const prompt = require("prompt-sync")()

let n1 = parseFloat(prompt("Digite a primeira nota: "))
let n2 = parseFloat(prompt("Digite a segunda nota: "))
let media = (n1 + n2)/2

if (media >= 6) {
    console.log ("PARABÉNS! Você foi aprovado")
} else {
    console.log ("Você foi REPROVADO! Estude mais")
}
console.log ("Sua nota foi:", media)