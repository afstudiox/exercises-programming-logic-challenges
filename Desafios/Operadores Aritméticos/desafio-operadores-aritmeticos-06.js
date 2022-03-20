/*

06 - Calcular IMC

André resolveu criar seu próprio programa de cálculo de Índice de Massa Corporal (IMC).

Considere  que:
* A fórmula para calcular o IMC é divisão do peso (em kg) pela altura ao quadrado (em metros);
* André pesa 75 kg e sua altura é 1,80 m;

Escreva o algoritmo usado por André para calcular seu próprio IMC e o retorne.

*/

function IMC(base, height){
  // Desenvolva seu código nessa função
  const powerH = height**2
  return powerH/base;
}

console.log(IMC(70,1.8))

module.exports = IMC;
