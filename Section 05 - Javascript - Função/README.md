# Índice

- [Índice](#índice)
- [Cidadão de Primeira Linha](#cidadão-de-primeira-linha)
- [Parâmetros e Retorno São Opcionais](#parâmetros-e-retorno-são-opcionais)
- [Parâmetros Variáveis](#parâmetros-variáveis)
- [Parâmetro Padrão](#parâmetro-padrão)
- [this pode Variar](#this-pode-variar)
- [this e a Função bind #01](#this-e-a-função-bind-01)
- [this e a Função bind #02](#this-e-a-função-bind-02)
- [Funções Arrow #01](#funções-arrow-01)
- [Funções Arrow #02](#funções-arrow-02)
- [Funções Arrow #03](#funções-arrow-03)
- [Funções Anônimas](#funções-anônimas)
- [Funções Callback #01](#funções-callback-01)
- [Funções Callback #02](#funções-callback-02)
- [Funções Callback #03](#funções-callback-03)
- [Funções Construtoras](#funções-construtoras)
- [Tipos de Declaração](#tipos-de-declaração)
- [Contexto Léxico](#contexto-léxico)
- [Closures](#closures)
- [Função Factory #01](#função-factory-01)
- [Função Factory #02](#função-factory-02)
- [Classe vs Função Factory](#classe-vs-função-factory)
- [Desafio Função Construtora](#desafio-função-construtora)
- [IIFE - Immediately Invoked Function Expression](#iife---immediately-invoked-function-expression)
- [Call & Apply](#call--apply)
- [Comparação entre string e números](#comparação-entre-string-e-números)


# Cidadão de Primeira Linha

[*voltar ao índice*](#índice)

Função em JS é First-Class Object (Citizens)  
Higher-order function

**criar de forma literal**
```js 
function fun(){}
```

**Armazenar em uma variável**
```js
const fun2 = function () { }
```

**Armazenar em um array**
```js
const array = [function (a,b){ return a + b},func1,fun2]
console.log(array[0](2,3))
// 5
```

**Armazenar em um atributo de objeto**
```js
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())
// Opa
```

**Passar função como param**
```js
function run(fun) {
    fun()
} 

run(function () {console.log('Execurando...')})
```

**Uma função pode retornar/conter uma função**

```js
function soma(a,b) {
    return function(c) {
        console.log(a + b +c)
    }
}

soma(2,3)(4)
// 9
const cincoMais = soma(2,3)
cincoMais(4)
// 9
```

# Parâmetros e Retorno São Opcionais

[*voltar ao índice*](#índice)

```js
function area(largura, altura) {
    const area = largura * altura
    if (area >20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
// 4

console.log(area(2))
// NaN

console.log(area())
// NaN

console.log(area(2,3,17,22,44))
// 6

console.log(area(5,5))
// Valor acima do permitido: 25m2.
// undefined
```

# Parâmetros Variáveis

[*voltar ao índice*](#índice)

No JavaScript, mesmo que você não tenha declarado os parâmetros na função, é possível passar pela propriedade arguments

```js
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
// 0

console.log(soma(1))
// 1

console.log(soma(1.1,2.2,3.3))
// 6.6

console.log(soma(1.1,2.2,"Teste"))
// 3.3000000000000003Teste

console.log(soma('a','b','c'))
// 0abc
```

# Parâmetro Padrão

[*voltar ao índice*](#índice)

**Estratégia 1 para gerar valor padrão**
```js
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(),soma1(3), soma1(1,2,3), soma1(0,0,0))
// 3 5 6 3
```

**Estratégia 2,3 e 4 para gerar valor padrão**
```js
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))
// 3 5 6 0
```

**Valor padrão do ES2015**
```js
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(),soma3(3), soma3(1,2,3), soma3(0,0,0))
// 3 5 6 0
``` 

# this pode Variar

**Browser:**

```js
> function f1(){console.log(this === window)}
// <. undefined

> f1()
// true
// <. undefined

> document.getElementsByTagName('body')[0].onclick = f1
// <. f f1() { console.log(this === window)}
// false

> function f2() {console.log(this === document)}
// <. undefined

> f2()
// false
// <. undefined

> const body = document.getElementsByTagName('body')[0]
// <. undefined

> function f2() { console.log(this === body)}
// <. undefined

> document.getElementsByTagName('body')[0].onclick = f2
// <. f f2() { console.log(this === body)}
// true

> f2()
// false
// <. undefined
```
**Em uma função arrow o `this` não varia**
```js
> const f3 = () => console.log(this === window)
// <. undefined

> f3()
// true
// <. undefined

> document.getElementsByTagName('body')[0].onclick = f3
// <. () => console.log(this === window)
// true

> f3()
// true
// <. undefined
// true
```


# this e a Função bind #01

[*voltar ao índice*](#índice)

```js
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
// Bom dia!

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
// undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
// Bom dia

const falar2 = pessoa.falar
falar2() 
// undefined
```

# this e a Função bind #02

[*voltar ao índice*](#índice)

```js
function Pessoa = {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, (1000))
}

new Pessoa
// NaN   // a cada 1000 mlsg

// -------------------------------------------------------------

function Pessoa2 = {
    this.idade = 0
    
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), (1000))
}

new Pessoa2
// 0   
// 1   // a cada 1000 mlsg soma 1 na idade

// -------------------------------------------------------------

function Pessoa3 = {
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, (1000))
}

new Pessoa3
// 0   
// 1   // a cada 1000 ms soma 1 na idade
```

# Funções Arrow #01

[*voltar ao índice*](#índice)

```js
let dobro = function(a) {
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}

dobro = a => 2 * a // return implícito

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui parametro
console.log(ola())
// Olá

```

# Funções Arrow #02

[*voltar ao índice*](#índice)

```js

function Pessoa = {
    this.idade = 0
    
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, (1000))
}

new Pessoa
// 0   
// 1   // a cada 1000 ms soma 1 na idade
```

# Funções Arrow #03

[*voltar ao índice*](#índice)

**Funções comuns**
```js
let comparaComThis = function (param) {
    console.log(this === param)
}

console.log(comparaComThis(global)) // no browser seria window
// true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
// false
comparaComThis(obj)
// true
```

**Arrow function**

A arrow function mantém o this imutável, nem com o bind é possível mudar

```js
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
// false

comparaComThisArrow(module.exports)
//true


const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
// false
comparaComThis(module.exports)
// true
```


# Funções Anônimas

[*voltar ao índice*](#índice)

É uma função que não possui nome

```js
const soma = function(x,y) {
    return x +y;
}

const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b))
}


imprimirResultado(3,4)
// 7

imprimirResultado(3,4,soma)
// 7

imprimirResultado(3,4,function(x,y){
    return x - y
})
// -1

imprimirResultado(3,4,(x,y) => x * y)
// 12
```

# Funções Callback #01

[*voltar ao índice*](#índice)

Callback é uma função passada por parâmetro que é chamada quando algum determinado evento ocorrer

```js
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)
// 1. Mercedes
// 2. Audi
// 3. Bmw
fabricante.forEach(fabricante => console.log(fabricante))
// Mercedes
// Audi
// Bmw

```

# Funções Callback #02

[*voltar ao índice*](#índice)

const notas =[7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

**Sem callback**
```js
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
// [ 6.5, 5.2, 3.6 ]
```

**Com callback**
```js 
notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas)
// [ 6.5, 5.2, 3.6 ]

notasBaixas2 = notas.filter(nota =>  return nota < 7)

console.log(notasBaixas2)
// [ 6.5, 5.2, 3.6 ]
```

# Funções Callback #03

[*voltar ao índice*](#índice)

**Exemplo de callback no browser**
```js
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('Evento ocorreu!')
}

// Se clicar no body imprimi no console: 
// Evento ocorreu!
```

# Funções Construtoras

[*voltar ao índice*](#índice)

```js
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidade atual = 0

    //metodo publico
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) velocidadeAtual += delta

        else velocidadeAtual = velocidadeMaxima
    }

    // metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
concole.log(uno.getVelocidadeAtual())
```

# Tipos de Declaração

[*voltar ao índice*](#índice)

Somente a function declaration consegue ser executado antes da declaração 

**Function declaration**
```js
function soma(x,y) {
    return x + y
}
```

**Function expression**
```js
const sub = function(x,y) {
    return x - y
}
```

**Named function expression**
```js
const mult = function mult(x,y) {
    return * y
}
```

# Contexto Léxico

[*voltar ao índice*](#indice)

```js
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
// Global
```

# Closures

[*voltar ao índice*](#índice)

Closure é o escopo criado quando uma função é declarada  
Esse escopo permite a função acessar e manipular variáveis externas a função

Contexto léxico em ação!

```js
const x= 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
// Local
```

# Função Factory #01

[*voltar ao índice*](#índice)

**Factory simples:**
```js
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
// { nome: 'Ana', sobrenome: 'Silva' }
```

# Função Factory #02

[*voltar ao índice*](#índice)

```js
function criarProduto(nome, preco, desconto = 0){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook',2199.49))
// { nome: 'Notebook', preco: 2199.49, desconto: 0 }

console.log(criarProduto('iPad',1199.49, 0.1))
// { nome: 'iPad', preco: 1199.49, desconto: 0.1 }
```

# Classe vs Função Factory

[*voltar ao índice*](#índice)

Dentro do browser na forma `class`, o this aponta pra window, então perde a propriedade nome 

```js
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')

p1.falar()
// Meu nome é joão   - node

document.getElementsByTagName('body')[0].onclick = p1.falar()
// Meu nome é undefined  -  Browser
```

Já com uma função factory, a propriedade continua
```js
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const p2 = new Pessoa('João')

p2.falar()
// Meu nome é João   - node

document.getElementsByTagName('body')[0].onclick = p2.falar()
// Meu nome é João  -  Browser
```

# Desafio Função Construtora

[*voltar ao índice*](#índice)

Transformar a classe do tópico passado em função construtora

```js
function Pessoa(nome) {
        this.nome = nome
    this.falar= function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')

p1.falar()
// Meu nome é joão   - node
```

# IIFE - Immediately Invoked Function Expression

[*voltar ao índice*](#índice)

Geralmente usada para fugir do escopo global

```js
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abragente!')
})()
```

# Call & Apply

[*voltar ao índice*](#índice)

```js
function getPreco(imposto = 0, moeda ='R$') {
    return `${moeda} ${this.preco *  (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(getPreco())
// R$ 18

console.log(produto.getPreco())
// R$ 3900.65

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
// R$ 39992

console.log(getPreco.apply(carro))
// R$ 39992

console.log(getPreco.call(carro, 0.17, '$'))
// $ 46790.64

console.log(getPreco.apply(global, [0.17, '$']))
// $ 21.06

```

# Comparação entre string e números


Comparação entre string de números
E ai pessoal, hoje vou trazer um assunto interessante que acontece dentro do Javascript que é a comparação entre números em formato string.

Abaixo temos uma cadeia de string de números.
```js
const cadeia_de_strings = '1, 2, 3, 4, 5, 6, 7, 8, 9'
```
Se pegarmos alguns dos valores da cadeia de strings e fizermos a comparação entre nossas strings de número até o nove, ela mantem um comportamento normal. Como se estivéssemos comparando números.  

```
1 | '1' > '2'  
2 | //output : false
3 | '1' > '1'
4 | //output : false
5 | '2' > '1'
6 | //output : true
7 | '4' > '2'
8 | //output : true
```
Agora se compararmos os valores depois do nove, a comparação irá validar o primeiro número da cadeia numeral, validando sua ordem alfabética. Por exemplo:

```
1 | '2' > '12'
2 | //output : true
3 | '5' > '42'
4 | //output : true
5 | '3' > '29'
6 | //output : true
```
Com isso, podemos ver que não é uma abordagem muito boa comparar números em formato de string.