Índice

- [Comentários de Códigos](#comentários-de-códigos)
- [O Básico de Var , Let e Const](#o-básico-de-var--let-e-const)
  - [Var](#var)
  - [Let](#let)
  - [Const](#const)
- [Tipagem Fraca](#tipagem-fraca)
- [Tipos em JavaScript: Number](#tipos-em-javascript-number)
- [Number: Alguns Cuidados](#number-alguns-cuidados)
- [Usando Math](#usando-math)
- [Tipos em JavaScript: String](#tipos-em-javascript-string)
- [Usando Template Strings](#usando-template-strings)
- [Tipos em JavaScript: Boolean](#tipos-em-javascript-boolean)

# Comentários de Códigos

Comentar uma linha

```js
// comentário
```

Comentar um bloco

```js
/*
bloco
*/
```

Evitar comentários desnecessários  
Colocar bons nomes em variáveis

# O Básico de Var , Let e Const

## Var

A palavra reservada Var, **permite** que uma variável seja declarada mais de uma vez dentro do mesmo escopo. Forma **mais antiga**.

```js
var a = 1;
var a = 10;
```

## Let

Forma **mais moderna** de se criar as variáveis. O let, diferentemente do var, **não permite** que uma variável seja declarada mais de uma vez dentro do mesmo escopo

```js
let b = 2;
```

## Const

Usado para declarar **constantes**, variáveis imutáveis.

```js
const c = 3;
```

# Tipagem Fraca

Javascript é uma linguagem com **tipagem fraca**, ou seja, suas variáveis tem tipagem dinâmica. Para saber o tipo de uma variável usasse `typeof variavel`

Todos os tipos, com a exceção de objetos, definem valores imutáveis (valores que são incapazes de mudar).

[ref](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures)

**Tipo "Boolean"**

Boolean representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false).

**Tipo "Null"**

O tipo Null tem exatamente um valor: null(nulo).

**Tipo "Undefined"**

Uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido).

**Tipo "Number"**

De acordo com os padrões ECMAScript, existe somente um tipo numérico. O double-precision 64-bit binary format IEEE 754 value (número entre -(253 -1) e 253 -1). Não existe um tipo específico para inteiros. Além de poderem representar números de ponto-flutuante, o tipo number possui três valores simbólicos: +Infinity, -Infinity, e NaN (não numérico).

Para verificar o maior ou o menor valor disponível dentro de +/-Infinity, você pode usar as constantes Number.MAX_VALUE ou Number.MIN_VALUE, e a partir do ECMAScript 6, você também consegue verificar se um número está dentro da região de um ponto flutuante do tipo double-precision, usando Number.isSafeInteger(), como também Number.MAX_SAFE_INTEGER, e Number.MIN_SAFE_INTEGER. Fora dessa região, números inteiros em JavaScript não são mais precisos e serão uma aproximação de um número de ponto flutuante do tipo double-precision

**Tipo "String"**

O tipo String em JavaScript é usado para representar dados textuais. Isto é um conjunto de "elementos" de valores de 16-bits unsigned integer. Cada elemento na string ocupa uma posição na string. O primeiro elemento está no índice 0, o próximo no índice 1, e assim por diante. O comprimento de uma string é o número de elementos nela.

**Symbol type**

Symbols são novos no JavaScript ECMAScript edição 6. Um Symbol é um valor primitivo único e imutável e pode ser usado como chave de uma propriedade de Object (ver abaixo). em algumas linguagens de programação, Symbols são chamados de atoms (átomos). Você também pode compará-los à enumerações nomeadas (enum) em C

**Objetos**

No JavaScript, obejtos podem ser vistos como uma coleção de propriedades. Com o object literal syntax, um conjunto limitado de propriedades podem ser inicializados; a partir daí propriedades podem ser adicionadas e removidas. Estas propriedades podem assumir valores de qualquer tipo, incluindo outros objetos, o que permite construir estruturas de dados mais complexas. Propriedades são identificadas usando valores chave. Um valor chave pode ser uma String ou um valor Symbol.

```js
let qualquer = 'Legal';
console.log(typeof qualquer);
// string
qualquer = 3.15;
console.log(typeof qualquer);
// number

// Evitar nome genérico e sigla
let valor = '';
let numero = 1;
let pqp = false; // Produto Químico Perigoso
```

# Tipos em JavaScript: Number

```js
const peso1 = 1.1;
const peso2 = Number('2.0');

console.log(peso1, peso2);
// 1.1 2
console.log(Number.isInteger(peso1));
// false
console.log(Number.isInteger(peso2));
// true

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
media = total / (peso1 + peso2);

console.log(media.toFixed(2));
// 7.94
console.log(media.toString());
// 7.935516129032259
console.log(media.toString(2)); //converte em binario
// 111.11101111011111011111110000101011000100101111011001
console.log(typeof media)
// number
console.log(typeof Number)
// function
```

# Number: Alguns Cuidados

```js
console.log(7 / 0)
// Infinity
console.log("10" / 2)
// 5
console.log("3" + 2)
// 32
console.log("3" - 2)
// 1
console.log("10.2" / 2)
NaN
console.log("Show!" * 2)
NaN
console.log(0.1 + 0.7)
// 0.7999999999999999
// console.log(10.toString()) Gera erro 
console.log((10.345).toFixed(2))
// 10.34
```

# Usando Math

```js
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)
// 98.5203456165759
console.log(typeof Math)
// object
```  

# Tipos em JavaScript: String

```js
const escola ="Cod3r"

console.log(escola.charAt(4))
// r
console.log((escola.charAt(5))
// 
// imprimi vazio
console.log(escola.charCodeAt(3)) // valor na tabela ASCII
// 51
console.log(escola.indexOf('3'))
// 3
console.log(escola.substring(1))
// od3r
console.log(escola.substring(0, 3))
// Cod
console.log('Escola '.concat(escola).concat("!"))
// Escola Cod3r!
console.log('Escola '+ (escola) + ("!"))
// Escola Cod3r!
console.log(escola.replace(3,'e'))
// Coder
console.log('Ana,Maria,Pedro'.split(','))
// [ 'Ana', 'Maria', 'Pedro' ]

```


# Usando Template Strings

```js
const name = 'Rebeca'

const concatenacao = 'Olá'+name + '!'

const template = `
    Olá
    ${ name }!`

console.log(concatenacao, template)
/*
 *OláRebeca! 
 *   Olá
 *   Rebeca!
 */

// expressoes
console.log(`1 + 1 = ${1 + 1}`)
// 1 + 1 = 2

// funcoes
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)
// Ei... CUIDADO
```

# Tipos em JavaScript: Boolean


