# Índice

- [Índice](#índice)
- [Operador Rest/Spread](#operador-restspread)
- [Tagged template](#tagged-template)
- [Tagged template #02](#tagged-template-02)
- [Map](#map)
- [Set](#set)

# Operador Rest/Spread

Operador `...` rest(juntar)/spread(espalhar)

Usar rest com parâmetro de função

```js
function soma(...numeros) {
  return numeros.reduce((num, acc) => num + acc);
}

console.log(soma(1, 2, 3));
// 6
```

Usar spread com objeto

```js
const funcionario = { nome: 'Maria', salario: 12345.99 };
const clone = { ativo: true, ...funcionario };

console.log(clone);
// { ativo: true, nome: 'Maria', salario: 12345.99 }
```

Usar spread com array

```js
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', 'Rafaela', ...grupoA];

console.log(grupoFinal);
// ['Maria','Rafaela', 'João', 'Pedro', 'Gloria']
```

# Tagged template

Processa o template string dentro de uma função

```js
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra string';
}

const aluno = 'Gui';
const situacao = 'Aprovado';

console.log(tag`${aluno} está ${situacao}.`);
// [ '', ' está ', '.' ]
// [ 'Gui', 'Aprovado' ]
// Outra string
```

# Tagged template #02

Processa o template string dentro de uma função

```js
function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join('');
}

const preco = 29.99;
const precoParcela = 11;

console.log(real`1x de ${preco} ou 3x de ${precoParcela}.`);
// [ '', ' está ', '.' ]
// [ 'Gui', 'Aprovado' ]
// Outra string
```

# Map

Estrutura chave-valor que não permite repetições de chaves, porém permite qualquer atributo como chave

```js
const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react);
// undefined

console.log(tecnologias.get('react').framework);
// true

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});
// [Function] 'Função
// {} 'Objeto'
// 123 'Número'

console.log(chavesVariadas.has(123));
// true

chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
// false

console.log(chavesVariadas.size);
// 2
```

# Set

Estrutura de conjunto não indexada e que não aceita repetição

```js
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Flamengo');
times.add('Vasco');

console.log(times);
// Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }

console.log(times.size);
// 5

console.log(times.has('vasco'));
// false

console.log(times.has('Vasco'));
// true

times.delete('Flamengo');

console.log(times.has('Flamengo'));
// false

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];

const nomesSet = new Set(nomes);

console.log(nomesSet);
// Set(3) { 'Raquel', 'Lucas', 'Julia' }
```
