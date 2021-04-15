const contaParesEImpares = (array) => {
  let pares = 0;
  let impares = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) pares++;
    else impares++;
  }
  return { pares, impares };
};

const retornaVetorEmIntervalo = (inicio, fim) => {
  let vetor = [];
  for (let index = inicio; index <= fim; index++) {
    vetor.push(index);
  }
  return vetor;
};

console.log(contaParesEImpares(retornaVetorEmIntervalo(0, 40)));
console.log(contaParesEImpares(retornaVetorEmIntervalo(30, 59)));
console.log(contaParesEImpares(retornaVetorEmIntervalo(8, 99)));
console.log(contaParesEImpares(retornaVetorEmIntervalo(0, 100)));
