/*

23 - Divisões sucessivas

Escreva um algoritmo que leia um número e divida-o por dois sucessivamente até que o seu resultado seja menor que 1.

Retorne a quantidade de vezes que o número foi dividido no formato:
--------------------------
'Quantidade total de divisões: n'
--------------------------

*/

function successiveDivisions(number) {
  // Desenvolva seu código nessa função
  let count = 0;
  for (count = 0 ; number >= 1 ; count +=1){
    number = number / 2
  }
  return `Quantidade total de divisões: ${count}`
}

console.log(successiveDivisions(512));

module.exports = successiveDivisions;
