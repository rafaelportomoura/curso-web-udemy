const retornaJurosCompostos = (
  capital_inicial,
  tempo_de_aplicação,
  taxa_de_juros = 0.5
) => capital_inicial * (1 + taxa_de_juros) ** tempo_de_aplicação;

const retornaAnuidade = (anuidade, mes) => {
  return `R$${retornaJurosCompostos(anuidade, mes - 1).toFixed(2)}`;
};

console.log(retornaAnuidade(100, 1));
console.log(retornaAnuidade(100, 2));
console.log(retornaAnuidade(100, 3));
console.log(retornaAnuidade(100, 4));
console.log(retornaAnuidade(100, 5));
console.log(retornaAnuidade(100, 6));
console.log(retornaAnuidade(100, 7));
console.log(retornaAnuidade(100, 8));
console.log(retornaAnuidade(100, 9));
console.log(retornaAnuidade(100, 10));
console.log(retornaAnuidade(100, 11));
console.log(retornaAnuidade(100, 12));
