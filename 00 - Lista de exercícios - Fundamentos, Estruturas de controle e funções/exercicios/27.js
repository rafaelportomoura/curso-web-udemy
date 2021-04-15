const retornaAnos = (crianca, crianca2) => {
  let anos = 0;
  while (crianca.altura < crianca2.altura) {
    crianca.altura = crianca.taxa_de_crescimento * crianca.altura;
    crianca2.altura = crianca2.taxa_de_crescimento * crianca2.altura;
    anos++;
  }
  return anos;
};

const comparaAlturaCriancas = (crianca1, crianca2) => {
  let retorno = '';
  if (crianca1.altura === crianca2.altura) {
    retorno += 'As duas crianças possuem a msm altura. ';
  } else if (crianca1.altura > crianca2.altura) {
    retorno += 'A crianca 2 é menor. ';
    if (crianca2.taxa_de_crescimento > crianca1.taxa_de_crescimento)
      retorno +=
        'Mas ultrapassara a crianca1 em ' +
        retornaAnos(crianca2, crianca1) +
        ' ano(s)';
    else retorno += 'E não ultrapassara a crianca1';
  } else {
    retorno += 'A crianca 1 é menor. ';
    if (crianca1.taxa_de_crescimento > crianca2.taxa_de_crescimento)
      retorno +=
        'Mas ultrapassara a crianca2 em ' +
        retornaAnos(crianca1, crianca2) +
        ' ano(s)';
    else retorno += 'E não ultrapassara a crianca2';
  }
  return retorno;
};

function Crianca(altura, taxa_de_crescimento) {
  return { altura: altura, taxa_de_crescimento: taxa_de_crescimento };
}

const crianca1 = new Crianca(130, 1.2);
const crianca2 = new Crianca(170, 1.2);

console.log(comparaAlturaCriancas(crianca1, crianca2));
