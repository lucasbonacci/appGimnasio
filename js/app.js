
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',captarDatos)

function captarDatos(e){
    e.preventDefault()
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#kilos').value
    const edad = document.querySelector('#edadd').value
    let sexo = document.querySelector('#sexo').value
    let actividad = document.querySelector('#actividad').value

    sexo = parseInt(sexo)
    actividad = parseInt(actividad)
    sosHombreOMujer(sexo,peso,altura,edad,actividad)
}


function sosHombreOMujer(sexo,peso,altura,edad,actividad){
    if (sexo === 1){
        calculaCaloriasHombre(peso,altura,edad,actividad)
    } else{
        calculaCaloriasMujer(peso,altura,edad,actividad)
    }

}


function calculaCaloriasHombre(peso, altura, edad, actividad){
    const metabolismoBasal = 10*peso + 6.25*altura - 5*edad + 5
    console.log(`tu metabolismo basal consume ${metabolismoBasal} calorias`)
    let caloriasDiarias
    switch (actividad){
        case 0:
            caloriasDiarias = metabolismoBasal * 1.200
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 1:
            caloriasDiarias = metabolismoBasal * 1.375
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 2:
            caloriasDiarias = metabolismoBasal * 1.550
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 3:
            caloriasDiarias = metabolismoBasal * 1.725
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 4:
            caloriasDiarias = metabolismoBasal * 1.900
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
    }
    imprimirHtml(metabolismoBasal, caloriasDiarias)
}


function calculaCaloriasMujer(peso,altura,edad, actividad){
    const metabolismoBasal= 10*peso + 6.25*altura - 5*edad -161
    console.log(`tu metabolismo basal consume ${metabolismoBasal} calorias`)
    let caloriasDiarias
    switch (actividad){
        case 0:
            caloriasDiarias = metabolismoBasal * 1.200
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 1:
            caloriasDiarias = metabolismoBasal * 1.375
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 2:
            caloriasDiarias = metabolismoBasal * 1.550
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 3:
            caloriasDiarias = metabolismoBasal * 1.725
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
        case 4:
            caloriasDiarias = metabolismoBasal * 1.900
            console.log(`tu cuerpo segun tu actividad fisica quema ${caloriasDiarias} calorias por dia`)
            break
    }    
    imprimirHtml(metabolismoBasal, caloriasDiarias)
}


function imprimirHtml(metabolismoBasal, caloriasDiarias){
    const resultados = document.querySelector('#resultados')
    resultados.innerHTML = `tu cuerpo en reposo quema ${metabolismoBasal} y teniendo en cuenta tu actividad fisica quema ${caloriasDiarias}`
}

