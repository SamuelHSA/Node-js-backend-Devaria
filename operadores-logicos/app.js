const LeiaAlinha = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

LeiaAlinha.question('Quantos anos você tem? ', ano => {
    if(ano < 18){
        console.log('Você não tem 18 anos')
    }else{
        LeiaAlinha.question("Tem habilitação? ", habilitado => {
            if(!(habilitado.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação')
            }else{
                LeiaAlinha.question("Qual o seu nome? ", nome => {
                    switch(nome){
                        case 'Samuel' :
                            console.log('Bem vindo ao kart Samuel')
                            break
                        case 'Rafael' :
                            console.log('Bem vindo ao kart Rafael')
                            break
                        default :
                            console.log('Seu nome não está na lista')
                    }
                })
            }  
        })
    }
})