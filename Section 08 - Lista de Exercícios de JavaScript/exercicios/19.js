const somaNumeros = (soma, numero) => soma + numero;
const media = (total, quantidade) => total / quantidade;

const calcularMedia = (array) => media(array.reduce(somaNumeros), array.length);

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
