# GETTERS E SETTERS

* Conceito vindo de linguagens orientada a objeto
* Altera e lê variáveis privadas.

## GETTERS

* Lê um valor

## SETTERS

* Altera o valor

```js
const sequencia = {
    _valor: 1, // convenção
    get valor() { return this._valor++ }, // acessando o valor por uma função.
    set valor(valor) {
        if (valor > this.valor) {
            this.valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // 1 2
// Ao acessar a propriedade os metodos get e set são 'chamados'
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor); // 1000 1001
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor); // 1002 1003
```

## Convenção

* O _ na variÁvel significa que ela deve ser acessa apenas internamentE
  * Não é 'privada' , mas é privada????
  * Não impede o acesso direto, mas tenta,  kkkkk?
* PESQUISAR MAIS SOBRE. 02/02/2021
