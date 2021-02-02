/*
Escreva o código, uma linha para cada ação:

01 [x] - Crie um objeto vazio user.
02 [x] - Adicione a propriedade name com o valor John.
03 [x] - Adicione a propriedade surname com o valor Smith.
04 [x] - Altere o valor de namepara Pete.
05 [x] - Remova a propriedade name do objeto.

*/

// 01
let user = {};

//02
user.name = 'John';
console.log(user.name);
//03
user.surname = 'Smith';

//04 
user.name = 'Pete';
console.log(user.name);

//05
delete user.name;
console.log(user);