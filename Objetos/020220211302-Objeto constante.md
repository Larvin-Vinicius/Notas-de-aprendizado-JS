# Objetos e constantes

* Constantes não podem alterar nem receber outro valor após a atribuição.
* Objetos em constantes podem ter o valor das propriedades alterados.

```javascript
const pessoa = {
    nome: 'João'
};

pessoa.nome = 'Aladim';

pessoa.idade = 30; // é possivél criar outras propriedades

pessoa = {admin: true}; // erro, considerado como uma atribuição. 

console.log(pessoa);
```

## Criando objeto com caracteristica de uma constante

* 'Congelando' o objeto a partir da função freeze
    - Impede as alterações nas suas propriedades

```js
// criando
const pessoaConstante = Object.freeze({nome: 'João'});

pessoaConstante.nome = 'Aladim';

console.log(pessoaConstante); // nome: Aladim

```

