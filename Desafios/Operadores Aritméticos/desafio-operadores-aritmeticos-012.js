/*

12 - Peso e preço do prato

Um restaurante comprou uma balança nova e precisa adicionar um programa que calcula o valor que a pessoa vai pagar pelo prato de comida.

Escreva um algoritmo que recebe o valor por kilo e o peso do prato e
calcule o valor da refeição, retornando uma mensagem no seguinte formato:

------------------------------------
"O prato de x gramas custa: R$x,yz"
------------------------------------

Obs: O valor do prato tem que ter duas casas decimais após a virgula.

*/

function weightAndValue(price, gram) {
  // Desenvolva seu código nessa função
  const valor = ((price*gram)/1000).toFixed(2).replace('.',',');
  return `O prato de ${gram} gramas custa: R$ ${valor}`;
}

console.log(weightAndValue(37.90,735));

module.exports = weightAndValue;
