const inverter = (objeto) => {
  const objeto_invertido = {};
  for (const key in objeto) {
    let value = objeto[key];
    objeto_invertido[value] = key;
  }
  return objeto_invertido;
};

console.log(inverter({ a: 1, b: 2, c: 3 }));
