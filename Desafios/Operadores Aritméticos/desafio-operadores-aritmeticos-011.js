/*

11 - Loja de ração

Escreva uma algoritmo para uma loja de ração que recebe o preço de um produto e retorna as formas de pagamentos disponíveis.

Considere as seguintes premissas:
* À vista possui 10% de desconto e parcelado em 4x possui juros de 15%.

Exemplo:
-------------------------------
Entrada: 
80

Saída:
"À Vista: R$72,00 ou 4x de: R$23,00"
-------------------------------

Obs: seguir o mesmo formato de retorno da mensagem de saída.

*/

function paymentOptions(price) {
  // Desenvolva seu código nessa função
  const vista = +(price*.9.toPrecision(3));
  const prazo = +((price*1.15)/4).toPrecision(3);
  return `À Vista: R$${vista} ou 4x de: R$${prazo}`
}

console.log(paymentOptions(10))

module.exports = paymentOptions;
