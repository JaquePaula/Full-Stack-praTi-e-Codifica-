/* Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

const prompt = require("prompt-sync")();

let funcionario = {
    nome: '',
    cargo: '',
    salario: 0
};

funcionario.nome = prompt("Digite seu nome: ");
funcionario.cargo = prompt("Digite seu cargo: ");
funcionario.salario = parseFloat(prompt("Digite seu salário: "));

console.log(`Nome: ${funcionario.nome}, cargo: ${funcionario.cargo} e salário: ${funcionario.salario}`)