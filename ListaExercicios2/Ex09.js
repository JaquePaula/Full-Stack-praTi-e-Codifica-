/* Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

const prompt = require("prompt-sync")();

let somaHomem = 0;
let salarioHomem;
let somaMulher = 0;
let salarioMulher;
let continuar;

do {
  let sexo = prompt("Digite H se você é homem ou M se for mulher: ");
  sexo = sexo.toLowerCase();
  console.log(sexo);

  if (sexo == "h") {
    salarioHomem = parseFloat(prompt("Digite salário: "));
    somaHomem += salarioHomem;
  } else if (sexo === "m") {
    salarioMulher = parseFloat(prompt("Digite salário: "));
    somaMulher += salarioMulher;
  }

  continuar = prompt("Para continuar digite 1 e para sair digite 0: ");
} while (continuar == 1);

console.log(
  `Salário total Homens: R$ ${somaHomem} e Salário total Mulheres: R$ ${somaMulher}`
);
