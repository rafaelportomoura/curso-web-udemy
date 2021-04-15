const retornaConceito = (nota) => {
  nota = Math.floor(nota);
  switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return 'D';
    case 5:
    case 6:
      return 'C';
    case 7:
    case 8:
      return 'B';
    case 9:
    case 10:
      return 'A';
    default:
      return { erro: 'Nota invalida' };
  }
};

console.log(retornaConceito(0));
console.log(retornaConceito(4.9));
console.log(retornaConceito(5));
console.log(retornaConceito(6.9));
console.log(retornaConceito(7));
console.log(retornaConceito(8.9));
console.log(retornaConceito(9));
console.log(retornaConceito(10));
console.log(retornaConceito(11));
