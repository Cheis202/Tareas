const $elementoForm = document.querySelector("#form-input-edad")
const $section = document.querySelector("#contenedor-input-familia")

const $btnCalcularEdad = document.querySelector("#btn-calcular-edad")
const $btnReiniciar = document.querySelector("#btn-reiniciar")
const $btnCalcularSalario = document.querySelector("#btn-calcular-salario")

const $textoMayorEdad = document.querySelector("#mayor-edad")
const $textoMenorEdad = document.querySelector("#menor-edad")
const $textoPromedioEdad = document.querySelector("#promedio-edad")

const $textoMayorSalario = document.querySelector("#mayor-salario")
const $textoMenorSalario = document.querySelector("#menor-salario")
const $textoPromedioSalario = document.querySelector("#promedio-salario")

const crearTextoAdvertencia = (texto)=>{
    let parrafo = document.createElement("p");
    parrafo.classList.add("texto-rojo")
    parrafo.textContent = texto;
    return parrafo
}

const validarCantPersonas = (cantidad)=>{
    if(isNaN(cantidad)){
        alert(errores.cantidad.nan)
        location.reload()
    }
}

const errores = {
    cantidad:{
        nan: "Debe ingresar numeros"
    },
    edad:{
        decimal: "La edad no puede tener decimales",
        vacio: "El campo no puede quedar vacio",
        nan: "Debe ingresar numeros",
        minima:"la edad debe ser mayor a 0",
        maxima:"la edad debe ser menor a 116"
    },
    salario:{
        vacio: "El campo no puede quedar vacio",
        nan:"Debe ingresar numeros",
        minimo: "El salario no puede ser negativo",
        maximo:"Excedio la cantidad maxima, prestame un poco"
    }
}

const validarSalario = (salario)=>{

    const salarioMinimo = 0
    const salarioMaximo = 1000000000000

    if(!salario){
        return errores.salario.vacio
    }
    if(isNaN(salario)){
        return errores.salario.nan
    }
    if(salario < salarioMinimo){
        return errores.salario.minimo
    }
    if(salario > salarioMaximo){
        return errores.salario.maximo
    }
}

const validarEdad = (edad)=>{ 
    const edadMinima = 0
    const edadMaxima = 116
    const decimal = /[\.,]/
    if(!edad){
        return errores.edad.vacio
    }
    if(decimal.test(edad)){
        return errores.edad.decimal
    }
    if(isNaN(edad)){
        return errores.edad.nan
    }
    if(edad < edadMinima){
        return errores.edad.minima
    }
    if(edad > edadMaxima ){
        return errores.edad.maxima
    }
}


const preguntarCantidadFamiliares = ()=>{
    const cantGrupoFamiliar = Number(prompt("Cuantas personas conforman tu grupo familiar?"))
    validarCantPersonas(cantGrupoFamiliar)
    crearCampos(cantGrupoFamiliar)
}

const crearCampos = (cantidadDePersonas)=>{

    for(let i = 0; i < cantidadDePersonas; i++){

        const agregarSalario = (e)=>{
            e.preventDefault()
            contenedor.appendChild(crearLabelSalarioFamiliar)
            contenedor.appendChild(crearInputSalario)
            contenedor.appendChild(botonRemoverSalario)
            botonAgregarSalario.remove()
        }

        const removerSalario = (e)=>{
            e.preventDefault()
            crearLabelSalarioFamiliar.remove()
            crearInputSalario.remove()
            botonRemoverSalario.remove()
            contenedor.appendChild(botonAgregarSalario)
        }

        let crearLabelEdadFamiliar = document.createTextNode("Ingresar edad del familiar")
        let crearInputEdad = document.createElement("input")
        crearInputEdad.classList.add("input-edad")

        let crearLabelSalarioFamiliar = document.createTextNode("Ingresar salario del familiar")
        let crearInputSalario = document.createElement("input")
        crearInputSalario.classList.add("input-salario")

        
        let botonAgregarSalario = document.createElement("button")
        botonAgregarSalario.textContent = "Agregar salario"
        botonAgregarSalario.addEventListener("click",(e)=>{agregarSalario(e)})

        let botonRemoverSalario = document.createElement("button")
        botonRemoverSalario.textContent = "Remover salario"
        botonRemoverSalario.addEventListener("click",(e)=>{removerSalario(e)})

        let contenedor = document.createElement("div")
        contenedor.classList.add("caja-input")

        contenedor.appendChild(crearLabelEdadFamiliar)
        contenedor.appendChild(crearInputEdad)
        contenedor.appendChild(botonAgregarSalario)
        $section.appendChild(contenedor)

    }
}
validarCampos = (datosPorValidar, guardadoDeDatos,validacion)=>{
    datosPorValidar.forEach(element =>{
        
        let error = validacion(element.value)

        if(error){
            (element.parentNode).appendChild(crearTextoAdvertencia(error))
        }else{
            guardadoDeDatos.push(Number(element.value))
        }    
    }
)}
calcularMenor = (valores)=>{
    return valores[0]
}
calcularMayor = (valores)=>{
    return valores[valores.length-1]
}
calcularPromedio = (valores)=>{
    let promedio = 0

    valores.forEach(x=>{
        promedio +=x
    })
    return promedio / valores.length
}

escribirInformacion = (dondeEscribo,queEscribo,valor)=>{
    return(
        dondeEscribo.textContent = queEscribo + valor
    )
}

$btnCalcularEdad.addEventListener("click",(e)=>{
    e.preventDefault()

    let edades = []
    let camposEdad = [...document.getElementsByClassName("input-edad")]

    validarCampos(camposEdad,edades,validarEdad)

    edades.sort((a,b)=> a-b)

    const menorEdad = calcularMenor(edades)
    const mayorEdad = calcularMayor(edades)
    const promedioEdad = calcularPromedio(edades)

   return(
        escribirInformacion($textoMayorEdad,"La persona mas vieja tiene: ", mayorEdad),
        escribirInformacion($textoMenorEdad,"La persona mas joven tiene: ", menorEdad),
        escribirInformacion($textoPromedioEdad,"El promedio de edad en la familia es de: ", promedioEdad)
   )
    
})

$btnCalcularSalario.addEventListener("click",(e)=>{
    e.preventDefault()

    let salarios = []
    let camposSalario = [...document.getElementsByClassName("input-salario")];

    validarCampos(camposSalario,salarios,validarSalario)

    salarios.sort((a,b)=> a-b)

    const menorSalario = calcularMenor(salarios)
    const mayorSalario = calcularMayor(salarios)
    const promedioSalario = calcularPromedio(salarios)

   return(
        escribirInformacion($textoMayorSalario,"El mayor salario es de $", mayorSalario),
        escribirInformacion($textoMenorSalario,"El menor salario es de $", menorSalario),
        escribirInformacion($textoPromedioSalario, "El salario promedio es de $", promedioSalario)
   )
    
})

$btnReiniciar.addEventListener("click",()=>location.reload()) 

preguntarCantidadFamiliares()
