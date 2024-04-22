// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos 
// e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

const prompt = require("prompt-sync")();



let eleitores = prompt("Digite o numero de eleitores: ")
let votosBrancos = prompt("Digite o numero de votos brancos: ")
let votosNulos = prompt("Digite o numero de votos nulos: ")
let votosValidos = prompt ("Digite o numero de votos validos: ")

votosBrancos = (votosBrancos * 100)/eleitores
votosNulos = (votosNulos * 100)/eleitores
votosValidos = (votosValidos * 100)/eleitores;

console.log ("O percentual é: \n Votos brancos:", votosBrancos, "\n Votos nulos:", votosNulos, " \n Votos válidos:", votosValidos)