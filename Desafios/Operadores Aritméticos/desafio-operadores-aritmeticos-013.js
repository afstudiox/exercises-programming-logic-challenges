/*

13 - Cor aleatória

Elabore uma função que retorne uma cor RGB aleatória no formato:
--------------
"rgb(r, g, b)"
--------------

 */

function ramdomNumberRGB(){
  min = 0;
  max = 256;
  return Math.floor(Math.random() * (max -min + 1)) + min;
}

//console.log(ramdomNumberRGB());

function generateColor(){
  // Desenvolva seu código nessa função
  return `rgb(${ramdomNumberRGB()}, ${ramdomNumberRGB()}, ${ramdomNumberRGB()})`;
}

console.log(generateColor())

module.exports = generateColor;
