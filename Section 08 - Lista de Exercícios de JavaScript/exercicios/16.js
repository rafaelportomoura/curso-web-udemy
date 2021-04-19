const checarAnoBissexto = (ano) =>
  ano % 400 === 0 ? true : ano % 100 === 0 ? false : ano % 4 === 0 ? true : false;

console.log(checarAnoBissexto(2000));
console.log(checarAnoBissexto(2100));
