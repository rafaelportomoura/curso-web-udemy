const contarCaractere = (caracter, string) => {
  let quantidade = 0;
  for (const char of string) {
    if (caracter === char) quantidade++;
  }
  return quantidade;
};

console.log(contarCaractere('r', 'A sorte favorece os audazes'));
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'));
