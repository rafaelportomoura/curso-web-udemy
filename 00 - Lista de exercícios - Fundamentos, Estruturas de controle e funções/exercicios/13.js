const isDiaUtil = (dia) => {
  switch (dia) {
    case 1:
    case 7:
      return false;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return true;

    default:
      return { erro: 'Dia inválido' };
  }
};

console.log(isDiaUtil(1));
console.log(isDiaUtil(2));
console.log(isDiaUtil(3));
console.log(isDiaUtil(4));
console.log(isDiaUtil(5));
console.log(isDiaUtil(6));
console.log(isDiaUtil(7));
console.log(isDiaUtil(8));
