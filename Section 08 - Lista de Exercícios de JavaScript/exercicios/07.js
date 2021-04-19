const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
  return inclusivo
    ? minimo <= numero && numero <= maximo
    : minimo < numero && numero < maximo;
};

console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 50));
