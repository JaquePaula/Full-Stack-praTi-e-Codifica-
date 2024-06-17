/* Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */


let dados = {
  cliente: "Jaqueline",
  numeroPedido: 544,
  produtos: [
      { nome: "Camiseta", preco: 25 },
      { nome: "Calça Jeans", preco: 50 },
      { nome: "Tênis", preco: 80 }
  ],
  formaPagamento: "Cartão de crédito",
  enderecoEntrega: {
      rua: "Rua Pitangueiras",
      numero: 133,
      cidade: "Guarujá"
  }
};

function filtrarPropriedadesArray() {
  let novosDados = {};
  for (let chave in dados) { 
      if (Array.isArray(dados[chave])) { // Array.isArray para identificar se é Array
          novosDados[chave] = dados[chave];
      }
  }
  return novosDados;
}

let dadosArrays = filtrarPropriedadesArray(dados);
console.log("Objeto dados com propriedades que são arrays:", dadosArrays);


