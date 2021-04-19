const simboloMais = (quantidade) => {
  let string = '';
  for (let i = 0; i < quantidade; i++) {
    string += '+';
  }
  return string;
};

console.log(simboloMais(2));
console.log(simboloMais(4));
