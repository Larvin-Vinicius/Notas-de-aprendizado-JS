# LOOP FOR IN

* Itera todas as chaves dos objetos.
* for (key in object)

```js
let user = {
   name: 'Cenoura',
   age: 2
   isAdmin: true
};

for (let key in user) {
   console.log(key); // name, age, isAdmin
   console.log(user[key]); // Cenoura, 2, true
}
```

* Se os nomes das chaves forem valores inteiros
* Serão ordenados.

```js
let obj = {
  1: 1,
  2: 2,
  3: 3,
  6: 6,
  4: 4
}

for (let prop in obj){
  console.log(prop) // 1, 2, 3, 4, 6
}
```

* Se não quisermos esse comportamento
* Utilizamos como strings

```js
let obj = {
  '+1': 1,
  '+2': 2,
  '+3': 3,
  '+6': 6,
  '+4': 4
}

for (let prop in obj){
  console.log(prop) // 1, 2, 3, 6, 4
}
```
