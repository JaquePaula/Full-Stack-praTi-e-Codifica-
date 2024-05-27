// /* Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS). */

function gerarNome() {
  const nomes = [
    "Ana",
    "Bruno",
    "Carlos",
    "Daniela",
    "Eduardo",
    "Fernanda",
    "Gustavo",
    "Helena",
    "Igor",
    "Juliana",
    "Kaio",
    "Larissa",
    "Marcelo",
    "Natalia",
    "Otavio",
    "Paula",
    "Renato",
    "Silvia",
    "Thiago",
    "Viviane",
  ];
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  return nome;
}

function gerarMatriculaUnica(matriculasGeradas) {
  let matricula;
  let matriculaRepetida;

  do {
    matricula = Math.floor(Math.random() * 10000); // Matrícula entre 0 e 9999
    matriculaRepetida = false;

    for (let i = 0; i < matriculasGeradas.length; i++) {
      if (matriculasGeradas[i] === matricula) {
        matriculaRepetida = true;
        break;
      }
    }
  } while (matriculaRepetida);

  matriculasGeradas.push(matricula);
  return matricula;
}

function gerarFuncionario(matriculasGeradas) {
  return {
    matricula: gerarMatriculaUnica(matriculasGeradas),
    nome: gerarNome(),
    salarioBruto: (Math.random() * 5000 + 2000).toFixed(2), 
  };
}

function folhaDePagamento(func) {
  let reducaoInss = 0.12 * func.salarioBruto;
  let salarioLiquido = func.salarioBruto - reducaoInss;
  return {
    ...func,
    reducaoInss: reducaoInss.toFixed(2),
    salarioLiquido: salarioLiquido.toFixed(2),
  };
}

let folhaPagamentosLista = [];
let matriculasGeradas = [];

for (let i = 0; i < 80; i++) {
  let func = gerarFuncionario(matriculasGeradas);
  let folha = folhaDePagamento(func);
  folhaPagamentosLista.push(folha);
}

function exibirDados(folha) {
  console.log(folha);
}

for (let i = 0; i < folhaPagamentosLista.length; i++) {
  exibirDados(folhaPagamentosLista[i]);
}
