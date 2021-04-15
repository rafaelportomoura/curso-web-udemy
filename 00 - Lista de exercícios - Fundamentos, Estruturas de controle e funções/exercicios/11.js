const regraBissexto1 = (ano) => !(ano % 400);
const regraBissexto2 = (ano) => !(ano % 100);
const regraBissexto3 = (ano) => !(ano % 4);

const isAnoBissexto = (ano) => {
  return regraBissexto1(ano)
    ? true
    : regraBissexto2(ano)
    ? false
    : regraBissexto3(ano);
};

console.log(isAnoBissexto(2000));
console.log(isAnoBissexto(1900));
console.log(isAnoBissexto(2004));
