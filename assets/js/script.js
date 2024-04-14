const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const imc = (weight/(height**2)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''
    document.getElementById('infos').classList.remove('hidden')

    value.classList.add('attention')

    if(imc <= 18.5){
        description = 'Cuidado, você está abaixo do peso!'
    }
    else if(imc >= 18.5 && imc <= 25){
        description = 'Peso ideal'
        value.classList.remove('attention')
        value.classList.add('normal')
    }
    else if(imc >= 25 && imc <= 30){
        description = 'Sobrepeso'
    }
    else if(imc >= 18.5 && imc <= 25){
        description = 'Obesidade moderada'
    }
    else if(imc >= 18.5 && imc <= 25){
        description = 'Obesidade severa'
    }else{
        description = 'Obesidade mórbida.'
    }

    value.textContent = imc.replace('.',',')
    document.getElementById('description').textContent = description

})