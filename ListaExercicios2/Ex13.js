/* Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci. */

let elementos = Array(15)

for (let i = 0; i < 15; i++){
    if (i === 0 || i === 1) {
        elementos[i] = 1
    } else {
     elementos[i] = elementos[i-1] + elementos[i-2]
}
}

console.log(elementos.join(', '));