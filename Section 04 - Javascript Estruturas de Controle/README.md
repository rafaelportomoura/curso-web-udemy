# Índice

- [Índice](#índice)
- [Usando a Estrutura IF](#usando-a-estrutura-if)
- [Usando a Estrutura IF #02](#usando-a-estrutura-if-02)
- [Usando a Estrutura IF/ELSE](#usando-a-estrutura-ifelse)
- [Usando a Estrutura IF/ELSE IF…](#usando-a-estrutura-ifelse-if)
- [Usando a Estrutura SWITCH](#usando-a-estrutura-switch)
- [Usando a Estrutura WHILE](#usando-a-estrutura-while)
- [Usando a Estrutura DO/WHILE](#usando-a-estrutura-dowhile)
- [Usando a Estrutura FOR](#usando-a-estrutura-for)
- [Usando a Estrutura FOR/IN](#usando-a-estrutura-forin)
- [Usando Break/Continue](#usando-breakcontinue)


# Usando a Estrutura IF

[*voltar ao indice*](#índice)

```js
function soBoaNoticia(nota){
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
// Aprovado com 8.1
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
// É verdade...-1
seForVerdadeEuFalo(' ')
// É verdade...  
seForVerdadeEuFalo('?')
// É verdade...?
seForVerdadeEuFalo('[]')
// É verdade...[]
seForVerdadeEuFalo('[1,2]')
// É verdade...[1,2]
seForVerdadeEuFalo('{}')
// É verdade...{}
```

# Usando a Estrutura IF #02

[*voltar ao indice*](#índice)

```js
function teste1(num){
    if(num > 7)
        console.log(num)
    
    console.log('Final')
}

teste1(6)
// Final
teste1(8)
// 8 
// Final


function teste2(num){
    if(num > 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }
}
teste2(6)
// Final
teste2(8)
// 8 
```

# Usando a Estrutura IF/ELSE

[*voltar ao indice*](#índice)

```js
const imprimirResultado = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
// Aprovado!

imprimirResultado(4)
// Reprovado!

imprimirResultado('Epa')
// Reprovado!
```

# Usando a Estrutura IF/ELSE IF…

[*voltar ao indice*](#índice)

```js
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9,10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7,8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperacao')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

}

imprimirResultado(10)
// Quadro de Honra

imprimirResultado(8.9)
// Aprovado

imprimirResultado(6.55)
// Recuperacao

imprimirResultado(2.3)
// Reprovado

imprimirResultado(-1)
// Nota inválida
```


# Usando a Estrutura SWITCH

[*voltar ao indice*](#índice)

```js
const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra1')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        console.log('Nota inválida')
    }
}


imprimirResultado(10)
// Quadro de Honra

imprimirResultado(8.9)
// Aprovado

imprimirResultado(6.55)
// Recuperação

imprimirResultado(2.3)
// Reprovado

imprimirResultado(-1)
// Nota inválida
```

# Usando a Estrutura WHILE

[*voltar ao indice*](#índice)

```js
function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min)+ min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}
```

# Usando a Estrutura DO/WHILE

[*voltar ao indice*](#índice)

```js
function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min)+ min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}while (opcao != -1)
```

# Usando a Estrutura FOR

[*voltar ao indice*](#índice)

```js
for(let i=1; i<= 10;i++){
    console.log(`i=${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(i=0;i<notas.length;i++) {
    console.log(`nota = ${notas[i]}`)
}
```

# Usando a Estrutura FOR/IN

[*voltar ao indice*](#índice)

```js
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, notas[i])
    // 0 6.7 ...
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
    // nome = Ana ...
}
```

# Usando Break/Continue

[*voltar ao indice*](#índice)

// Não é recomendado usar o break e continue

```js
const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if (x == 5){
        break // sai pra fora do for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5){
        continue // vai pra proxima iteracao
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for(x in nums){
        if (x == 5){
            break externo
        }
        console.log(`${x} = ${nums[x]}`)
    }
}

```