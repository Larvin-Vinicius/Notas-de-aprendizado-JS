# FUNÇÕES IMPORTANTES DE OBJETOS

## keys()

* Retorna um array com as propriedades enumeraiveis do objeto
* Ordena em crescente as prorpriedades com nome numerico.

```js
let pessoa = {
    nome: 'Bob',
    0: false,
    idade: 23
};
console.log(Object.keys(pessoa)); // ["0", "nome", "idade"]
```

## values()

* Retorna um array com os valores das propriedades.
* Ordena em crescente as prorpriedades com nome numerico.

```js
let dados = {
    a: 2,
    b: 5,
    c: 3,
    d: 1
};
console.log(Object.values(dados)); // [2, 5, 3, 1]

let dados2 = {
    2: 'a',
    5: 'b',
    3: 'c',
    4: 'd'
};
console.log(Object.values(dados2)); // ["a", "c", "d", "b"]
```

## entries()

* Adiciona chave e valor do objeto em uma array dentro de outro array
  * Separa para cada par de chave e valor
  * Ordena em crescente as propriedades com nome numerico.

```js
let pessoa = {
    nome: 'Bob',
    0: false,
    idade: 23
};
console.log(Object.entries(pessoa)); // [["0", false], ["nome", "Bob"], ["idade", 23]]
```

## defineProperty()

* Define uma nova propriedade no objeto ou altera uma existente
  * Retorna um objeto
  * descrições
    * configurable -> default=false
      * true = A propriedade pode ser alterada e deltada
    * enumerable -> default=false
      * true = A propriedade aparece durante a enumeração das propriedades
    * value -> default=undefined
      * true = valor associado a propriedade
    * writable -> default=false
      * true = permite a modificação do valor com uma atribuição
* EXISTEM MAIS INFORMAÇÕES - PESQUISAR 02/02/2021

```js
// defineProperty (objeto, propriedade, descrição)
// descrição = caracteristas que a propriedade vai adquirir.
Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017';
console.log(pessoa.dataDeNascimento); // 01/01/2019
```

## assign()

* Copia para um objeto destino os valores das propriedades de um ou mais objetos.
* Sobrescreve propriedades de nomes iguais.
  * A ultima alteração de valor em propriedade com nome igual será a valida.

```js
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };

const obj = Object.assign(dest, o1, o2);
console.log(dest) // a: 4 b: 2 c: 3
```

## freeze()

* Deixa imutável as propriedades do objeto

```js
let pessoa = {
    nome: 'Rebeca';
    idade: 2,
    peso: 13
};

Object.freeze(pessoa);
pessoa.idade = 1234;
console.log(pessoa.idade); // 2 
```
