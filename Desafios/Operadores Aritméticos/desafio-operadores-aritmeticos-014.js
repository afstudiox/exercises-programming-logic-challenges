/*

14 - Tempo de viagem

Escreva um algoritmo que recebe a duração total de uma viagem em minutos e retorne a duração em horas e minutos no seguinte formato:

--------------------------------------------------
"A viagem terá duração de x hora(s) e y minuto(s)"
--------------------------------------------------

*/

function timeTravel(minutes){
  // Desenvolva seu código nessa função
  const horas = parseInt(minutes/60);
  const rest = minutes%60;
  return `A viagem terá duração de ${horas} hora(s) e ${rest} minuto(s)`;
}

console.log(timeTravel(60))

module.exports = timeTravel;
