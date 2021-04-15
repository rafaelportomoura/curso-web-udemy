const toMoney = (money) => {
  return `R$${money.toFixed(2).toString().replace('.', ',')}`;
};

console.log(toMoney(0.30000000000000004));
