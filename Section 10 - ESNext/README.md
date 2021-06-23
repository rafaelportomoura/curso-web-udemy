# Índice

- [Índice](#índice)
- [Operador Rest/Spread](#operador-restspread)

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
