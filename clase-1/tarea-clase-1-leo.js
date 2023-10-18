// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola


let anioActual = Number(prompt("En que año estamos?"))
let anioNacimiento = Number(prompt("En que año naciste?"))
function calcularEdad(anioActual,anioDeNacimiento){
    return  anioActual-anioDeNacimiento
}
console.log("Tu edad es " + calcularEdad(anioActual,anioNacimiento))

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

let consultaSalarioAnual = Number(prompt("Cuanto es tu salario anual?"))

function salarioMensual(pago){
    return pago/12
}
console.log("Tu salario mensual es de " + salarioMensual(consultaSalarioAnual))

let consultaSalarioMensual = Number(prompt("Cual es tu salario Mensual"))
function salarioAnualSemanalDiarioHora(pago){
    let salarioSemanal = (pago/12)/4
    let salarioDiario = salarioSemanal/7
    let salarioHora = salarioDiario/8
    return(
        console.log("Tu salario semanal es de " + salarioSemanal),
        console.log("Tu salario diario es de " + salarioDiario),
        console.log("Tu salario por hora en caso de que trabajes 8 horas es de  " + salarioHora)
    )
}
salarioAnualSemanalDiarioHora(consultaSalarioMensual)
