const multiplicaCadaElementoPorNumero = (array, numero) => {
  const vetor = [];
  for (let index = 0; index < array.length; index++) {
    vetor.push(numero * array[index]);
  }
  return vetor;
};

const multiplicaCadaElementoValorMaiorQueCincoPorNumero = (array, numero) => {
  const vetor = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 5) vetor.push(array[index] * numero);
  }
  return vetor;
};

const vetor = [10, 2, 33, 3, 5, 3, 15, 4];

console.log(multiplicaCadaElementoPorNumero(vetor, 2));
console.log(multiplicaCadaElementoValorMaiorQueCincoPorNumero(vetor, 2));
