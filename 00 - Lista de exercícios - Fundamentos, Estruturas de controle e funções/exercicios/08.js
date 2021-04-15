const retornaQuantidadeDeRecordesEpiorJogo = (vetorDeJogos) => {
  let piorJogoPosicao = 1;
  let piorJogoPontuacao = vetorDeJogos[0];
  let quantidadeDeRecorde = 0;
  let maiorPontuacao = vetorDeJogos[0];
  for (let index = 0; index < vetorDeJogos.length; index++) {
    const jogo = parseInt(vetorDeJogos[index]);

    if (piorJogoPontuacao > jogo) {
      piorJogoPontuacao = jogo;
      piorJogoPosicao = index + 1;
    }

    if (jogo > maiorPontuacao) {
      quantidadeDeRecorde++;
      maiorPontuacao = jogo;
    }
  }

  return [quantidadeDeRecorde, piorJogoPosicao];
};

const splitString = (string, separador) => {
  return string.split(separador);
};

const myGames = '10 20 20 8 25 3 0 30 1';

console.log(retornaQuantidadeDeRecordesEpiorJogo(splitString(myGames, ' ')));
