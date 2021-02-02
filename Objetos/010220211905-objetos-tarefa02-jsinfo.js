// Escreva a função isEmpty(obj)que retorna true se o objeto não tiver propriedades, false caso contrário.

function isEmpty (object) {
    for (let i in object) {
        return true;
    }
    return false;
}

let obj = {};

console.log(isEmpty(obj))