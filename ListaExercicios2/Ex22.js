/* A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

const prompt = require("prompt-sync")();

function calcularDados() {
  let continuar = 0;
  let contadorPessoas = 0;
  let somaSalario = 0;
  let somaFilhos = 0;
  let salarioAnterior;
  let maiorSalario = 0;
  let SalarioMenor350 = 0;

  do {
    let salario = parseFloat(prompt("Digite salário: "));
    let qtdeFilhos = parseInt(prompt("Digite quantidade de filhos: "));
    continuar = parseInt(
      prompt(
        "Deseja continuar, para cadastrar mais digite 0, para sair digite 1: "
      )
    );
    contadorPessoas++;
    somaSalario += salario;
    somaFilhos += qtdeFilhos;

    if (contadorPessoas === 1) {
      maiorSalario = salario;
    }

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      SalarioMenor350++;
    }
  } while (continuar === 0);

  let mediaSalario = somaSalario / contadorPessoas;
  let mediaFilhos = somaFilhos / contadorPessoas;
  let percentual350 = (SalarioMenor350 / contadorPessoas) * 100;

  return {
    mediaSalario: mediaSalario.toFixed(2),
    mediaFilhos: mediaFilhos.toFixed(2),
    percentual350: percentual350.toFixed(2),
    maiorSalario: maiorSalario.toFixed(2),
  };
}

let pesquisa = calcularDados();
console.log("Media de salário da população: " + pesquisa.mediaSalario);
console.log("Media do número de filhos: " + pesquisa.mediaFilhos);
console.log("O maior salário é: " + pesquisa.maiorSalario);
console.log(
  "percentual de pessoas com salário até R$350,00: " +
    pesquisa.percentual350 +
    "%"
);
