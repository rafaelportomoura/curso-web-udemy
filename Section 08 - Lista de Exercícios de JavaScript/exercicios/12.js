const removerPropriedade = (objeto, key_to_remove) => {
  const novo_objeto = {};
  for (const key in objeto) {
    if (key !== key_to_remove) novo_objeto[key] = objeto[key];
  }
  return novo_objeto;
};

const objeto1 = {
  a: 1,
  b: 2,
};

const objeto2 = {
  id: 20,
  nome: 'caneta',
  descricao: 'Não preenchido',
};

console.log(Object.is(removerPropriedade(objeto1, 'a'), objeto1));
console.log(removerPropriedade(objeto1, 'a'));
console.log(Object.is(removerPropriedade(objeto2, 'descricao'), objeto2));
console.log(removerPropriedade(objeto2, 'descricao'));
