const porExtenso = (numero) => {
  switch (numero) {
    case 1:
      return 'Um';
    case 2:
      return 'Dois';
    case 3:
      return 'Três';
    case 4:
      return 'Quatro';
    case 5:
      return 'Cinco';
    case 6:
      return 'Seis';
    case 7:
      return 'Sete';
    case 8:
      return 'Oito';
    case 9:
      return 'Nove';
    case 10:
      return 'Dez';

    default:
      return { erro: 'Numero fora do intervalo' };
  }
};

console.log(porExtenso(1));
console.log(porExtenso(2));
console.log(porExtenso(3));
console.log(porExtenso(4));
console.log(porExtenso(5));
console.log(porExtenso(6));
console.log(porExtenso(7));
console.log(porExtenso(8));
console.log(porExtenso(9));
console.log(porExtenso(10));
console.log(porExtenso(11));
