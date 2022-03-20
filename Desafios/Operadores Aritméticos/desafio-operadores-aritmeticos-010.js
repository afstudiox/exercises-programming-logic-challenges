/*

10 - Fahrenheit

Escreva um algoritmo que faça conversão de temperatura em graus Fahrenheit para graus Celsius e retorne
  a temperatura em celsius.

*/

function fahrenheitToCelsius(fahrenheit){
  // Desenvolva seu código nessa função
  // let celsius = +((fahrenheit - 32) * 5/9).toFixed(2)
  let celsius = +((5 * (fahrenheit - 32)) / 9).toFixed(2);
  return celsius
}

console.log(fahrenheitToCelsius(32))

module.exports = fahrenheitToCelsius;

