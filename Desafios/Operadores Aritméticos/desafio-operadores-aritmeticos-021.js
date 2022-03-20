/*

21 - Média ponderada

Escreva um algoritmo que recebe 3 notas com valores de 0 a 10 e calcule a media ponderada com pesos 3, 3 e 4 respectivamente.

Considere a seguintes premissas:
* “Aprovação” caso a média seja igual ou superior a 6;
* “Reprovação” caso a média das notas seja inferior a 6.

Retorne uma mensagem no seguinte formato:
---------------------------------------------------
'Aprovação, média: 7.7' ou 'Reprovação, média: 5.9'
---------------------------------------------------

*/

function weightedAverage(score1, score2, score3) {
  // Desenvolva seu código nessa função
  const ponder1 = 0.3;
  const ponder2 = 0.3;
  const ponder3 = 0.4;
  const averagePonder = +(( score1 * ponder1 + score2 * ponder2 + score3 * ponder3)).toFixed(1)
  return averagePonder >= 6 ? `Aprovação, média: ${averagePonder}` : `Reprovação, média: ${averagePonder}`
}

console.log(weightedAverage(2, 5, 10));

module.exports = weightedAverage;
