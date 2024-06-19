/* Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

let dados = {
  cliente: "Jaqueline",
  numeroPedido: 544,
  produtos: [
    { nome: "Camiseta", preco: 25 },
    { nome: "Calça Jeans", preco: 50 },
    { nome: "Tênis", preco: 80 },
  ],
  formaPagamento: "Dinheiro",
};

function contarPropriedadesString(objeto) {
  let contador = 0;
  for (let chave in objeto) {
    if (typeof objeto[chave] === "string") {
      //typeof para identificar se é string
      console.log("Propriedade:", chave, ":", objeto[chave]);
      contador++;
    }
  }
  return contador;
}

let numeroPropriedadesString = contarPropriedadesString(dados);
console.log("Número de propriedades do tipo string:", numeroPropriedadesString);
