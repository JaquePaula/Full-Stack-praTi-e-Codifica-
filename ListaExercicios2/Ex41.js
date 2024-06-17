/* Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

let pessoa = {
  nome: "Jaqueline",
  idade: 25,
};

console.log("Idade:", pessoa.idade);

pessoa.email = "jaqueline@gmail.com";

console.log("Pessoa", pessoa);
