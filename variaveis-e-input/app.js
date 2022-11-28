const LeiaAlinha = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const constanteString = 'Minha primeira constante'
console.log(constanteString)

let leituraDeCampo
LeiaAlinha.question('Digite sua idade:', input => {
    leituraDeCampo = input
    console.log(`Usuário digitou: ${leituraDeCampo}`) 
})