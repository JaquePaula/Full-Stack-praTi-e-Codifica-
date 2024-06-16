/* Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

const prompt = require("prompt-sync")();

function gerarRespostasAlunos() {
  const caracteres = ["A", "B", "C", "D"];
  let respostas = Array();
  for (let i = 0; i < 20; i++) {
    let resposta = caracteres[Math.floor(Math.random() * caracteres.length)];
    respostas.push(resposta);
  }
  return respostas;
}

let gabarito = Array();
for (let i = 1; i <= 20; i++) {
  resposta = prompt("Digite a resposta(A, B, C ou D) da questão " + i + ":");
  resposta = resposta.toUpperCase();
  if (
    resposta === "A" ||
    resposta === "B" ||
    resposta === "C" ||
    resposta === "D"
  ) {
    gabarito.push(resposta);
  } else {
    console.log("A resposta deve ser A, B, C ou D, digite novamente");
    i--;
  }
}

console.log("Gabarito:", gabarito.join(", "));

let alunos = Array();
for (let i = 1; i <= 50; i++) {
  let respostas = gerarRespostasAlunos();
  aluno = {
    numeroAluno: i,
    respostas: respostas,
  };
  alunos.push(aluno);
}

function contarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

for (let i = 0; i < alunos.length; i++) {
  let aluno = alunos[i];
  let acertos = contarAcertos(gabarito, aluno.respostas);
  let resultado;

  if (acertos >= 12) {
    resultado = "APROVADO";
  } else {
    resultado = "REPROVADO";
  }

  console.log(
    `Aluno ${aluno.numeroAluno} / respostas: ${aluno.respostas.join(
      ", "
    )} / ${acertos} acertos / ${resultado}`
  );
}
