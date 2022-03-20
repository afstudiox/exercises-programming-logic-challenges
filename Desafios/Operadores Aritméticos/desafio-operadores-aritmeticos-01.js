/*

01 - Calcular a média

Escreva um algoritmo que recebe 3 valores, calcule e retorne o valor da média no formato abaixo:

---------------------
"O Valor médio é: x."
---------------------

*/

function average(number1, number2, number3){
  // Desenvolva seu código nessa função
  const calcAverage = (number1+number2+number3)/3
  return `O Valor médio é: ${calcAverage}`;
}

// average(-2,-5,-7);

module.exports = average;
