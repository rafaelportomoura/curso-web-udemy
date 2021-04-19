const multiplicar = (x, y) => {
  let multiplicacao = 0;
  for (let i = 0; i < y; i++) {
    multiplicacao += x;
  }
  return multiplicacao;
};

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
