const calcular = document.getElementById('calcular')
calcular.addEventListener('click', imc)

function imc (){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    const resultado = document.getElementById('resultado')

    if (nome.value !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(2)

        let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        } else if ( valorIMC < 25 ) {
            classificacao = 'Com peso ideal'
        } else if ( valorIMC < 30 ) {
            classificacao = 'Levemente acima do peso!'
        } else if ( valorIMC < 35 ) {
            classificacao = 'Com obesidade grau 1'
        } else if (valorIMC < 40){
            classificacao = 'Com obesidade grau 2'
        } else {
            classificacao = 'Com obesidade 3'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os campos!!'
    }


}