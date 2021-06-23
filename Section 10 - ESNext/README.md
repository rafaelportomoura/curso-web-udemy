# Índice

- [Índice](#índice)
- [Operador Rest/Spread](#operador-restspread)
- [Tagged template](#tagged-template)
- [Tagged template #02](#tagged-template-02)

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
