const calcularSalario = (horas_trabalhadas, pagamento_por_hora) =>
  `Salário igual a R$${(horas_trabalhadas * pagamento_por_hora).toFixed(2)}`;

console.log(calcularSalario(150, 40.5));
