/* Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */
// Ou seja, Cada novo número é a soma dos dois números anteriores

let elementos = [1,1]

for (let i = 2; i < 10; i++){
    // Cada novo elemento elementos[i] é a soma dos dois elementos anteriores (elementos[i - 1] e elementos[i - 2]).
    elementos[i] = elementos[i-1] + elementos[i-2]
}

console.log(elementos.join(', '));



