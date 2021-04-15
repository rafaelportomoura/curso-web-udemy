const verdurao = (fruta) => {
  switch (fruta) {
    case 'maçã':
      return 'Não vendemos esta fruta aqui';

    case 'kiwi':
      return 'Estamos com escassez de kiwis';

    case 'melancia':
      return 'Aqui está, são 3 reais o quilo';

    default:
      return { erro: 'Não possuimos essa opção' };
  }
};

console.log(verdurao('maçã'));
console.log(verdurao('kiwi'));
console.log(verdurao('melancia'));
console.log(verdurao('javali'));
