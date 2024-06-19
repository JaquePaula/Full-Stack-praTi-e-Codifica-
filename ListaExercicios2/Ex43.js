// Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

let obj1 = {
  cliente: "Alice",
  numeroPedido: 544,
  produtos: [
    { nome: "Camiseta", preco: 25 },
    { nome: "Calça Jeans", preco: 50 },
    { nome: "Tênis", preco: 80 },
  ],
};

let obj2 = {
  cliente: "Jaqueline",
  formaPagamento: "Dinheiro",
  enderecoEntrega: {
    rua: "Rua Pitangueiras",
    numero: 133,
    cidade: "Guarujá",
  },
};

function combinarObjetos(obj1, obj2) {
  let novoObjeto = {};

  for (let chave in obj1) {
    novoObjeto[chave] = obj1[chave];
  }

  for (let chave in obj2) {
    novoObjeto[chave] = obj2[chave];
  }
  return novoObjeto;
}

console.log("Objeto combinado:", combinarObjetos(obj1, obj2));
