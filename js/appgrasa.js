const formulario = document.querySelector('#formulario')
const resultados = document.querySelector('#resultados')

formulario.addEventListener('submit',captarDatos)

function captarDatos(e){
    e.preventDefault()
    const altura = document.querySelector('#altura').value
    const cuello = document.querySelector('#cuello').value
    const cintura = document.querySelector('#cintura').value
    const cadera = document.querySelector('#cadera').value
    let sexo = document.querySelector('#sexo').value

    sexo = parseInt(sexo)
    sosHombreOMujer(sexo,altura,cintura,cuello,cadera)
}


function sosHombreOMujer(sexo,altura,cintura,cuello,cadera){
    if (sexo === 1){
        calcularGrasaHombres(altura,cintura,cuello)
        console.log('H')
    } else{
        calcularGrasaMujeres(altura,cintura,cuello,cadera)
        console.log('M')
    }

}



function calcularGrasaHombres(altura,cintura,cuello){
    const porcentajeGraso = (495/(1.0324-0.19077 * (Math.log10(cintura - cuello)) + 0.15456 * (Math.log10(altura))) - 450)
    imprimirHtml(porcentajeGraso)
}

function calcularGrasaMujeres(altura,cintura,cuello,cadera){
    const porcentajeGraso = (495/(1.29579-0.35004 * (Math.log10(cintura  + cadera - cuello)) + 0.22100 * (Math.log10(altura))) - 450)
    imprimirHtml(porcentajeGraso)
}


function imprimirHtml(porcentajeGraso){
    const resultados = document.querySelector('#resultados')
    resultados.innerHTML = `Tu porcentaje graso es de ${porcentajeGraso} %`
}