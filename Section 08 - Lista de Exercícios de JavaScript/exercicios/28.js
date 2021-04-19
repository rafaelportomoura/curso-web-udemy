const potenciaDeDez = (expoente) => 10 ** expoente;

const numeroTemAQuantidadeDeDigitos = (numero, quantidade_de_digitos) => {
  quantidade_de_digitos_maior_igual = numero >= potenciaDeDez(quantidade_de_digitos - 1);
  quantidade_de_digitos_menor_igual = numero < potenciaDeDez(quantidade_de_digitos);

  return quantidade_de_digitos_maior_igual && quantidade_de_digitos_menor_igual;
};

const filtrarPorQuantidadeDeDigitos = (array_de_numero, quantidade_de_digitos) =>
  array_de_numero.filter((numero) =>
    numeroTemAQuantidadeDeDigitos(numero, quantidade_de_digitos)
  );

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));
