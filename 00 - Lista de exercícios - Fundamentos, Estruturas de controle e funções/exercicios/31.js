const contaNegativos = (array) => {
  let negativos = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) negativos++;
  }
  return { negativos };
};

const retornaVetorComNumerosRandomicos = (min, max, quantidade) => {
  min = min || 0;
  max = max || 10;
  quantidade = quantidade || 100;
  let troca;
  if (min > max) {
    troca = min;
    min = max;
    max = troca;
  }
  let vetor = [];
  for (let index = 0; index < quantidade; index++) {
    let random = Math.floor(Math.random() * (max - min) + min);
    vetor.push(random);
  }
  return vetor;
};

console.log(contaNegativos(retornaVetorComNumerosRandomicos(-100, 100)));
console.log(contaNegativos(retornaVetorComNumerosRandomicos(-4, 10)));
console.log(contaNegativos(retornaVetorComNumerosRandomicos(0, 100)));
console.log(contaNegativos(retornaVetorComNumerosRandomicos(-100, -1)));
