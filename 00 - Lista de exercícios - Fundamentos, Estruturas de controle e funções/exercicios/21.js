const retornaAdicional = (idade) => {
  return idade < 10 ? 80 : idade <= 30 ? 50 : idade <= 60 ? 95 : 130;
};

console.log(`R$${100 + retornaAdicional(9)}`);
console.log(`R$${100 + retornaAdicional(30)}`);
console.log(`R$${100 + retornaAdicional(60)}`);
console.log(`R$${100 + retornaAdicional(70)}`);
