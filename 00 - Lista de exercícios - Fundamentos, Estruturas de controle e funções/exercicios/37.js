const progressaoAritmetica = (n, a1, r) => {
  let soma = 0;
  let a = 0;
  for (let termo = 0; termo < n; termo++) {
    a = a1 + termo * r;
    console.log(`Termo: ${a}`);
    soma += a;
  }
  return soma;
};

const progressaoGeometrica = (n, a1, r) => {
  let soma = 0;
  let a = 0;
  for (let termo = 0; termo < n; termo++) {
    a = a1 * r ** termo;
    console.log(`Termo: ${a}`);
    soma += a;
  }
  return soma;
};

console.log(progressaoAritmetica(5, 1, 2));
console.log(progressaoGeometrica(5, 1, 2));
