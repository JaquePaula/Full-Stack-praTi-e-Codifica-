/* Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor. */

let vendas = [
  { vendedor: "Mel", valor: 100 },
  { vendedor: "Alice", valor: 150 },
  { vendedor: "Gustavo", valor: 200 },
  { vendedor: "Mel", valor: 120 },
  { vendedor: "Tom", valor: 80 },
];

function somarVendas(vendas) {
  let totalVendasPorVendedor = {};

  for (let chave of vendas) {
    if (totalVendasPorVendedor[chave.vendedor] !== undefined) {
      totalVendasPorVendedor[chave.vendedor] += chave.valor;
    } else {
      totalVendasPorVendedor[chave.vendedor] = chave.valor;
    }
  }
  return totalVendasPorVendedor;
}

let totalVendasPorVendedor = somarVendas(vendas);
console.log("Total de vendas por vendedor:", totalVendasPorVendedor);
