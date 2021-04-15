const retornaValorDoLanche = (lanche, quantidade = 1) => {
  switch (lanche) {
    case 100:
      return `R$${(quantidade * 3).toFixed(2)}`;
    case 200:
      return `R$${(quantidade * 4).toFixed(2)}`;
    case 300:
      return `R$${(quantidade * 5.5).toFixed(2)}`;
    case 400:
      return `R$${(quantidade * 7.5).toFixed(2)}`;
    case 500:
      return `R$${(quantidade * 3.5).toFixed(2)}`;
    case 600:
      return `R$${(quantidade * 2.8).toFixed(2)}`;

    default:
      return `Produto não existente`;
  }
};

console.log(retornaValorDoLanche(100));
console.log(retornaValorDoLanche(100, 2));
console.log(retornaValorDoLanche(200));
console.log(retornaValorDoLanche(200, 2));
console.log(retornaValorDoLanche(300));
console.log(retornaValorDoLanche(300, 2));
console.log(retornaValorDoLanche(400));
console.log(retornaValorDoLanche(400, 2));
console.log(retornaValorDoLanche(500));
console.log(retornaValorDoLanche(500, 2));
console.log(retornaValorDoLanche(600));
console.log(retornaValorDoLanche(600, 2));
console.log(retornaValorDoLanche(700));
