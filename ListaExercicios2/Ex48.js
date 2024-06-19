/* Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

let inventarioLojaA = {
  maçã: 10,
  banana: 5,
  laranja: 7,
};

let inventarioLojaB = {
  banana: 8,
  laranja: 3,
  uva: 12,
};

function combinarInventarios(inventarioA, inventarioB) {
  let novoInventario = {};

  for (let chave in inventarioA) {
    novoInventario[chave] = inventarioA[chave];
  }

  for (let chave in inventarioB) {
    if (novoInventario[chave] !== undefined) {
      novoInventario[chave] += inventarioB[chave];
    } else {
      novoInventario[chave] = inventarioB[chave];
    }
  }

  return novoInventario;
}

let novoInventario = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Novo Inventário:", novoInventario);
