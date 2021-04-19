# Section 08 - Lista de Exercícios JavaScript

- [Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)
- [Exercício 1](#exercício-1)
- [Exercício 2](#exercício-2)
- [Exercício 3](#exercício-3)
- [Exercício 4](#exercício-4)
- [Exercício 5](#exercício-5)
- [Exercício 6](#exercício-6)
- [Exercício 7](#exercício-7)
- [Exercício 8](#exercício-8)
- [Exercício 9](#exercício-9)
- [Exercício 10](#exercício-10)
- [Exercício 11](#exercício-11)
- [Exercício 12](#exercício-12)
- [Exercício 13](#exercício-13)
- [Exercício 14](#exercício-14)
- [Exercício 15](#exercício-15)
- [Exercício 16](#exercício-16)
- [Exercício 17](#exercício-17)
- [Exercício 18](#exercício-18)
- [Exercício 19](#exercício-19)
- [Exercício 20](#exercício-20)
- [Exercício 21](#exercício-21)
- [Exercício 22](#exercício-22)
- [Exercício 23](#exercício-23)
- [Exercício 24](#exercício-24)
- [Exercício 25](#exercício-25)
- [Exercício 26](#exercício-26)
- [Exercício 27](#exercício-27)
- [Exercício 28](#exercício-28)
- [Exercício 29](#exercício-29)
- [Exercício 30](#exercício-30)

# Exercício 1

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que retorna a string "Olá,"concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final.

Exemplos:

```
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!
```

**Resolução:**

```js
const cumprimentar = (nome) => `Olá, ${nome}!`;

console.log(cumprimentar('Leonardo'));
console.log(cumprimentar('Maria'));
```

# Exercício 2

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

💡 _Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias)e desconsidere também dias decorridos desde o último aniversário._

Exemplos:

```
converterIdadeEmAnosParaDias(25) // retornará 9125
converterIdadeEmAnosParaDias(70) // retornará 25550
```

**Resolução:**

```js
const converterIdadeEmAnosParaDias = (anos) => anos * 365;

console.log(converterIdadeEmAnosParaDias(25));
console.log(converterIdadeEmAnosParaDias(70));
```

# Exercício 3

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês,e o quanto ele recebe por hora.O retorno da função deve ser a string "Salário igual a R$X",em que X é o quanto o funcionário ganhou no mês

Exemplos:

```
calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075"
```

**Resolução:**

```js
const calcularSalario = (horas_trabalhadas, pagamento_por_hora) =>
  `Salário igual a R$${(horas_trabalhadas * pagamento_por_hora).toFixed(2)}`;

console.log(calcularSalario(150, 40.5));
```

# Exercício 4

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que recebe um número ( de 1 a 12 ) e retorne o mês correspondente como uma string.Por exemplo,se a entrada for 2,a função deverá retornar "fevereiro", pois este é o 2°mês.

Exemplos:

```
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
```

**Resolução:**

```js
const meses = {
  1: 'janeiro',
  2: 'fevereiro',
  3: 'março',
  4: 'abril',
  5: 'maio',
  6: 'junho',
  7: 'julho',
  8: 'agosto',
  9: 'setembro',
  10: 'outubro',
  11: 'novembro',
  12: 'dezembro',
};

const nomeDoMes = (mes) => meses[mes];

console.log(nomeDoMes(1));
console.log(nomeDoMes(4));
```

# Exercício 5

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

Exemplos:

```
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
```

**Resolução:**

```js
const maiorOuIgual = (a, b) => a >= b;

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, '0'));
console.log(maiorOuIgual(5, 1));
```

# Exercício 6

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano,o retorno da função deverá ser o inverso. Por exemplo,se a entrada for false, retornará true. Se o parâmetro for numérico,o retorno será o número inverso.Por exemplo,se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipos acima,retorne "booleano ou número esperados, mas o parâmetro é do tipo..."

Exemplos:

```
inverso(true) // retornará false
inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
inverso(-2000) // retornará 2000
inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"
```

**Resolução:**

```js
const inverso = (aSerInvertido) => {
  return typeof aSerInvertido === 'number'
    ? -aSerInvertido
    : typeof aSerInvertido === 'boolean'
    ? !aSerInvertido
    : `booleano ou números esperado, mas o parâmetro é do tipo ${typeof aSerInvertido}`;
};

console.log(inverso(true));
console.log(inverso('6'));
console.log(inverso(-2000));
console.log(inverso([]));
console.log(inverso({}));
```

# Exercício 7

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que receba quatro números como parâmetro(numero,minimo,maximo,inclusivo) e retorne se o parâmetro numero(o primeiro)está entre minimo e maximo. Quando o parâmetro inclusivo for true,tenha "entre" como inclusivo,ou seja,considerando se numero é igual a minimo ou a maximo.Caso o parâmetro inclusivo não seja informado,seu valor padrão deverá ser false,portanto,a lógica será exclusiva,não considerando se numero é igual a minimo ou a maximo.

Exemplos:

```
estaEntre(10, 100, 50) // retornará true
estaEntre(16, 100, 160) // retornará false
estaEntre(3, 150, 3) // retornará false
estaEntre(3, 150, 3, true) // retornará true
```

**Resolução:**

```js
const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
  return inclusivo
    ? minimo <= numero && numero <= maximo
    : minimo < numero && numero < maximo;
};

console.log(estaEntre(10, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 50));
```

# Exercício 8

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que recebe dois números inteiros não negativos(maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

Exemplos:

```
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
```

**Resolução:**

```js
const multiplicar = (x, y) => {
  let multiplicacao = 0;
  for (let i = 0; i < y; i++) {
    multiplicacao += x;
  }
  return multiplicacao;
};

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
```

# Exercício 9

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

Exemplos:

```
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
```

**Resolução:**

```js
const repetir = (elemento, repeticoes) => {
  const array = [];
  for (let i = 0; i < repeticoes; i++) {
    array.push(elemento);
  }
  return array;
};

console.log(repetir('código', 2));
console.log(repetir(7, 3));
```

# Exercício 10

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Elabore uma função que recebe um número como parâmetro e retorne uma string como símbolo "+" na quantidade especificada no parâmetro.

Exemplos:

```
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
```

**Resolução:**

```js
const simboloMais = (quantidade) => {
  let string = '';
  for (let i = 0; i < quantidade; i++) {
    string += '+';
  }
  return string;
};

console.log(simboloMais(2));
console.log(simboloMais(4));
```

# Exercício 11

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array

Exemplos:

```
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
```

**Resolução:**

```js
const receberPrimeiroEUltimoElemento = (array) => [array[0], array[array.length - 1]];

console.log(receberPrimeiroEUltimoElemento([7, 14, 'olá']));
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]));
```

# Exercício 12

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos apenas modificando-o,mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a mesma. Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias de objetos e manipulemos dados dessas cópias, como intuito de evitar efeitos indesejáveis em algumas situações devido a referências a objetos. Abaixo,está a descrição de uma dessas funções. Você escreverá uma função que recebe um objeto como primeiro parâmetro e,como segundo parâmetro, o nome de uma propriedade contida nesse objeto.Em seguida,retorne uma cópia desse objetos sem a propriedade especificada no segundo parâmetro.

Exemplos:

```
removerPropriedade({
  a: 1,
  b: 2
}, "a") // retornará {b: 2}
removerPropriedade({
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"
```

💡 _A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função `removerPropriedade`, você poderá usar a `funçãoObject.is()`, por exemplo:_  
`Object.is(removerPropriedade(objeto, "descricao"), objeto)`  
_Retornará `false` se o objeto não for o mesmo._

**Resolução:**

```js
  const novo_objeto = {};
  for (const key in objeto) {
    if (key !== key_to_remove) novo_objeto[key] = objeto[key];
  }
  return novo_objeto;
};

const objeto1 = {
  a: 1,
  b: 2,
};

const objeto2 = {
  id: 20,
  nome: 'caneta',
  descricao: 'Não preenchido',
};

console.log(Object.is(removerPropriedade(objeto1, 'a'), objeto1));
console.log(removerPropriedade(objeto1, 'a'));
console.log(Object.is(removerPropriedade(objeto2, 'descricao'), objeto2));
console.log(removerPropriedade(objeto2, 'descricao'));
```

# Exercício 13

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.

Exemplos:

```
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
```

**Resolução:**

```js
const filtrarNumeros = (array) => {
  const number_array = [];
  for (const element of array) {
    if (typeof element === 'number') number_array.push(element);
  }
  return number_array;
};

console.log(filtrarNumeros(['Javascript', 1, '3', 'Web', 20]));
console.log(filtrarNumeros(['a', 'c']));
```

# Exercício 14

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares _chave/valor_ que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:

Exemplos:

```
objetoParaArray({
  nome: "Maria",
  profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]

objetoParaArray({
  codigo: 11111,
  preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]]
```

**Resolução:**

```js
const objetoParaArray = (objeto) => {
  const array = [];
  for (const key in objeto) {
    array.push([key, objeto[key]]);
  }
  return array;
};

console.log(
  objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software',
  })
);
console.log(
  objetoParaArray({
    codigo: 11111,
    preco: 12000,
  })
);
```

# Exercício 15

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham indices pares.

💡 _Lembre-se que um numero é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por 2 é zero._

Exemplos:

```
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
```

**Resolução:**

```js
const receberSomenteOsParesDeIndicesPares = (array) => {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && i % 2 === 0) pares.push(array[i]);
  }
  return pares;
};

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));
```

# Exercício 16

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que tém 366 dias em vez dos 365 presentes nos anos normais.

Para determinar se um ano é bissexto, É necessário saber se ele é múltiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.

Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.

Exemplos:

```
checarAnoBissexto(2020) // retornará true
checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
```

**Resolução:**

```js
const checarAnoBissexto = (ano) =>
  ano % 400 === 0 ? true : ano % 100 === 0 ? false : ano % 4 === 0 ? true : false;

console.log(checarAnoBissexto(2000));
console.log(checarAnoBissexto(2100));
```

# Exercício 17

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

Exemplos:

```
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
```

**Resolução:**

```js
const somarNumeros = (array) => array.reduce((prev, curr) => prev + curr);

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
```

# Exercício 18

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Vocé está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que vocé
está desenvolvendo no momento é a de somar o total das despesas.

Crie uma função que receba um array de produtos e retorne o total das despesas.

Exemplos:

```
despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
  {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
  {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
```

**Resolução:**

```js
const retornaPreco = (despesa) => despesa.preco;
const somaDespesas = (soma, despesa) => soma + despesa;

const despesasTotais = (array_de_despesas) =>
  array_de_despesas.map(retornaPreco).reduce(somaDespesas);

despesa1 = [
  { nome: 'Jornal Online', categoria: 'Informação', preco: 89.99 },
  { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 },
];

despesa2 = [
  { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
  { nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.9 },
];

console.log(despesasTotais(despesa1));
console.log(despesasTotais(despesa2));
```

# Exercício 19

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário. Como intuito de realizar esse cálculo,crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.

💡 _A média simples é o resultado da soma de todos os números dividido pela quantidade de números_

Exemplos:

```
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
```

**Resolução:**

```js
const somaNumeros = (soma, numero) => soma + numero;
const media = (total, quantidade) => total / quantidade;

const calcularMedia = (array) => media(array.reduce(somaNumeros), array.length);

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
```

# Exercício 20

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo.A precisão deverá ser de duas casas decimais, arredondando se necessário.

📕*Obs: a fórmula para calcular a área de um triângulo é (base x altura)/2*

Exemplos:

```
areaDoTriangulo(10, 15) // retornará 75.00
areaDoTriangulo(7, 9) // retornará 31.50
areaDoTriangulo(9.25, 13.1) // retornará 60.59
```

**Resolução:**

```js
const areaDoTriangulo = (base, altura) => (base * altura) / 2;

console.log(areaDoTriangulo(10, 15));
console.log(areaDoTriangulo(7, 9));
console.log(areaDoTriangulo(9.25, 13.1));
```

# Exercício 21

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Criar uma função que receba um array de números e retorne o menor número desse array

Exemplos:

```
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15
```

**Resolução:**

```js
const menorNumero = (array) => {
  let menor = +Infinity;
  for (const numero of array) {
    menor = numero < menor ? numero : menor;
  }
  return menor === +Infinity ? [] : menor;
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
```

# Exercício 22

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado,retorne "Parabéns! O número sorteado foi o X". Senão for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.

Exemplos:

```
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
```

**Resolução:**

```js
const funcaoDaSorte = (numero) => {
  let sorteado = Math.floor(Math.random() * (numero + 1));
  return numero === sorteado
    ? `Parabéns! O número sorteado foi o ${sorteado}`
    : `Que pena! O número sorteado foi o ${sorteado}`;
};

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));
```

# Exercício 23

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

📕 _Considere que todas as palavras só são separadas por um espaço._

Exemplos:

```
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará
```

**Resolução:**

```js
const contarPalavras = (string) => string.split(' ').length;

console.log(contarPalavras('Sou uma frase'));
console.log(contarPalavras('Me divirto aprendendo a programar'));
```

# Exercício 24

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

Exemplos:

```
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
```

**Resolução:**

```js
const contarCaractere = (caracter, string) => {
  let quantidade = 0;
  for (const char of string) {
    if (caracter === char) quantidade++;
  }
  return quantidade;
};

console.log(contarCaractere('r', 'A sorte favorece os audazes'));
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'));
```

# Exercício 25

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes. Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

Exemplos:

```
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
```

**Resolução:**

```js
const buscarPalavrasSemelhante = (palavra, array) => {
  const array_com_palavras_semelhantes = [];
  array.forEach((element) => {
    if (element.search(palavra) >= 0) {
      array_com_palavras_semelhantes.push(element);
    }
  });
  return array_com_palavras_semelhantes;
};

console.log(buscarPalavrasSemelhante('pro', ['programação', 'mobile', 'profissional']));
console.log(buscarPalavrasSemelhante('python', ['javascript', 'java', 'c++']));
```

# Exercício 26

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

Exemplos:

```
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
```

**Resolução:**

```js
const vogais = {
  a: 'a',
  e: 'e',
  i: 'i',
  o: 'o',
  u: 'u',
};

const removerVogais = (string) => {
  stringDeRetorno = '';
  for (const caractere of string) {
    if (!vogais[caractere]) stringDeRetorno += caractere;
  }
  return stringDeRetorno;
};

console.log(removerVogais('Cod3r'));
console.log(removerVogais('Fundamentos'));
```

# Exercício 27

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:

Exemplos:

```
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
```

**Resolução:**

```js
const inverter = (objeto) => {
  const objeto_invertido = {};
  for (const key in objeto) {
    let value = objeto[key];
    objeto_invertido[value] = key;
  }
  return objeto_invertido;
};

console.log(inverter({ a: 1, b: 2, c: 3 }));
```

# Exercício 28

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Elabore uma função que recebe dois parâmetros:o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.

Exemplos:

```
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
```

**Resolução:**

```js
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
```

# Exercício 29

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

Exemplos:

```
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
```

**Resolução:**

```js
const segundoMaior = (array) => array.sort((a, b) => b - a)[1];

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));
```

# Exercício 30

[Section 08 - Lista de Exercícios JavaScript](#section-08---lista-de-exercícios-javascript)

Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas

Exemplos:

```
recerberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], // média 7.625
  Mariana: [9, 6.6, 7.9, 8], // média 7.875
  Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
```

**Resolução:**

```js
const retornaMedia = (array) =>
  array.reduce((acumulador, nota) => acumulador + nota) / array.length;

const receberMelhorEstudante = (notas) => {
  const maior_media = { nome: '', media: -Infinity };
  for (const nome in notas) {
    let media = retornaMedia(notas[nome]);
    if (media > maior_media.media) {
      maior_media.nome = nome;
      maior_media.media = media;
    }
  }
  return maior_media;
};

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
```
