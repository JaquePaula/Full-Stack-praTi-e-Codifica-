// Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.

let idades = {
  tom: 3,
  mel: 2,
  alice: 4,
};

function multiplicarValor() {
  let novoObjeto = {};

  for (let chave in idades) {
    if (chave in idades) {
      novoObjeto[chave] = idades[chave] * 5;
    }
  }
  return novoObjeto;
}

let novoObjeto = multiplicarValor();
console.log("Resultado:", novoObjeto);
