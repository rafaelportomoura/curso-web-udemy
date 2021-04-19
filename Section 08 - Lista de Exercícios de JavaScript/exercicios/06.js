const inverso = (aSerInvertido) => {
  return typeof aSerInvertido === 'number'
    ? -aSerInvertido
    : typeof aSerInvertido === 'boolean'
    ? !aSerInvertido
    : `booleano ou números esperado, mas o parâmetro é do tipo ${typeof aSerInvertido}`;
};

console.log(inverso(true));
console.log(inverso('6'));
console.log(inverso(-2000));
console.log(inverso([]));
console.log(inverso({}));
