const objetoParaArray = (objeto) => {
  const array = [];
  for (const key in objeto) {
    array.push([key, objeto[key]]);
  }
  return array;
};

console.log(
  objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software',
  })
);
console.log(
  objetoParaArray({
    codigo: 11111,
    preco: 12000,
  })
);
