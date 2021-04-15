const retornaNotasDoCedulas = (dinheiro) => {
  let notas_de_100 = Math.floor(dinheiro / 100);
  dinheiro %= 100;
  let notas_de_50 = Math.floor(dinheiro / 50);
  dinheiro %= 50;
  let notas_de_10 = Math.floor(dinheiro / 10);
  dinheiro %= 10;
  let notas_de_5 = Math.floor(dinheiro / 5);
  dinheiro %= 5;
  let notas_de_1 = Math.floor(dinheiro / 1);

  let notas = '';

  notas += notas_de_100 ? `${notas_de_100} nota(s) de R$100. ` : '';
  notas += notas_de_50 ? `${notas_de_50} nota(s) de R$50. ` : '';
  notas += notas_de_10 ? `${notas_de_10} nota(s) de R$10. ` : '';
  notas += notas_de_5 ? `${notas_de_5} nota(s) de R$5. ` : '';
  notas += notas_de_1 ? `${notas_de_1} nota(s) de R$1.` : '';

  return notas;
};

console.log(retornaNotasDoCedulas(18));
console.log(retornaNotasDoCedulas(0));
