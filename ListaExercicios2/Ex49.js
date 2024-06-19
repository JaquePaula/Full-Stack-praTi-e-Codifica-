/* Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

let transacoes = [
  { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
  { id: 2, valor: 50, data: "2023-01-02", categoria: "Transporte" },
  { id: 3, valor: 200, data: "2023-01-03", categoria: "Alimentação" },
  { id: 4, valor: 150, data: "2023-01-04", categoria: "Saúde" },
  { id: 5, valor: 75, data: "2023-01-05", categoria: "Transporte" },
];

function agruparTransacoesPorCategoria() {
  let resultado = {};

  for (let { id, valor, data, categoria } of transacoes) {
    if (!resultado[categoria]) { // não existe
      resultado[categoria] = {
        transacoes: Array(),
        subtotal: 0,
      };
    }
    resultado[categoria].transacoes.push({ id, valor, data });
    resultado[categoria].subtotal += valor;
  }
  return resultado;
}

function formatarSaida(transacoesAgrupadas) {
  let saida = "";

  for (let categoria in transacoesAgrupadas) {
    saida += `Categoria: ${categoria}\n`;
    saida += `Subtotal: ${transacoesAgrupadas[categoria].subtotal}\n`;
    saida += "Transações:\n";
    for (let transacao of transacoesAgrupadas[categoria].transacoes) {
      saida += `  ID: ${transacao.id}, Valor: ${transacao.valor}, Data: ${transacao.data}\n`;
    } saida += "\n"
  } 
  return saida;
}

let transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);
let saidaFormatada = formatarSaida(transacoesAgrupadas);
console.log(saidaFormatada);

