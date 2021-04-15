const retornaDelta = (a, b, c) => b ** 2 - 4 * a * c;

const retornaX = (a, b, raiz_delta) => (-b + raiz_delta) / (2 * a);

const retornaBhaskara = (a, b, c) => {
  let delta = retornaDelta(a, b, c);
  if (delta < 0) return 'Delta é negativo';
  return [retornaX(a, b, Math.sqrt(delta)), retornaX(a, b, -Math.sqrt(delta))];
};

console.log('Bhaskara: ', retornaBhaskara(3, -5, 12));
console.log('Bhaskara: ', retornaBhaskara(1, 12, -13));
