const retornaNovoSalario = (plano, salario) => {
  switch (plano) {
    case 'A':
      return `R$${(salario * 1.1).toFixed(2)}`;
    case 'B':
      return `R$${(salario * 1.15).toFixed(2)}`;
    case 'C':
      return `R$${(salario * 1.2).toFixed(2)}`;

    default:
      return { erro: 'Plano inválido' };
  }
};

console.log(retornaNovoSalario('A', 1000));
console.log(retornaNovoSalario('B', 1000));
console.log(retornaNovoSalario('C', 1000));
console.log(retornaNovoSalario('D', 1000));
