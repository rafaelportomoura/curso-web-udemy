const retornaMedia = (array) =>
  array.reduce((acumulador, nota) => acumulador + nota) / array.length;

const receberMelhorEstudante = (notas) => {
  const maior_media = { nome: '', media: -Infinity };
  for (const nome in notas) {
    let media = retornaMedia(notas[nome]);
    if (media > maior_media.media) {
      maior_media.nome = nome;
      maior_media.media = media;
    }
  }
  return maior_media;
};

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
