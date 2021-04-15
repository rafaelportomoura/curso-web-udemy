const retornaImparesEmIntervalo = (inicio = 0, fim = 100) => {
  let troca;
  if (inicio > fim) {
    troca = inicio;
    inicio = fim;
    fim = troca;
  }
  let impares = 0;
  for (let index = inicio; index < fim; index++) {
    if (index % 2 === 1) impares++;
  }
  return impares;
};

console.log(retornaImparesEmIntervalo());
console.log(retornaImparesEmIntervalo(100, 0));
console.log(retornaImparesEmIntervalo(36, 40));
