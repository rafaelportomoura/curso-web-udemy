# Índice

- [Índice](#índice)
- [Array: Visão Geral](#array-visão-geral)
- [Array: Métodos Importantes](#array-métodos-importantes)
- [Simulando Array com Objetos](#simulando-array-com-objetos)
- [Foreach #01](#foreach-01)
- [Foreach #02](#foreach-02)
- [Map #01](#map-01)
- [Map #02](#map-02)
- [Map #03](#map-03)
- [Filter #01](#filter-01)
- [Filter #02](#filter-02)
- [Reduce #01](#reduce-01)
- [Reduce #02](#reduce-02)
- [Reduce #03](#reduce-03)
- [Imperativo vs Declarativo](#imperativo-vs-declarativo)
- [Concat](#concat)
- [FlatMap](#flatmap)

# Array: Visão Geral

[_voltar ao índice_](#índice)

```js
console.log(typeof Array, typeof new Array(), typeof []);
// function object object
```

```js
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);
// [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
// Bia

console.log(aprovados[1]);
// Carlos

console.log(aprovados[2]);
// Ana

console.log(aprovados[3]);
// undefined

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);
// 5

aprovados[9] = 'Rafael';
console.log(aprovados.length);
// 10

console.log(aprovados[8] === undefined);
// true

console.log(aprovados);
// [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort();
console.log(aprovados);
// [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1];
console.log(aprovados[1]);
// undefined

console.log(aprovados[2]);
// Bia

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento1', 'Elemento2');
console.log(aprovados);
// [ 'Bia', 'Elemento1', 'Elemento2', 'Ana' ]
```

# Array: Métodos Importantes

[_voltar ao índice_](#índice)

```js
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o último
console.log(pilotos);
// [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen'); // insere na ultima posição
console.log(pilotos);
// [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift(); // remove o primeiro
console.log(pilotos);
// [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hammilton'); // insere na primeira posição empurrando os elementos
console.log(pilotos);
// [ 'Hammilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);
// [ 'Hammilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1);
console.log(pilotos);
// [ 'Hammilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// metódo slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);
// [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
// [ 'Alonso', 'Bottas', 'Raikkonen' ]
```

# Simulando Array com Objetos

[_voltar ao índice_](#índice)

```js
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' };

Object.defineProperty(quaseArray, 'toString', {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

console.log(quaseArray[0]);
// Rafael

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), meuArray);
// [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]
```

# Foreach #01

[_voltar ao índice_](#índice)

```js
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array);
});
/*
1) Agatha
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
2) Aldo
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
3) Daniel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
4) Raquel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
*/

aprovados.forEach((nome) => console.log(nome));
/* 
Agatha
Aldo
Daniel
Raquel
*/

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
/*
Agatha
Aldo
Daniel
Raquel
*/
```

# Foreach #02

[_voltar ao índice_](#índice)

```js
Array.prototype.forEach2 = function (f) {
  for (let index = 0; index < this.length; index++) {
    f(this[index], index, this);
  }
};

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
/*
1) Agatha
2) Aldo
3) Daniel
4) Raquel
*/
```

# Map #01

[_voltar ao índice_](#índice)

```js
const nums = [1, 2, 3, 4, 5];

// For com próposito

let resultado = nums.map((e) => {
  return e * 2;
});

console.log(resultado, nums);
// [ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
// [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
```

# Map #02

[_voltar ao índice_](#índice)

```js
const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco":  13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];

const jsonToObject = (json) => {
  return JSON.parse(json);
};

const retornaPreco = ({ preco }) => preco;

const arrayComPrecos = carrinho.map(jsonToObject).map(retornaPreco);

console.log(arrayComPrecos);
// [ 3.45, 13.9, 41.22, 7.5 ]
```

# Map #03

[_voltar ao índice_](#índice)

```js
Array.prototype.map2 = function (callback) {
  const array = [];
  let index = 0;
  for (const element of this) {
    array.push(callback(element, index, this));
    index++;
  }
  return array;
};

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco":  13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];

const jsonToObject = (json) => {
  return JSON.parse(json);
};

const retornaPreco = ({ preco }) => preco;

const arrayComPrecos = carrinho.map2(jsonToObject).map2(retornaPreco);

console.log(arrayComPrecos);
// [ 3.45, 13.9, 41.22, 7.5 ]
```

# Filter #01

[_voltar ao índice_](#índice)

```js
const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];

const isCaro = (p) => p.preco >= 500;
const isFragil = (p) => p.fragil;

console.log(produtos.filter(isCaro).filter(isFragil));
// [ { nome: 'Ipad Pro', preco: 4199, fragil: true }, { nome: 'Ipad Pro', preco: 4199, fragil: true } ]
```

# Filter #02

[_voltar ao índice_](#índice)

```js
Array.prototype.filter2 = function (callback) {
  const array = [];
  let index = 0;
  for (const element of this) {
    if (callback(element, index, this)) {
      array.push(element);
    }
    index++;
  }
  return array;
};

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];

const isCaro = (p) => p.preco > 500;
const isFragil = (p) => p.fragil;

console.log(produtos.filter2(isCaro).filter2(isFragil));
// [ { nome: 'Ipad Pro', preco: 4199, fragil: true }, { nome: 'Ipad Pro', preco: 4199, fragil: true } ]
```

# Reduce #01

[_voltar ao índice_](#índice)

**Com** valor inicial:

```js
const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce((acumulador, atual) => {
    return acumulador + atual;
  }, 10);

console.log(resultado);
// 45
```

**Sem** valor inicial:

```js
const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce((acumulador, atual) => {
    return acumulador + atual;
  });

console.log(resultado);
// 35
```

# Reduce #02

[_voltar ao índice_](#índice)

Minha resolução:

```js
const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = alunos.reduce((acumulador, atual) => {
  if (atual.bolsista === false) return false;
  return acumulador;
}, true);
console.log(`Todos bolsista: ${todosBolsistas}`);
// Todos bolsista: false

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.reduce((acumulador, atual) => {
  if (atual.bolsista === true) return true;
  return acumulador;
}, false);

console.log(`Algum bolsista: ${algumBolsista}`);
// Algum bolsista: true
```

Resolução do professor:

```js
const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));
// false

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));
// true
```

# Reduce #03

[_voltar ao índice_](#índice)

```js
Array.prototype.reduce2 = function (callback, valorInicial) {
  const indice = valorInicial ? 0 : 1;
  let acumulador = valorInicial || this[0];

  for (let index = indice; index < this.length; index++) {
    acumulador = callback(acumulador, this[index], index, this);
  }
  return acumulador;
};

const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

const resultado = alunos
  .map((a) => a.nota)
  .reduce2((acumulador, atual) => {
    return acumulador + atual;
  }, 10);

console.log(resultado);
// 45
```

# Imperativo vs Declarativo

[_voltar ao índice_](#índice)

```js
const alunos = [
  { nome: 'João', nota: 7.9 },
  { nome: 'Maria', nota: 9.2 },
];

// Imperativo
// Os detalhes na abordagem imperativa são mais importantes do o que tem que ser feito

let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativo
// Já na abordagem declarativa, os detalhes não são tão importantes quanto o que tem ser feito
// Essa abordagem é mais interessante, pois tem possibilidade de reuso de código

const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);
```

# Concat

[_voltar ao índice_](#índice)

```js
const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];

const todos = filhas.concat(filhos);

console.log(todos);
// [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ]

console.log(filhas);
// [ 'Ualeskah', 'Cibalena' ]

console.log(filhos);
// [ 'Uoxiton', 'Uesclei' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
```

# FlatMap

[_voltar ao índice_](#índice)

```js
const escola = [
  {
    nome: 'Turma M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 8.1,
      },
      {
        nome: 'Ana',
        nota: 9.3,
      },
    ],
  },
  {
    nome: 'Turma M2',
    alunos: [
      {
        nome: 'Rebeca',
        nota: 8.9,
      },
      {
        nome: 'Roberto',
        nota: 7.3,
      },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);
// [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);
// [ 8.1, 9.3, 8.9, 7.3 ]
```
