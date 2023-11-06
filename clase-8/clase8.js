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

    if(salario === ""){
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
    return ""
}

const validarEdad = (edad)=>{ 
    const edadMinima = 0
    const edadMaxima = 116
    const decimal = /[\.,]/
    if(edad === ""){
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
    return ""
}


const preguntarFamilia = ()=>{
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
$btnCalcularEdad.addEventListener("click",(e)=>{
    e.preventDefault()

    let edades = []
    let campoEdad = [...document.getElementsByClassName("input-edad")]

    campoEdad.forEach(element => {
        let error = validarEdad(element.value)

        if(error){
            (element.parentNode).appendChild(crearTextoAdvertencia(error))
        }else{
            edades.push(Number(element.value))
        }     
    });

    edades.sort((a,b)=> a-b)

    const menorEdad = edades[0]
    const mayorEdad = edades[edades.length-1]
    let promedioEdad = 0

    for(let i = 0; i < edades.length; i++){
        promedioEdad += edades[i]
    }

    promedioEdad = promedioEdad / edades.length

   return(
       $textoMayorEdad.textContent = `La persona mas vieja tiene: ${mayorEdad}`,
       $textoMenorEdad.textContent = `La persona mas joven tiene: ${menorEdad}`,
       $textoPromedioEdad.textContent = `El promedio de edad en la familia es de: ${promedioEdad}`  
   )
    
})

$btnCalcularSalario.addEventListener("click",(e)=>{
    e.preventDefault()

    let salarios = []
    let campoSalario = [...document.getElementsByClassName("input-salario")];

    campoSalario.forEach(element => {
        let error = validarSalario(element.value)

        if(error){
            (element.parentNode).appendChild(crearTextoAdvertencia(error))
        }else{
            salarios.push(Number(element.value))
        }     
    });

    salarios.sort((a,b)=> a-b)

    const menorSalario = salarios[0]
    const mayorSalario = salarios[salarios.length-1]
    let promedioSalario = 0

    for(let i = 0; i < salarios.length; i++){
        promedioSalario += salarios[i]
    }
    promedioSalario = promedioSalario / salarios.length

   return(
       $textoMayorSalario.textContent = `El mayor salario es de $ ${mayorSalario}`,
       $textoMenorSalario.textContent = `El menor salario es de $ ${menorSalario}`,
       $textoPromedioSalario.textContent = `El salario promedio es de $ ${promedioSalario}`  
   )
    
})

$btnReiniciar.addEventListener("click",()=>location.reload()) 

preguntarFamilia()
