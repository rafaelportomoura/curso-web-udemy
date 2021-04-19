const filtrarNumeros = (array) => {
  const number_array = [];
  for (const element of array) {
    if (typeof element === 'number') number_array.push(element);
  }
  return number_array;
};

console.log(filtrarNumeros(['Javascript', 1, '3', 'Web', 20]));
console.log(filtrarNumeros(['a', 'c']));
