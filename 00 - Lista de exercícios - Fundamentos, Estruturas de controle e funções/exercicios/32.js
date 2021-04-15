const mediaAritmetica = (array) => {
  let soma = 0;
  for (let index = 0; index < array.length; index++) {
    soma += array[index];
  }
  return { media: soma / array.length };
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

console.log(mediaAritmetica(retornaVetorComNumerosRandomicos(0, 100)));
console.log(mediaAritmetica(retornaVetorComNumerosRandomicos(0, 10)));
