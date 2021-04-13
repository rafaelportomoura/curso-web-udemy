# Índice

- [Índice](#índice)
- [Comentários de Códigos](#comentários-de-códigos)
- [O Básico de Var , Let e Const](#o-básico-de-var--let-e-const)
- [Tipagem Fraca](#tipagem-fraca)
- [Tipos em JavaScript: Number](#tipos-em-javascript-number)
- [Number: Alguns Cuidados](#number-alguns-cuidados)
- [Usando Math](#usando-math)
- [Tipos em JavaScript: String](#tipos-em-javascript-string)
- [Usando Template Strings](#usando-template-strings)
- [Tipos em JavaScript: Boolean](#tipos-em-javascript-boolean)
- [Tipos em JavaScript: Array](#tipos-em-javascript-array)
- [Tipos em JavaScript: Object](#tipos-em-javascript-object)
- [Entendo o Null & Undefined](#entendo-o-null--undefined)
- [Quase Tudo é Função!!!](#quase-tudo-é-função)
- [Exemplos Básicos de Funções #01](#exemplos-básicos-de-funções-01)
- [Exemplos Básicos de Funções #02](#exemplos-básicos-de-funções-02)
- [Declaração de Variáveis Com Var #01](#declaração-de-variáveis-com-var-01)
- [Declaração de Variáveis Com Var #02](#declaração-de-variáveis-com-var-02)
- [Declaração de Variáveis Com Let](#declaração-de-variáveis-com-let)
- [Usando Var em Loop #01](#usando-var-em-loop-01)
- [Usando Let em Loop #01](#usando-let-em-loop-01)
- [Usando Var em Loop #02](#usando-var-em-loop-02)
- [Usando Let em Loop #02](#usando-let-em-loop-02)
- [Entendendo o Hoisting](#entendendo-o-hoisting)
- [Função Vs Objeto](#função-vs-objeto)
- [Par Nome/Valor](#par-nomevalor)
- [Notação Ponto](#notação-ponto)
- [Operadores: Atribuição](#operadores-atribuição)
- [Operadores: Destructuring #01](#operadores-destructuring-01)
- [Operadores: Destructuring #02](#operadores-destructuring-02)
- [Operadores: Destructuring #03](#operadores-destructuring-03)
- [Operadores: Destructuring #04](#operadores-destructuring-04)
- [Operadores: Aritméticos](#operadores-aritméticos)
- [Operadores: Relacionais](#operadores-relacionais)
- [Operadores: Lógicos](#operadores-lógicos)
- [Operadores: Unários](#operadores-unários)
- [Operadores: Ternário](#operadores-ternário)
- [Contexto de Execução: Browser vs Node](#contexto-de-execução-browser-vs-node)
- [Tratamento de Erro (Try/Catch/Throw)](#tratamento-de-erro-trycatchthrow)

# Comentários de Códigos

[*voltar ao indice*](#índice)

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

[*voltar ao indice*](#índice)

**Var**

A palavra reservada Var, **permite** que uma variável seja declarada mais de uma vez dentro do mesmo escopo. Forma **mais antiga**.  
Var tem escopo global e de função.  

```js
var a = 1;
var a = 10;
```

**Let**

Forma **mais moderna** de se criar as variáveis. O let, diferentemente do var, **não permite** que uma variável seja declarada mais de uma vez dentro do mesmo escopo  
Let tem escopo global, de função e de bloco

```js
let b = 2;
```

**Const**

Usado para declarar **constantes**, variáveis imutáveis.

```js
const c = 3;
```

# Tipagem Fraca

[*voltar ao indice*](#índice)

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

No JavaScript, objetos podem ser vistos como uma coleção de propriedades. Com o object literal syntax, um conjunto limitado de propriedades podem ser inicializados; a partir daí propriedades podem ser adicionadas e removidas. Estas propriedades podem assumir valores de qualquer tipo, incluindo outros objetos, o que permite construir estruturas de dados mais complexas. Propriedades são identificadas usando valores chave. Um valor chave pode ser uma String ou um valor Symbol.

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

[*voltar ao indice*](#índice)

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

[*voltar ao indice*](#índice)

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

[*voltar ao indice*](#índice)

```js
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)
// 98.5203456165759
console.log(typeof Math)
// object
```  

# Tipos em JavaScript: String

[*voltar ao indice*](#índice)

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

[*voltar ao indice*](#índice)

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

[*voltar ao indice*](#índice)

```js
let isAtivo = false
console.log(isAtivo)
// false

isAtivo = true
console.log(isAtivo)
// true

isAtivo = 1
console.log(!isAtivo)
// false 

isAtivo = 1
console.log(!!isAtivo)
// true 

// verdadeiros...
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// true

//falsos...
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// pra finalizar
console.log(( '' || null || 0 || 'epa'))
// epa

let nome = ''

console.log(nome || 'Desconhecido')
//Desconhecido
```

# Tipos em JavaScript: Array

[*voltar ao indice*](#índice)

```js

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// 7.2 9.2
console.log(valores[4])
// undefined

valores[4] = 10
console.log(valores[4])
// 3.5      

valores[10] = 9.2
console.log(valores)
// [ 7.7, 8.9, 6.3, 9.2, 3.5, <5 empty items>, 9.2 ]

console.log(valores.length) // tamanho
// 11

valores.push({id: 3}, false, null, 'teste')
console.log(valores) // não é ideal misturar valores no array
/*
 *[
 *  7.7,
 *  8.9,
 *  6.3,
 *  9.2,
 *  3.5,
 *  <5 empty items>,
 *  9.2,
 *  { id: 3 },
 *  false,
 *  null,
 *  'teste'
 *]
 */

console.log(valores.pop()) //retira o ultimo valor
// teste

delete valores[0]
console.log(valores)
/*
 *[
 *  <1 empty item>,
 *  8.9,
 *  6.3,
 *  9.2,
 *  3.5,
 *  <5 empty items>,
 *  9.2,
 *  { id: 3 },
 *  false,
 *  null,
 *]
 */

console.log(typeof valores)
// object
```

# Tipos em JavaScript: Object

[*voltar ao indice*](#índice)

```js
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)
// { nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla 2,
    }
  }
}

console.log(prod2)
// { nome: 'Camisa Polo', preco: 79.9, obj: { blabla: 1, obj: { blabla: 2 } } }
```

# Entendo o Null & Undefined

[*voltar ao indice*](#índice)

A um conceito em que a diferença é atribuição por valor e por referencia

Undefined é a copia por valor 
E null por referencia

Quando o tipo é primitivo, a cópia é por valor
Então quando é objeto, a cópia é por referência

```js
const a = { name: "a"}
console.log(a)
// { name: "a"}

const b = a
console.log(b)
// { name: "a"}

b.name = 'Opa'
console.log(b)
// { name: "Opa"}

console.log(a)
// { name: "Opa"}

// ----------------------------------------

let c = 3 // undefined
console.log(c)
// 3

let d = c // undefined
console.log(d)
// 3

d++
console.log(d) 
// 4

console.log(c)
// 3

// ----------------------------------------

let valor // não inicializada
console.log(valor)
// undefined

valor = null // ausência de valor
console.log(valor)
// null

const produto = {}
console.log(produto.preco)
// undefined
console.log(produto)
// {}

produto.preco = 3.5
console.log(produto)
// { preco: 3.5 }
```

# Quase Tudo é Função!!!

[*voltar ao indice*](#índice)

```js
console.log(typeof Object)
// function

class Produto = {}
console.log(typeof Produto)
// function
```

# Exemplos Básicos de Funções #01

[*voltar ao indice*](#índice)

```js

// Funcao sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2,3)
// 5
imprimirSoma()
// NaN
imprimirSoma(2)
// NaN
imprimirSoma(2,3,4,5,6,7,8,9)
// 5

// Funcao com retorno
function soma(a, b = 0) {
  return a+b
}

console.log(soma(2,3))
// 5
console.log(soma(2))
// 2
```

# Exemplos Básicos de Funções #02

[*voltar ao indice*](#índice)

```js
// Armazenando uma função em uma variável
const imprimirSoma = function(a,b) {
  console.log(a + b)
}
imprimirSoma(2,3)
//5

// Armazenando uma função arrow em uma variável
const soma = (a,b) =>{
  return a+b
}
console.log(soma(2,3))
//5

// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))
//-1

const imprimir2 = a =>console.log(a)
imprimir2('legal')
// legal
```

# Declaração de Variáveis Com Var #01

[*voltar ao indice*](#índice)

Ao declara var fora do escopo de uma função, ela vai para escopo global

```js
{
  {
    var sera = 'Será???'
  }
}
console.log(sera)
// Será???

function teste() {
  var local = 123
}
console.log(local)
// ERRO
```

# Declaração de Variáveis Com Var #02

[*voltar ao indice*](#índice)

```js
var numero = 1
{
  var numero = 2
  console.log('dentro =', numero)
  // dentro = 2
}
console.log('fora =', numero)
// fora = 2
```

# Declaração de Variáveis Com Let

[*voltar ao indice*](#índice)

Let possui escopo global, de função e de bloco

```js 
let numero = 1
{
  let numero = 2
  console.log('dentro =',numero)
  // dentro = 2
}
console.log('fora =', numero)
// fora = 1
```

# Usando Var em Loop #01

[*voltar ao indice*](#índice)

Var não tem escopo de bloco, por isso fica visivel fora do bloco

```js
for(var i = 0;i<10;i++){
  console.log(i)
  // 1 2 3 4 5 6 7 8 9
}
console.log('i =', i)
// i = 10
```

# Usando Let em Loop #01

[*voltar ao indice*](#índice)

Let tem escopo de bloco, por isso da erro quando tenta imprimir ela fora do bloco

```js
for(let i = 0;i<10;i++){
  console.log(i)
  // 1 2 3 4 5 6 7 8 9
}
console.log('i =', i)
// ERRO
```

# Usando Var em Loop #02

[*voltar ao indice*](#índice)

```js
var funcs = []

for (var i = 0; i < 10 ; i++){
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
// 10
funcs[8]()
// 10
```

# Usando Let em Loop #02

[*voltar ao indice*](#índice)

```js
var funcs = []

for (let i = 0; i < 10 ; i++){
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]()
// 2
funcs[8]()
// 8
```

# Entendendo o Hoisting

[*voltar ao indice*](#índice)

Iça a variável para o topo do escopo. Não funciona com let.

```js
console.log('a =', a)
// a = undefined
var a = 2
console.log('a =',a)
// a = 2

console.log('b =',b)
// ReferenceError: b is not defined
let b = 2
console.log('b =', b)
```

# Função Vs Objeto

[*voltar ao indice*](#índice)

Ao criar um objeto gera uma função, ao instanciar o objeto, gera um objeto

```js
console.log(typeof Object)
// function
console.log(typeof new Object)
// object

const Cliente = function() {}
console.log(typeof Cliente)
// function
console.log(typeof new Cliente)
// object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
// function
console.log(typeof new Produto())
//object
```

# Par Nome/Valor

[*voltar ao indice*](#índice)

```js
const saudacao = 'Opa' // contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' // contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
// Opa
console.log(exec())
// Falaaa
```

# Notação Ponto

[*voltar ao indice*](#índice)

```js
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)
// Bola

function Obj(nome){
  this.nome = nome
  this.exec= function(){
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
// Cadeira
console.log(obj3.nome)
// Mesa
obj3.exec()
// Exec...
```

# Operadores: Atribuição

[*voltar ao indice*](#índice)

```js
const a = 7
let b = 3

b += a
console.log(b)
// 10

b -= 4
console.log(b)
// 6

b*= 2 
console.log(b)
// 12

b /= 2 
console.log(b)
// 6

b **= 2
console.log(b)
// 36

b %= 2
console.log(b)
// 0
```

# Operadores: Destructuring #01

[*voltar ao indice*](#índice)

Operador de desestruturação

```js 
// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereço: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const {nome,idade} = pessoa

console.log(nome, idade)
// Ana 5

const {nome: n,idade: i} = pessoa

console.log(n, i)
// Ana 5

const {sobrenome,bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada)
// undefined true

const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
// RUA ABC 1000 undefined

const {conta: {ag, numero}} = pessoa
console.log(ag, numero)
// ERRO
```

# Operadores: Destructuring #02

[*voltar ao indice*](#índice)


```js
const [a] = [10]
console.log(a)
// 10

const [n1, , n3,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)
// 10 9 undefined 0

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)
//6
```

# Operadores: Destructuring #03

[*voltar ao indice*](#índice)

```js
function rand({min = 0, max = 1000}){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
// 40 - 50

console.log(rand({min: 955}))
// 0 - 1000
console.log(rand({}))
// 0 - 1000
console.log(rand())
// ERRO 
```

# Operadores: Destructuring #04

[*voltar ao indice*](#índice)

```js
function rand([min = 0, max = 1000]){
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50,40]))
// 40 - 50
console.log(rand([992]))
// 0 - 922
console.log(rand([, 10]))
// 0 - 10
console.log(rand([]))
// 0 - 1000
console.log(rand())
// ERRO 
```

# Operadores: Aritméticos

[*voltar ao indice*](#índice)

```js
const [a,b,c,d] = [3,5,1,15]
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a 
const potenciacao = d ** 2
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao,potenciacao, modulo)
// 24 10 15 -5 25 1
```

# Operadores: Relacionais

[*voltar ao indice*](#índice)

```js
console.log('01)', '1' == 1)
// 01) true 
console.log('02)', '1' === 1)
// 02) false
console.log('03)', '3' != 3)
// 03) false
console.log('04)', '3' !== 3)
// 04) true

console.log('05)', 3 < 1)
// 05) false 
console.log('06)', 3 > 1)
// 06) true 
console.log('07)', 3 <= 1)
// 07) false 
console.log('08)', 3 >= 1)
// 08) true

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)' d1 === d2)
// 09) false
console.log('10)' d1 == d2)
// 10) false
console.log('11)' d1.getTime() === d2.getTime())
// 11) true

console.log('12)' undefined == null)
// 12) true
console.log('13)' undefined === null)
// 13) false
```

# Operadores: Lógicos

[*voltar ao indice*](#índice)

<table>
  <tr>
    <th colspan="3">OR</th>
  </tr>
  <tr>
    <td><b>P1</b></td>
    <td><b>P2</b></td>
    <td><b>RES</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>V</b></td>
    <td><b>F</b></td>
    <td><b>V</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>V</b></td>
    <td><b>V</b></td>
    <td><b>V</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>F</b></td>
    <td><b>F</b></td>
    <td><b>F</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>F</b></td>
    <td><b>V</b></td>
    <td><b>V</b></td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="3">AND</th>
  </tr>
  <tr>
    <td><b>P1</b></td>
    <td><b>P2</b></td>
    <td><b>RES</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>V</b></td>
    <td><b>F</b></td>
    <td><b>F</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>V</b></td>
    <td><b>V</b></td>
    <td><b>V</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>F</b></td>
    <td><b>F</b></td>
    <td><b>F</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>F</b></td>
    <td><b>V</b></td>
    <td><b>F</b></td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="3">XOR</th>
  </tr>
  <tr>
    <td><b>P1</b></td>
    <td><b>P2</b></td>
    <td><b>RES</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>V</b></td>
    <td><b>F</b></td>
    <td><b>V</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>V</b></td>
    <td><b>V</b></td>
    <td><b>F</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>F</b></td>
    <td><b>F</b></td>
    <td><b>F</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>F</b></td>
    <td><b>V</b></td>
    <td><b>V</b></td>
  </tr>
</table>

<table>
  <tr>
    <th colspan="3">NOT</th>
  </tr>
  <tr>
    <td><b>NOT</b></td>
    <td><b>P2</b></td>
    <td><b>RES</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>!</b></td>
    <td><b>V</b></td>
    <td><b>F</b></td>
  </tr>
  </tr>
  <tr>
    <td><b>!</b></td>
    <td><b>F</b></td>
    <td><b>V</b></td>
  </tr>
  </tr>
</table>

**Problema**: Se o algum dos dois trabalhos der certo ira comprar sorvete e não se manterá saudável, se os dois trabalhos derem certo irá comprar uma Tv de 50 polegadas, mas se um trabalho der certo e o outro não, irá comprar uma tv de 32 polegadas. Crie um programa que retorna se a pessoa irá comprar sorvete, se manter saudavel, comprar uma Tv de 50 polegadas e se ira comprar uma tv de 32 polegadas:

```js 
function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete
  
  return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
  
console.log(compras(true, true))
// { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
```

# Operadores: Unários

[*voltar ao indice*](#índice)

++variavel: é incrementado antes da ação
variavel++: é incrementado após a função

```js
let num1 = 1  
let num2 = 2

num1++ 
console.log(num1)
// 2

--num1
console.log(num1)
// 1

console.log(++num1 === num2--)
// true

console.log(num1 === num2)
// false
```

# Operadores: Ternário

[*voltar ao indice*](#índice)


condição ? se_verdadeiro : se_falso

? operador ternário se verdadeiro  
: operador ternário se falso  

```js
const resultado = nota =>  nota>=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
// Aprovado

console.log(resultado(6.1))
// Reprovado
```

# Contexto de Execução: Browser vs Node

[*voltar ao indice*](#índice)


Browser: 

```js
window
// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

this
// Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}

this === window
// true

var a = 'Texto'
// undefined

window.a
// 'Texto'

var a = 123
// undefined


window.a
// 123

this.a
// 123

let b = 123
// undefined

window.b
// undefined

let b = 123
// ERRO

this.b
// undefined

b
// 123

const c = 456
// undefined

window.c
// undefined

function f1() {return this===window}
// undefined

f1()
// true

window.f1()
// true

this.f1()
// true

const f2 = () => console.log(this === window)
// undefined

f2()
// true

this.f2()
// ERRO
```

Node:

```js
let a = 3

global.b = 123
this.c = 456

console.log(a)
// 3

console.log(global.b)
// 123

console.log(this.c)
// 456

console.log(module.exports.c)
// 456

console.log(module.exports === this)
// true

console.log(module.exports)
// { c: 456 }

// criando uma variavel maluca: sem var e let!
abc = 3 // nao faça isso
console.log(global.abc)
// 3

module.exports = { e: 456, f: false, g: 'teste'}
```

# Tratamento de Erro (Try/Catch/Throw)

[*voltar ao indice*](#índice)

O programa executa o bloco try, caso ocorra algum erro, passa para o bloco catch, e logo após o finally, que sempre é chamado e é opcional

```js
function tratarErroELancar(erro){
    throw new Error('...')
    // throw 10
    // throw 'mensagem'
    // throw {
    //  nome: erro.nome,
    //  msg: erro.message,
    //  date: new Date
    //}
}


function imprimirNomeGritado(obj) {
    try {
      // Name não existe, a chave é nome
      console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){
      tratarErroELancar(e)
    } finally  {
      console.log('final')
    }
}

const obj = { nome: 'Roberto' }

imprimirNomeGritado(obj)
// Error: ...
}
