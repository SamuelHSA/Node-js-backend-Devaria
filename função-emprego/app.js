const emprego = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

emprego.question('Olá, qual o seu nome? ', nome => {
    switch (nome){
        case 'Samuel':
            console.log('Olá Samuel')
            break
        case 'Gabriel' :
            console.log('Olá Gabriel')
            break
        case 'Rafael' :
            console.log('Olá Rafael')
            break
        case 'Débora' :
            console.log('Olá Débora')
            break
        default :
            console.log('Você não está cadastrado no site da empresa')
    }

    emprego.question('Quantas horas você trabalhou? ', horas => {
        if ( horas < 5 ) {
            console.log('Você irá receber um valor de R$1200,25 ')
        } if ( horas >= 5 && horas < 8 ) {
            console.log('Você irá receber um valor de R$1550,50')
        } if ( horas >= 8 && horas < 10 ) {
            console.log('Você irá receber um valor de R$1800')
        }else if ( horas >= 10) {
            console.log('Parabéns! Você merece um salário de R$2200')
        }
    })
})

