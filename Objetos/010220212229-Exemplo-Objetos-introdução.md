# Exemplo

* Exemplo anotado do video do curso de Javascript da cod3r.

```js
const produto = new Object; 
// Forma de declarar um objeto com uma função construtora.

produto.nome = 'Cadeira';
produto['marca do produto'] = Generica;
// Possibilidade de criar uma chave utilizando colchetes.

produto.preco = 220;

console.log(produto); 
// {nome: 'Cadeira', 'marca do produto': 'Generica', preco: 220}
 
delete produto.preco;
// Deletando uma propriedade em um objeto.

delete produto['marca do produto'];

const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: { // Um Objeto como uma propriedade.
            logadouro: 'Rua ABC',
            rua: 123
        }
    },
    condutores: [{  // Array de objetos.
        nome: 'Aladim',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //...
    }
}

carro.proprietario.endereco.numero = 1000

delete carro.condutores
delete carro.proprietario.endereco
delete carra.calcularValorSeguro

console.log(carro.condutores) // undefined 
```
