// Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

let produtos = [
  "Dinheiro",
  "Camiseta",
  "Tênis",
  "Dinheiro",
  "Camiseta",
  "Camiseta",
];

function contarOcorrencias(strings) {
  let ocorrencias = {};

  for (let chave of strings) {
    if (ocorrencias[chave] !== undefined) {
      ocorrencias[chave]++;
    } else {
      ocorrencias[chave] = 1;
    }
  }

  return ocorrencias;
}

let ocorrenciasStrings = contarOcorrencias(produtos);
console.log(
  "Número de vezes que as palavras aparecem no array:",
  ocorrenciasStrings
);
