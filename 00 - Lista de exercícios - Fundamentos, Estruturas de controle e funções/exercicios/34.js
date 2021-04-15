const ComparaString = (palavra1, palavra2) => {
  return palavra1.toLowerCase().includes(palavra2.toLowerCase());
};

const palavra1 = 'ABCDEF1234';
const palavra2 = 'abcdef1234';

console.log(ComparaString(palavra1, palavra2));
