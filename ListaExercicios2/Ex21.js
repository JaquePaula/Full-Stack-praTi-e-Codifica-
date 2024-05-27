/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require("prompt-sync")();

let sexo = parseInt(prompt("Digite 1 para homem e 2 para mulher: "))
let alt = parseFloat(prompt("Digite sua altura"))

function pesoIdeal(alt, sexo){
  let pesoIdeal
  if (sexo === 1){
  pesoIdeal = 72.7 * alt - 58
  } else if(sexo === 2){
  pesoIdeal = 61.1 * alt - 44.7
}
  return pesoIdeal;
}

let peso = pesoIdeal(alt, sexo);
console.log("Seu peso ideal é " + peso.toFixed(2));

