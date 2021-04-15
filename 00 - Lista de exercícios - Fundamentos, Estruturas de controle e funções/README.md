# Lista de exercícios - Fundamentos, Estruturas de controle e funções

- [Lista de exercícios - Fundamentos, Estruturas de controle e funções](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)
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
  - [Exercício 31](#exercício-31)
  - [Exercício 32](#exercício-32)
  - [Exercício 33](#exercício-33)
  - [Exercício 34](#exercício-34)
  - [Exercício 35](#exercício-35)
  - [Exercício 36](#exercício-36)
  - [Exercício 37](#exercício-37)
  - [Exercício 38](#exercício-38)
  - [Exercício 39](#exercício-39)
  - [Exercício 40](#exercício-40)

## Exercício 1

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

```js
const operacoesAritmeticas = (a, b) => {
  console.log(`soma ${a + b}`);
  console.log(`subtração ${a - b}`);
  console.log(`multiplicação ${a * b}`);
  console.log(`divisão ${a / b}`);
};

operacoesAritmeticas(10, 5);
```

## Exercício 2

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

```js
const classificaTriangulo = (a, b, c) => {
  if (a === b && b === c) {
    return 'Equilátero';
  } else if (a === b || a === c || b === c) {
    return 'Isósceles';
  }
  return 'Escaleno';
};

console.log(classificaTriangulo(3, 3, 3));
console.log(classificaTriangulo(10, 10, 12));
console.log(classificaTriangulo(5, 4, 3));
```

## Exercício 3

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

```js
const potenciacao = (b, e) => b ** e;

console.log(potenciacao(2, 2));
```

## Exercício 4

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

```js
const modulo = (dividendo, divisor) => dividendo % divisor;

console.log(modulo(6, 2));
```

## Exercício 5

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

```js
const toMoney = (money) => {
  return `R$${money.toFixed(2).toString().replace('.', ',')}`;
};

console.log(toMoney(0.30000000000000004));
```

## Exercício 6

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

```js
const retornaJurosSimples = (
  capital_inicial,
  taxa_de_juros,
  tempo_de_aplicação
) => capital_inicial * (1 + taxa_de_juros * tempo_de_aplicação);

const retornaJurosCompostos = (
  capital_inicial,
  taxa_de_juros,
  tempo_de_aplicação
) => capital_inicial * (1 + taxa_de_juros) ** tempo_de_aplicação;

console.log(retornaJurosSimples(100, 0.1, 5));
console.log(retornaJurosCompostos(100, 0.1, 5).toFixed(2));
```

## Exercício 7

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”.

```js
const retornaDelta = (a, b, c) => b ** 2 - 4 * a * c;

const retornaX = (a, b, raiz_delta) => (-b + raiz_delta) / (2 * a);

const retornaBhaskara = (a, b, c) => {
  let delta = retornaDelta(a, b, c);
  if (delta < 0) return 'Delta é negativo';
  return [retornaX(a, b, Math.sqrt(delta)), retornaX(a, b, -Math.sqrt(delta))];
};

console.log('Bhaskara: ', retornaBhaskara(3, -5, 12));
console.log('Bhaskara: ', retornaBhaskara(1, 12, -13));
```

## Exercício 8

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

_Obs.:_ O primeiro jogo não conta como novo recorde do melhor.Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)

```js
const retornaQuantidadeDeRecordesEpiorJogo = (vetorDeJogos) => {
  let piorJogoPosicao = 1;
  let piorJogoPontuacao = vetorDeJogos[0];
  let quantidadeDeRecorde = 0;
  let maiorPontuacao = vetorDeJogos[0];
  for (let index = 0; index < vetorDeJogos.length; index++) {
    const jogo = parseInt(vetorDeJogos[index]);

    if (piorJogoPontuacao > jogo) {
      piorJogoPontuacao = jogo;
      piorJogoPosicao = index + 1;
    }

    if (jogo > maiorPontuacao) {
      quantidadeDeRecorde++;
      maiorPontuacao = jogo;
    }
  }

  return [quantidadeDeRecorde, piorJogoPosicao];
};

const splitString = (string, separador) => {
  return string.split(separador);
};

const myGames = '10 20 20 8 25 3 0 30 1';

console.log(retornaQuantidadeDeRecordesEpiorJogo(splitString(myGames, ' ')));
```

## Exercício 9

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40e o aluno será aprovado.

```js
const arredondaNumero = (nota) => {
  if (nota < 38) return nota;
  if (nota % 5 >= 3) return nota - (nota % 5) + 5;

  return nota;
};

const retornaClassificacaoDoAluno = (nota) => {
  let nota_final = arredondaNumero(nota);
  return nota_final >= 40
    ? `Aprovado com nota ${nota_final}`
    : `Reprovado com nota ${nota_final}`;
};

console.log(retornaClassificacaoDoAluno(29));
console.log(retornaClassificacaoDoAluno(38));
console.log(retornaClassificacaoDoAluno(82));
console.log(retornaClassificacaoDoAluno(83));
```

## Exercício 10

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

```js
const isMultipleOf3 = (number) => !(number % 3);

console.log(isMultipleOf3(2));
console.log(isMultipleOf3(9));
console.log(isMultipleOf3(7));
console.log(isMultipleOf3(6));
```

## Exercício 11

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

As regras para o cálculo dos anos bissextos são as seguintes:  
De 4 em 4 anos é ano bissexto;  
De 100 em 100 anos não é ano bissexto;  
De 400 em 400 anos é ano bissexto;  
Prevalecem as últimas regras sobre as primeiras.Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false.

```js
const regraBissexto1 = (ano) => !(ano % 400);
const regraBissexto2 = (ano) => !(ano % 100);
const regraBissexto3 = (ano) => !(ano % 4);

const isAnoBissexto = (ano) => {
  return regraBissexto1(ano)
    ? true
    : regraBissexto2(ano)
    ? false
    : regraBissexto3(ano);
};

console.log(isAnoBissexto(2000));
console.log(isAnoBissexto(1900));
console.log(isAnoBissexto(2004));
```

## Exercício 12

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Faça um algoritmo que calcule o fatorial de um número.

```js
const fatorial = (numero) => {
  if (numero === 0 || numero === 1) return 1;

  return numero * fatorial(numero - 1);
};

console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));
```

## Exercício 13

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

```js
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
```

## Exercício 14

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.

```js
const verdurao = (fruta) => {
  switch (fruta) {
    case 'maçã':
      return 'Não vendemos esta fruta aqui';

    case 'kiwi':
      return 'Estamos com escassez de kiwis';

    case 'melancia':
      return 'Aqui está, são 3 reais o quilo';

    default:
      return { erro: 'Não possuimos essa opção' };
  }
};

console.log(verdurao('maçã'));
console.log(verdurao('kiwi'));
console.log(verdurao('melancia'));
console.log(verdurao('javali'));
```

## Exercício 15

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.

```js
const comprarCarro = (carro) => {
  switch (carro) {
    case 'hatch':
      return 'Compra efetuada com sucesso';
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?';
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui';
  }
};

console.log(comprarCarro('hatch'));
console.log(comprarCarro('sedan'));
console.log(comprarCarro('motocicleta'));
console.log(comprarCarro('caminhonete'));
console.log(comprarCarro('suv'));
```

## Exercício 16

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘\*’ e ‘/’. Crie um caso default para operações inválidas.

```js
const calculadora = (num1, operacao, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return { erro: 'Não é um número' };
  }

  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) return { erro: 'Não é possível divisão por 0' };
      return num1 / num2;

    default:
      return { erro: 'Operação inválida!' };
  }
};

console.log(calculadora(1, '+', 1));
console.log(calculadora(4, '-', 2));
console.log(calculadora(3, '*', 6));
console.log(calculadora(6, '/', 2));
console.log(calculadora(10, '/', 0));
console.log(calculadora(3, 'x', 6));
console.log(calculadora(7, '%', 3));
console.log(calculadora('x', '+', 2));
```

## Exercício 17

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
|Plano|Aumento|
|:--- | :---- |
|A|10%|
|B|15%|
|C|20%|

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

```js
const retornaNovoSalario = (plano, salario) => {
  switch (plano) {
    case 'A':
      return `R$${(salario * 1.1).toFixed(2)}`;
    case 'B':
      return `R$${(salario * 1.15).toFixed(2)}`;
    case 'C':
      return `R$${(salario * 1.2).toFixed(2)}`;

    default:
      return { erro: 'Plano inválido' };
  }
};

console.log(retornaNovoSalario('A', 1000));
console.log(retornaNovoSalario('B', 1000));
console.log(retornaNovoSalario('C', 1000));
console.log(retornaNovoSalario('D', 1000));
```

## Exercício 18

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’

```js
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
```

## Exercício 19

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

O cardápio de uma lanchonete é o seguinte:
|Código|Descrição do Produto|Preço|
| :--- | :---------------- | :-- |
|100|Cachorro Quente|R$ 3,00|
|200|Hambúrguer Simples|R$ 4,00|
|300|Cheeseburger|R$ 5,50|
|400|Bauru|R$ 7,50|
|500|Refrigerante|R$ 3,50|
|600|Suco|R$ 2,80|

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valora ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

```js
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
```

## Exercício 20

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$ 18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

```js
const retornaNotasDoCedulas = (dinheiro) => {
  let notas_de_100 = Math.floor(dinheiro / 100);
  dinheiro %= 100;
  let notas_de_50 = Math.floor(dinheiro / 50);
  dinheiro %= 50;
  let notas_de_10 = Math.floor(dinheiro / 10);
  dinheiro %= 10;
  let notas_de_5 = Math.floor(dinheiro / 5);
  dinheiro %= 5;
  let notas_de_1 = Math.floor(dinheiro / 1);

  let notas = '';

  notas += notas_de_100 ? `${notas_de_100} nota(s) de R$100. ` : '';
  notas += notas_de_50 ? `${notas_de_50} nota(s) de R$50. ` : '';
  notas += notas_de_10 ? `${notas_de_10} nota(s) de R$10. ` : '';
  notas += notas_de_5 ? `${notas_de_5} nota(s) de R$5. ` : '';
  notas += notas_de_1 ? `${notas_de_1} nota(s) de R$1.` : '';

  return notas;
};

console.log(retornaNotasDoCedulas(18));
console.log(retornaNotasDoCedulas(0));
```

## Exercício 21

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$ 80; 2) conveniados com idade entre 10 e 30 anos pagam R$ 50; 3) conveniados comida de acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

```js
const retornaAdicional = (idade) => {
  return idade < 10 ? 80 : idade <= 30 ? 50 : idade <= 60 ? 95 : 130;
};

console.log(`R$${100 + retornaAdicional(9)}`);
console.log(`R$${100 + retornaAdicional(30)}`);
console.log(`R$${100 + retornaAdicional(60)}`);
console.log(`R$${100 + retornaAdicional(70)}`);
```

## Exercício 22

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

```js
const retornaJurosCompostos = (
  capital_inicial,
  tempo_de_aplicação,
  taxa_de_juros = 0.5
) => capital_inicial * (1 + taxa_de_juros) ** tempo_de_aplicação;

const retornaAnuidade = (anuidade, mes) => {
  return `R$${retornaJurosCompostos(anuidade, mes - 1).toFixed(2)}`;
};

console.log(retornaAnuidade(100, 1));
console.log(retornaAnuidade(100, 2));
console.log(retornaAnuidade(100, 3));
console.log(retornaAnuidade(100, 4));
console.log(retornaAnuidade(100, 5));
console.log(retornaAnuidade(100, 6));
console.log(retornaAnuidade(100, 7));
console.log(retornaAnuidade(100, 8));
console.log(retornaAnuidade(100, 9));
console.log(retornaAnuidade(100, 10));
console.log(retornaAnuidade(100, 11));
console.log(retornaAnuidade(100, 12));
```

## Exercício 23

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

```js
const retornaMediaPonderada = (n1, n2, n3) => {
  const soma_das_notas =
    n1 > n2 && n1 > n3
      ? n1 * 4 + (n2 * 3 + n3 * 3)
      : n2 > n1 && n2 > n3
      ? n2 * 4 + (n1 * 3 + n3 * 3)
      : n3 * 4 + (n1 * 3 + n2 * 3);
  return soma_das_notas / 10;
};

const alunos = [
  {
    codigo: 0,
    n1: 10,
    n2: 9,
    n3: 8,
  },
  {
    codigo: 1,
    n1: 2,
    n2: 8,
    n3: 4,
  },
  {
    codigo: 2,
    n1: 8,
    n2: 0,
    n3: 4,
  },
  {
    codigo: 3,
    n1: 9,
    n2: 0,
    n3: 10,
  },
  {
    codigo: 4,
    n1: 10,
    n2: 1,
    n3: 3,
  },
  {
    codigo: -1,
    n1: 0,
    n2: 0,
    n3: 0,
  },
  {
    codigo: 5,
    n1: 0,
    n2: 0,
    n3: 0,
  },
];

const menu = (alunos) => {
  let index = 0;
  while (alunos[index].codigo >= 0 && index < alunos.length) {
    console.log(
      `Código do aluno: ${alunos[index].codigo} Classificação:`,
      retornaMediaPonderada(
        alunos[index].n1,
        alunos[index].n2,
        alunos[index].n3
      ) >= 5
        ? 'APROVADO'
        : 'REPROVADO'
    );
    index++;
  }
};

menu(alunos);
```

## Exercício 24

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

```js
let index = 0;

while (index < 11) {
  console.log('Hello World!');
  index++;
}
```

## Exercício 25

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Escrever um programa para exibir os números de 1 até 50 na tela.

```js
for (let index = 1; index <= 50; index++) {
  console.log(index);
}
```

## Exercício 26

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Fazer um programa para encontrar todos os pares entre 1 e 100

```js
for (let index = 1; index <= 100; index++) {
  if (index % 2 === 0) console.log(index);
}
```

## Exercício 27

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

```js
const retornaAnos = (crianca, crianca2) => {
  let anos = 0;
  while (crianca.altura < crianca2.altura) {
    crianca.altura = crianca.taxa_de_crescimento * crianca.altura;
    crianca2.altura = crianca2.taxa_de_crescimento * crianca2.altura;
    anos++;
  }
  return anos;
};

const comparaAlturaCriancas = (crianca1, crianca2) => {
  let retorno = '';
  if (crianca1.altura === crianca2.altura) {
    retorno += 'As duas crianças possuem a msm altura. ';
  } else if (crianca1.altura > crianca2.altura) {
    retorno += 'A crianca 2 é menor. ';
    if (crianca2.taxa_de_crescimento > crianca1.taxa_de_crescimento)
      retorno +=
        'Mas ultrapassara a crianca1 em ' +
        retornaAnos(crianca2, crianca1) +
        ' ano(s)';
    else retorno += 'E não ultrapassara a crianca1';
  } else {
    retorno += 'A crianca 1 é menor. ';
    if (crianca1.taxa_de_crescimento > crianca2.taxa_de_crescimento)
      retorno +=
        'Mas ultrapassara a crianca2 em ' +
        retornaAnos(crianca1, crianca2) +
        ' ano(s)';
    else retorno += 'E não ultrapassara a crianca2';
  }
  return retorno;
};

function Crianca(altura, taxa_de_crescimento) {
  return { altura: altura, taxa_de_crescimento: taxa_de_crescimento };
}

const crianca1 = new Crianca(130, 1.21);
const crianca2 = new Crianca(170, 1.2);

console.log(comparaAlturaCriancas(crianca1, crianca2));
```

## Exercício 28

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

```js
const contaParesEImpares = (array) => {
  let pares = 0;
  let impares = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) pares++;
    else impares++;
  }
  return { pares, impares };
};

const retornaVetorEmIntervalo = (inicio, fim) => {
  let vetor = [];
  for (let index = inicio; index <= fim; index++) {
    vetor.push(index);
  }
  return vetor;
};

console.log(contaParesEImpares(retornaVetorEmIntervalo(0, 40)));
console.log(contaParesEImpares(retornaVetorEmIntervalo(30, 59)));
console.log(contaParesEImpares(retornaVetorEmIntervalo(8, 99)));
console.log(contaParesEImpares(retornaVetorEmIntervalo(0, 100)));
```

## Exercício 29

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

```js
const contaDentroEForaDoIntervalo = (array) => {
  let dentro = 0;
  let fora = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 10 && array[index] <= 20) dentro++;
    else fora++;
  }
  return { dentro, fora };
};

const retornaVetorEmIntervalo = (inicio, fim) => {
  let vetor = [];
  for (let index = inicio; index <= fim; index++) {
    vetor.push(index);
  }
  return vetor;
};

console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(0, 40)));
console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(30, 59)));
console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(8, 99)));
console.log(contaDentroEForaDoIntervalo(retornaVetorEmIntervalo(0, 100)));
```

## Exercício 30

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

```js
const maiorEmenor = (array) => {
  let maior = -Infinity;
  let menor = +Infinity;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maior) maior = array[index];
    if (array[index] < menor) menor = array[index];
  }
  return { maior, menor };
};

const retornaVetorComNumerosRandomicos = (min, max, quantidade) => {
  min = min || 0;
  max = max || 10;
  quantidade = quantidade || 100;
  let troca;
  if (min > max) {
    troca = min;
    min = max;
    max = troca;
  }
  let vetor = [];
  for (let index = 0; index < quantidade; index++) {
    let random = Math.floor(Math.random() * (max - min) + min);
    vetor.push(random);
  }
  return vetor;
};

console.log(maiorEmenor(retornaVetorComNumerosRandomicos(0, 40)));
console.log(maiorEmenor(retornaVetorComNumerosRandomicos(30, 59, 10)));
console.log(maiorEmenor(retornaVetorComNumerosRandomicos(8, 99)));
console.log(maiorEmenor(retornaVetorComNumerosRandomicos(0, 100)));
```

## Exercício 31

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

```js
const contaNegativos = (array) => {
  let negativos = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) negativos++;
  }
  return { negativos };
};

const retornaVetorComNumerosRandomicos = (min, max, quantidade) => {
  min = min || 0;
  max = max || 10;
  quantidade = quantidade || 100;
  let troca;
  if (min > max) {
    troca = min;
    min = max;
    max = troca;
  }
  let vetor = [];
  for (let index = 0; index < quantidade; index++) {
    let random = Math.floor(Math.random() * (max - min) + min);
    vetor.push(random);
  }
  return vetor;
};

console.log(contaNegativos(retornaVetorComNumerosRandomicos(-100, 100)));
console.log(contaNegativos(retornaVetorComNumerosRandomicos(-4, 10)));
console.log(contaNegativos(retornaVetorComNumerosRandomicos(0, 100)));
console.log(contaNegativos(retornaVetorComNumerosRandomicos(-100, -1)));
```

## Exercício 32

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

```js
const mediaAritmetica = (array) => {
  let soma = 0;
  for (let index = 0; index < array.length; index++) {
    soma += array[index];
  }
  return { media: soma / array.length };
};

const retornaVetorComNumerosRandomicos = (min, max, quantidade) => {
  min = min || 0;
  max = max || 10;
  quantidade = quantidade || 100;
  let troca;
  if (min > max) {
    troca = min;
    min = max;
    max = troca;
  }
  let vetor = [];
  for (let index = 0; index < quantidade; index++) {
    let random = Math.floor(Math.random() * (max - min) + min);
    vetor.push(random);
  }
  return vetor;
};

console.log(mediaAritmetica(retornaVetorComNumerosRandomicos(0, 100)));
console.log(mediaAritmetica(retornaVetorComNumerosRandomicos(0, 10)));
```

## Exercício 33

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

```js
const vetorInteiro = [2, 4, 6, 8];
const vetorString = ['valor 1', 'valor 2', 'valor 3', 'valor 4'];
const vetorDouble = [1.44, 2.66, 3.88, 4.12];

console.log(vetorString.concat(vetorInteiro));
console.log(vetorDouble.concat(vetorInteiro));
```

## Exercício 34

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

```js
const ComparaString = (palavra1, palavra2) => {
  return palavra1.toLowerCase().includes(palavra2.toLowerCase());
};

const palavra1 = 'ABCDEF1234';
const palavra2 = 'abcdef1234';

console.log(ComparaString(palavra1, palavra2));
```

## Exercício 35

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.

```js
const vetorPilha = [1, 2, 3, 4, 5];

const vetorAdiciona = [6, 7, 8, 9, 10];

for (let index = 0; index < vetorAdiciona.length; index++) {
  vetorPilha.push(vetorAdiciona[index]);
}

console.log(vetorPilha);
console.log(vetorAdiciona);
```

## Exercício 36

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente seo valor do elemento for maior que 5

```js
const multiplicaCadaElementoPorNumero = (array, numero) => {
  const vetor = [];
  for (let index = 0; index < array.length; index++) {
    vetor.push(numero * array[index]);
  }
  return vetor;
};

const multiplicaCadaElementoValorMaiorQueCincoPorNumero = (array, numero) => {
  const vetor = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 5) vetor.push(array[index] * numero);
  }
  return vetor;
};

const vetor = [10, 2, 33, 3, 5, 3, 15, 4];

console.log(multiplicaCadaElementoPorNumero(vetor, 2));
console.log(multiplicaCadaElementoValorMaiorQueCincoPorNumero(vetor, 2));
```

## Exercício 37

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,bem como a soma dos elementos.

```js
const progressaoAritmetica = (n, a1, r) => {
  let soma = 0;
  let a = 0;
  for (let termo = 0; termo < n; termo++) {
    a = a1 + termo * r;
    console.log(`Termo: ${a}`);
    soma += a;
  }
  return soma;
};

const progressaoGeometrica = (n, a1, r) => {
  let soma = 0;
  let a = 0;
  for (let termo = 0; termo < n; termo++) {
    a = a1 * r ** termo;
    console.log(`Termo: ${a}`);
    soma += a;
  }
  return soma;
};

console.log(progressaoAritmetica(5, 1, 2));
console.log(progressaoGeometrica(5, 1, 2));
```

## Exercício 38

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

```js
const retornaImparesEmIntervalo = (inicio = 0, fim = 100) => {
  let troca;
  if (inicio > fim) {
    troca = inicio;
    inicio = fim;
    fim = troca;
  }
  let impares = 0;
  for (let index = inicio; index < fim; index++) {
    if (index % 2 === 1) impares++;
  }
  return impares;
};

console.log(retornaImparesEmIntervalo());
console.log(retornaImparesEmIntervalo(100, 0));
console.log(retornaImparesEmIntervalo(36, 40));
```

## Exercício 39

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.Faça a troca sem utilizar uma variável auxiliar.

```js
const trocaVetores = (vetorA, vetorB) => {
  if (vetorA.length !== vetorB.length) return 'Tamanhos são diferentes';

  for (let index = 0; index < vetorA.length; index++) {
    [vetorA[index], vetorB[index]] = [vetorB[index], vetorA[index]];
  }

  return [vetorA, vetorB];
};

let vetorA = ['a', 'b', 'c', 'd'];
let vetorB = [1, 2, 3, 4];

[vetorA, vetorB] = trocaVetores(vetorA, vetorB);

console.log(vetorA);
console.log(vetorB);
```

## Exercício 40

[_Lista de exercícios - Fundamentos, Estruturas de controle e funções_](#lista-de-exercícios---fundamentos-estruturas-de-controle-e-funções)

Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

```js
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
```
