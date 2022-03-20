/*

08 - Conta do restaurante

Escreva um algoritmo que recebe o valor de um prato, calcule e retorne o valor final dele acrescendo 10% de taxa por ser uma área turística e mais 5% de gorjeta para o garçon.

Obs: Retornar um valor do tipo number com duas casa decimais.

*/

function restaurantExpenses(account){
  // Desenvolva seu código nessa função
  return Number(((account*1.1)*1.05).toFixed(2));
}

console.log(restaurantExpenses(100));

module.exports = restaurantExpenses;
