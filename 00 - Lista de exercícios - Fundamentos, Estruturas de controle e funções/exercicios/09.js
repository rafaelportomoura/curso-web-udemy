const arredondaNumero = (nota) => {
  if (nota < 38) return nota;
  if (nota % 5 >= 3) return nota - (nota % 5) + 5;

  return nota;
};

const retornaClassificacaoDoAluno = (nota) => {
  let nota_final = arredondaNumero(nota);
  return nota_final >= 40
    ? `Aprovado com nota ${nota_final}`
    : `Reprovado com nota ${nota_final}`;
};

console.log(retornaClassificacaoDoAluno(29));
console.log(retornaClassificacaoDoAluno(38));
console.log(retornaClassificacaoDoAluno(82));
console.log(retornaClassificacaoDoAluno(83));
