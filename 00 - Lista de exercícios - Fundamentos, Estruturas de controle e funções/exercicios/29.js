const contaDentroEForaDoIntervalo = (array) => {
  let dentro = 0;
  let fora = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 10 && array[index] <= 20) dentro++;
    else fora++;
  }
  return { dentro, fora };
};

const retornaVetorEmIntervalo = (inicio, fim) => {
  let vetor = [];
  for (let index = inicio; index <= fim; index++) {
    vetor.push(index);
  }
  return vetor;
};

console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(0, 40)));
console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(30, 59)));
console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(8, 99)));
console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(0, 100)));
