const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado) {
        console.log(`Número informado inválido`);
    }
    return resultado
}

const validarOperador = (operador) => {
    switch(operador) {
        case '+' :
        case '-' :
        case '/' :
        case '*' :
        case '%' :
            return operador;
        default :
            console.log('Operador informado inválido');
            return null;
    }
}

readLine.question('Informe um número: ', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);
    
    if(numeroValidado1) {
        readLine.question('Informe outro número:', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);
            
            if(numeroValidado2) {
                readLine.question('Informe o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado) {
                            case '+' : console.log(`operador selecionado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-' : console.log(`operador selecionado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*' : console.log(`operador selecionado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/' : console.log(`operador selecionado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%' : console.log(`operador selecionado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                });
            }
        });
    }
})