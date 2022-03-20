/*

17 - Financiamento de veículo

Escreva um algoritmo para gerenciar as contas de um financiamento de veículo. 

A pessoa que quer fazer o financiamento precisa informar:

* o valor total do carro;
* o valor da entrada a ser dada;
* quantidade de parcelas que ela deseja pagar.

A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.

Desenvolva a solução e retorne conforme o exemplo (os valores monetários precisam ter 2 casas decimais após a virgula):

--------------------------------
Valor Financiado: R$35000,00;
Valor do Juros: R$1750,00;
Quantidade de Parcelas: 36;
Valor da Parcela: R$1020,83;
Valor Total do Carro: R$46750,00.
--------------------------------

*/

function carFinancing(carPrice, entranceValue, quota) {
  // Desenvolva seu código nessa função
  const tax = 0.05;
  const financialValue = (carPrice-entranceValue);
  const interest = (financialValue * tax);
  const quotaValue = ((financialValue + interest)/quota);



  return (
    "Valor Financiado: R$" +
    (financialValue.toFixed(2)).replace(".",",") + (";") +
    "\nValor do Juros: R$" +
    (interest.toFixed(2)).replace(".",",") + (";") +
    "\nQuantidade de Parcelas: " +
    (quota) + (";") +
    "\nValor da Parcela: R$" +
    (quotaValue.toFixed(2)).replace(".",",") + (";") +
    "\nValor Total do Carro: R$" +
    ((quota * quotaValue) + entranceValue).toFixed(2).replace(".",",") + (".")
  );
  
}

console.log(carFinancing(50000, 10000, 48));

module.exports = carFinancing;
