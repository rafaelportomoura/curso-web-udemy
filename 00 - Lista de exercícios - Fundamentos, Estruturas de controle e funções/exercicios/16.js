const calculadora = (num1, operacao, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return { erro: 'Não é um número' };
  }

  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return { erro: 'Não é possível divisão por 0' };
      return num1 / num2;

    default:
      return { erro: 'Operação inválida!' };
  }
};

console.log(calculadora(1, '+', 1));
console.log(calculadora(4, '-', 2));
console.log(calculadora(3, '*', 6));
console.log(calculadora(6, '/', 2));
console.log(calculadora(10, '/', 0));
console.log(calculadora(3, 'x', 6));
console.log(calculadora(7, '%', 3));
console.log(calculadora('x', '+', 2));
