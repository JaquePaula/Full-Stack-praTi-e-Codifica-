/* Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

let numeros = Array();


for (i = 0; i < 20; i++) {
    numeros[i] = Math.round(Math.random() * (99 - 0) + 0)
}

console.log(`Números gerados: ${numeros}`)
console.log("Números gerados em ordem crescente:" + (numeros.sort((a, b) => a - b)) )
