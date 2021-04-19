const buscarPalavrasSemelhante = (palavra, array) => {
  const array_com_palavras_semelhantes = [];
  array.forEach((element) => {
    if (element.search(palavra) >= 0) {
      array_com_palavras_semelhantes.push(element);
    }
  });
  return array_com_palavras_semelhantes;
};

console.log(buscarPalavrasSemelhante('pro', ['programação', 'mobile', 'profissional']));
console.log(buscarPalavrasSemelhante('python', ['javascript', 'java', 'c++']));
