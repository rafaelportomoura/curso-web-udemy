const retornaJurosSimples = (
  capital_inicial,
  taxa_de_juros,
  tempo_de_aplicação
) => capital_inicial * (1 + taxa_de_juros * tempo_de_aplicação);

const retornaJurosCompostos = (
  capital_inicial,
  taxa_de_juros,
  tempo_de_aplicação
) => capital_inicial * (1 + taxa_de_juros) ** tempo_de_aplicação;

console.log(retornaJurosSimples(100, 0.1, 5));
console.log(retornaJurosCompostos(100, 0.1, 5).toFixed(2));
