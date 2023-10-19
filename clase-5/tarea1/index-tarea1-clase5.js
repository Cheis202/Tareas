const botonSalarioMensual = document.querySelector("#boton-salario-mensual")

botonSalarioMensual.addEventListener("click",(e)=>{
    e.preventDefault()

    const salarioAnual = document.querySelector("#salario-anual").value
    const salarioMensual = document.querySelector("#mostrar-salario-mensual")

    return salarioMensual.value = salarioAnual / 12
})


