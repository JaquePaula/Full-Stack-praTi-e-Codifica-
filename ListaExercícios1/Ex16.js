/* Escreva um algoritmo para imprimir os 
50 primeiros número primos maior que 100. 
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

let contador = 1;
let numero = 100;
let primo = true

while (contador <= 50) {
  primo = true;

  for (let i = 2; i * i <= numero; i++) {  
    if (numero % i === 0) {
      primo = false; 
      break;
    }
  }

  if (primo) {
    console.log("contador:", contador, "e numero: ", numero);
    contador++;
  }
  numero++;
}
