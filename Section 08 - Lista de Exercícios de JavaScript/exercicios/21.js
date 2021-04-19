const menorNumero = (array) => {
  let menor = +Infinity;
  for (const numero of array) {
    menor = numero < menor ? numero : menor;
  }
  return menor === +Infinity ? [] : menor;
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
