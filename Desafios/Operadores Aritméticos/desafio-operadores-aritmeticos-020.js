/*

20 - Aprovado ou reprovado?

Escreva um algoritmo que recebe 3 notas com valores de 0 a 10 e calcule a media arredondada.

Considere a seguintes premissas:
* “Aprovação” caso a média seja igual ou superior a 6;
* “Reprovação” caso a média das notas seja inferior a 6.

Retorne uma mensagem no seguinte formato:
----------------------------------------------
'Aprovação, média: 7' ou 'Reprovação, média: 5'
----------------------------------------------

*/

function avaliador(score1, score2, score3) {
  // Desenvolva seu código nessa função
  const average = Math.round((score1+score2+score3)/3)
  return average >= 6 ? `Aprovação, média: ${average}` : `Reprovação, média: ${average}`
}

console.log(avaliador(10, 6, 0));

module.exports = avaliador;
