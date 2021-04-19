const vogais = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
};

const removerVogais = (string) => {
  stringDeRetorno = '';
  for (const caractere of string) {
    if (!vogais[caractere]) stringDeRetorno += caractere;
  }
  return stringDeRetorno;
};

console.log(removerVogais('Cod3r'));
console.log(removerVogais('Fundamentos'));
