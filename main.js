const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const button = document.querySelector('button')
const results = document.querySelectorAll('.results-text')
const dayres = document.getElementById('day-res')
const monthres = document.getElementById('month-res')
const yearres = document.getElementById('year-res')


button.addEventListener('click', verificaInput)

day.addEventListener('input', () => {
    let max = 2
    if (day.value > max) {
        day.value = day.value.slice(0, max)
    }
})

month.addEventListener('input', () => {
    let max = 2
    if (month.value > max) {
        month.value = month.value.slice(0, max)
    }
})

year.addEventListener('input', () => {
    let max = 4
    if (year.value > max) {
        year.value = year.value.slice(0, max)
    }
})

function verificaInput() {
    let valorDia = day.value
    let valorMes = month.value
    let valorAno = year.value

    if(valorDia === '' && valorMes === '' && valorAno === '') {
        console.log('erro')
    } else if(valorDia > 31 || valorMes > 12 || valorAno > 2023) {
        console.log('ainda erro')
    } else {
        calculaInputs()
    }
}

function calculaInputs() {
    let dataAtual = new Date()
    let dia = dataAtual.getDate()
    let mes = dataAtual.getMonth() +1
    let ano = dataAtual.getFullYear()

    console.log(dia)
    console.log(mes)
    console.log(ano)

    let anoFinal = ano - year.value
    let mesFinal = Math.abs(mes - parseInt(month.value))
    let diaFinal = 30 - parseInt(day.value) + dia
    
    

    results.forEach(input => {
        input.innerHTML = ''
        dayres.innerHTML = diaFinal
        monthres.innerHTML = mesFinal
        yearres.innerHTML = anoFinal
    })
}
