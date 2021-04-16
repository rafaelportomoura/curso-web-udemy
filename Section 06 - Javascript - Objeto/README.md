# Índice

- [Índice](#índice)
- [Revisão sobre Objeto](#revisão-sobre-objeto)
- [Estratégias de Criação de Objetos](#estratégias-de-criação-de-objetos)
- [Objetos Constantes](#objetos-constantes)
- [Notação Literal](#notação-literal)
- [Getters/Setters](#getterssetters)
- [Funções Importantes de Objeto](#funções-importantes-de-objeto)
- [Herança #01](#herança-01)
- [Herança #02](#herança-02)
- [Herança #03](#herança-03)
- [Herança #04](#herança-04)
- [Herança #05](#herança-05)
- [Herança #06](#herança-06)
- [Evitando Modificações](#evitando-modificações)
- [JSON vs Objeto](#json-vs-objeto)
- [Classe #01](#classe-01)
- [Classe #02](#classe-02)

# Revisão sobre Objeto

[*voltar ao índice*](#índice)

Coleção dinâmica de pares chave/valor. Sempre verificar se o atributo existe, antes de verificar dentro desse atributo

```js
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
// { nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220 }
delete produto.preco
delete produto['marca do produto']
console.log(produto)
// { nome: 'Cadeira' }
```

```js
const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123,
    },
  },
  condutores: [
    {
      nome: 'Junior',
      idade: 19,
    },
    {
      nome: 'Ana',
      idade: 42,
    },
  ],
  calcularValorSeguro: function (params) {
    //...
  },
};

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante';
console.log(carro);
/*
{
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: { logradouro: 'Av Gigante', numero: 1000 }
  },
  condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
  calcularValorSeguro: [Function: calcularValorSeguro]
}
*/

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
/* 
{
  modelo: 'A4',
  valor: 89000,
  proprietario: { nome: 'Raul', idade: 56 }
}
*/
```

# Estratégias de Criação de Objetos

[*voltar ao índice*](#índice)

**Usando a notação literal**

```js
const obj1 = {}
console.log(obj1)
// {}
```

**Object em JS**

```js
console.log(typeof Object, typeof new Object)
// function object

const obj = new Object
console.log(obj)
// {}
```

**Funções construtoras**

```js
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta',7.99, 0.15)
const p2 = new Produto('Notebook',2998.99, 0.15)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())
// 6.7915 2249.2425
```

**Função Factory**

```js 
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao',7980, 4)
const f2 = criarFuncionario('Maria',11400, 1)

console.log(f1.getSalario(), f2.getSalario())
// 6916 11020
```

**Object.create**

```js
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
// { nome: 'Ana'}
```

**JSON.parse()**

```js
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)
// Sou um JSON
```

# Objetos Constantes

[*voltar ao índice*](#índice)


Uma constante aponta para um endereço de memória, e nesse endereço de memória que possui um objeto, é possível modifica-lo  
Porem não é possui associar essa constante a outro objeto  

Se quiser que o objeto permaneça imutável, use o metódo `Object.freeze(objeto)`

```js
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
// { nome: 'Pedro' }

// DA ERRO
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
// Pedro
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)
// {nome: 'Pedro'}


const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)
```

# Notação Literal

[*voltar ao índice*](#índice)

```js
const a = 1
const b = 2
const c = 2

const obj1 = {a: a, b: b, c: c}
const obj2 = { a,  b,  c}
console.log(obj1,obj2)
// { a: 1, b: 2, c: 2 } { a: 1, b: 2, c: 2 }
```

```js
const nomeAttr =  'nota'
const valorAttr = 7.87

const obj1 = {}
obj1[nomeAttr] = valorAttr
console.log(obj1)
// { nota: 7.87 }

const obj2 = {[nomeAttr]: valorAttr}
console.log(obj2)
// { nota: 7.87 }
```

```js
const obj = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        //...
    }
}
console.log(obj)
// { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
```

# Getters/Setters

[*voltar ao índice*](#índice)

```js
const sequencia = {
  _valor: 1,
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);
// 1 2

sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
// 1000 1001

sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);
// 1002 1003
```

#  Funções Importantes de Objeto

[*voltar ao índice*](#índice)

```js
const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
// [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa));
// [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa));
// [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach((element) => {
  console.log(`${element[0]}: ${element[1]}`);
});
/*
nome: Rebeca
idade: 2
peso: 13
*/

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
/*
nome: Rebeca
idade: 2
peso: 13
*/

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2021',
});

pessoa.dataNascimento = '20/03/1978';
console.log(pessoa.dataNascimento);
// 01/01/2021
console.log(Object.keys(pessoa));
// [ 'nome', 'idade', 'peso', 'dataNascimento' ]

// Object.assing (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);
// { a: 4, b: 2, c: 3 }

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
// { a: 4, b: 2, c: 3 }
```

# Herança #01

[*voltar ao índice*](#índice)


```js
const ferrari = {
  modelo: 'F40',
  velMax: 324,
};

const volvo = {
  modelo: 'V40',
  velMax: 200,
};

console.log(ferrari.__proto__);
// [Object: null prototype] {}

console.log(ferrari.__proto__ === Object.prototype);
// true

console.log(volvo.__proto__ === Object.prototype);
// true

console.log(Object.prototype.__proto__);
// null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
// function function

console.log(Object.prototype, MeuObjeto.prototype);
// [Object: null prototype] {} {}
```

# Herança #02

[*voltar ao índice*](#índice)

Cadeia de protótipos (prototype chain)

```js
Object.prototype.attr0 = '0'; // NÃO FAZER ISSO
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0,filho.attr1,filho.attr3);
// 0 A C
```

```js
const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`;
  },
};

const ferrari = {
  modelo: 'f40',
  velMax: 324, // shadowing
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
// { modelo: 'f40', velMax: 324 }

console.log(volvo);
// { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100);
console.log(volvo.status());
// V40: 100km/h de 200km/h

ferrari.acelerarMais(300);
console.log(ferrari.status());
// 300km/h de 324km/h
```

# Herança #03

[*voltar ao índice*](#índice)


```js
const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);
filha1.nome = 'Ana';

console.log(filha1.corCabelo);
// preto

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true },
});

console.log(filha2.nome);
// Bia

filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);
// Bia tem cabelo preto

console.log(Object.keys(filha1));
// [ 'nome' ]
console.log(Object.keys(filha2));
// [ 'nome' ]

for (const key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
      // nome
    : console.log(`Por herança: ${key}`);
      // Por herança: corCabelo
}
```

# Herança #04

[*voltar ao índice*](#índice)


```js
function MeuObjeto() {}
console.log(MeuObjeto.prototype);
// {}

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

console.log(obj1.__proto__ === obj2.__proto__);
// true

console.log(MeuObjeto.prototype === obj1.proto);
// false

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}`);
};

obj1.falar();
// Bom dia! Meu nome é Anônimo

obj2.nome = 'Rafael';
obj2.falar();
// Bom dia! Meu nome é Rafael

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = 'Obj3';
obj3.falar();
// Bom dia! Meu nome é Obj3

// Resumindo  a loucura...
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype);
// true
console.log(MeuObjeto.__proto__ === Function.prototype);
// true
console.log(Function.prototype.__proto__ === Object.prototype);
// true
console.log(Object.prototype.__proto__);
// null
```

# Herança #05

[*voltar ao índice*](#índice)


```js
console.log(typeof String);
// function
console.log(typeof Array);
// function
console.log(typeof Object);
// function


String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

console.log('Escola Cod3r'.reverse());
// r3doC alocsE

Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
// 1
console.log(['a', 'b', 'c'].first());
// a

String.prototype.toString = function () {
  return 'Lascou tudo';
};

console.log('Escola Cod3r'.reverse());
// odut uocsaL
```

# Herança #06

[*voltar ao índice*](#índice)

```js
function Aula(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);

console.log(aula1, aula2);
// Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }

// simulando o new
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);

console.log(aula3, aula4);
// Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
```

# Evitando Modificações

[*voltar ao índice*](#índice)

O **Object.preventExtensions** permite excluir e modificar os atributos mas não permite adicionar atributos

```js
const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 1.99,
  tag: 'Promoção',
});

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);
```

O **Object.seal** permite modificar os atributos, mas não permite excluir nem adicionar atributos

```js 
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);

console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);
```

O **Object.freeze** é igual a um objeto selado e com os valores constantes

# JSON vs Objeto

[*voltar ao índice*](#índice)

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

console.log(JSON.stringify(obj));
// {"a":1,"b":2,"c":3}

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
// { a: 1, b: 2, c: 3 }


console.log(
  JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')
);
// { a: 1, b: 'string', c: true, d: {}, e: [] }
```

# Classe #01

[*voltar ao índice*](#índice)

```js
class Lancamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
// 44780
```


# Classe #02

[*voltar ao índice*](#índice)

```js
class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva')
  }
}

const filho = new Filho
console.log(filho)
// Filho { sobrenome: 'Silva', profissao: 'Professor' }
```