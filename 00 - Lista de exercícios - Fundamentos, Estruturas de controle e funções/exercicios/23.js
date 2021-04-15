const retornaMediaPonderada = (n1, n2, n3) => {
  const soma_das_notas =
    n1 > n2 && n1 > n3
      ? n1 * 4 + (n2 * 3 + n3 * 3)
      : n2 > n1 && n2 > n3
      ? n2 * 4 + (n1 * 3 + n3 * 3)
      : n3 * 4 + (n1 * 3 + n2 * 3);
  return soma_das_notas / 10;
};

const alunos = [
  {
    codigo: 0,
    n1: 10,
    n2: 9,
    n3: 8,
  },
  {
    codigo: 1,
    n1: 2,
    n2: 8,
    n3: 4,
  },
  {
    codigo: 2,
    n1: 8,
    n2: 0,
    n3: 4,
  },
  {
    codigo: 3,
    n1: 9,
    n2: 0,
    n3: 10,
  },
  {
    codigo: 4,
    n1: 10,
    n2: 1,
    n3: 3,
  },
  {
    codigo: -1,
    n1: 0,
    n2: 0,
    n3: 0,
  },
  {
    codigo: 5,
    n1: 0,
    n2: 0,
    n3: 0,
  },
];

const menu = (alunos) => {
  let index = 0;
  while (alunos[index].codigo >= 0 && index < alunos.length) {
    console.log(
      `Código do aluno: ${alunos[index].codigo} Classificação:`,
      retornaMediaPonderada(
        alunos[index].n1,
        alunos[index].n2,
        alunos[index].n3
      ) >= 5
        ? 'APROVADO'
        : 'REPROVADO'
    );
    index++;
  }
};

menu(alunos);
