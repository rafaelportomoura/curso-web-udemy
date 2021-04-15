const trocaVetores = (vetorA, vetorB) => {
  if (vetorA.length !== vetorB.length) return 'Tamanhos são diferentes';

  for (let index = 0; index < vetorA.length; index++) {
    [vetorA[index], vetorB[index]] = [vetorB[index], vetorA[index]];
  }

  return [vetorA, vetorB];
};

let vetorA = ['a', 'b', 'c', 'd'];
let vetorB = [1, 2, 3, 4];

[vetorA, vetorB] = trocaVetores(vetorA, vetorB);

console.log(vetorA);
console.log(vetorB);
