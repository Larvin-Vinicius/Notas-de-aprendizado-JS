/*
Escreva o código para somar todos os salários e armazenar na variável sum. Deve estar 390no exemplo acima.
Se salariesestiver vazio, o resultado deve ser 0.
*/

function somaSalario (objeto) {
    let soma = 0
    for (let chave in objeto) {
        soma += objeto[chave];
    }
    return soma;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

console.log(somaSalario(salaries));