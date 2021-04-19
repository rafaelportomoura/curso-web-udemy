const retornaPreco = (despesa) => despesa.preco;
const somaDespesas = (soma, despesa) => soma + despesa;

const despesasTotais = (array_de_despesas) =>
  array_de_despesas.map(retornaPreco).reduce(somaDespesas);

despesa1 = [
  { nome: 'Jornal Online', categoria: 'Informação', preco: 89.99 },
  { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 },
];

despesa2 = [
  { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
  { nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.9 },
];

console.log(despesasTotais(despesa1));
console.log(despesasTotais(despesa2));
