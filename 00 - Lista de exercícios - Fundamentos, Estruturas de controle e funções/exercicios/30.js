const maiorEmenor = (array) => {
  let maior = -Infinity;
  let menor = +Infinity;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maior) maior = array[index];
    if (array[index] < menor) menor = array[index];
  }
  return { maior, menor };
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

console.log(maiorEmenor(retornaVetorComNumerosRandomicos(0, 40)));
console.log(maiorEmenor(retornaVetorComNumerosRandomicos(30, 59, 10)));
console.log(maiorEmenor(retornaVetorComNumerosRandomicos(8, 99)));
console.log(maiorEmenor(retornaVetorComNumerosRandomicos(0, 100)));
