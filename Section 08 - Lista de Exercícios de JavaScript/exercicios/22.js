const funcaoDaSorte = (numero) => {
  let sorteado = Math.floor(Math.random() * (numero + 1));
  return numero === sorteado
    ? `Parabéns! O número sorteado foi o ${sorteado}`
    : `Que pena! O número sorteado foi o ${sorteado}`;
};

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));
