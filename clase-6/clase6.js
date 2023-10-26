const $elementoForm = document.querySelector("#form-input-edad")

const $btnCalcularEdad = document.querySelector("#btn-calcular-edad")
const $btnReiniciar = document.querySelector("#btn-reiniciar")
const $btnCalcularSalario = document.querySelector("#btn-calcular-salario")

const $textoMayorEdad = document.querySelector("#mayor-edad")
const $textoMenorEdad = document.querySelector("#menor-edad")
const $textoPromedioEdad = document.querySelector("#promedio-edad")

const $textoMayorSalario = document.querySelector("#mayor-salario")
const $textoMenorSalario = document.querySelector("#menor-salario")
const $textoPromedioSalario = document.querySelector("#promedio-salario")

const funcionEdadFamilia = ()=>{
    const cantGrupoFamiliar = Number(prompt("Cuantas personas conforman tu grupo familiar?"))
    funcionCrearInputLabels(cantGrupoFamiliar)
}
const funcionCrearInputLabels = (cantidadDePersonas)=>{

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
        $elementoForm.appendChild(contenedor)
    }
}
$btnCalcularEdad.addEventListener("click",(e)=>{
    e.preventDefault()

    let inputValores = []
    let inputs = document.getElementsByClassName("input-edad")

    for(let i = 0; i < inputs.length;i++){
        inputValores.push(Number(inputs[i].value))
    }

    inputValores.sort((a,b)=> a-b)

    const menorEdad = inputValores[0]
    const mayorEdad = inputValores[inputValores.length-1]
    let promedioEdad = 0

    for(let i = 0; i < inputValores.length; i++){
        promedioEdad += inputValores[i]
    }

    promedioEdad = promedioEdad / inputValores.length

   return(
       $textoMayorEdad.textContent = `La persona mas vieja tiene: ${mayorEdad}`,
       $textoMenorEdad.textContent = `La persona mas joven tiene: ${menorEdad}`,
       $textoPromedioEdad.textContent = `El promedio de edad en la familia es de: ${promedioEdad}`  
   )
    
})

$btnCalcularSalario.addEventListener("click",(e)=>{
    e.preventDefault()

    let inputValores = []
    let inputs = document.getElementsByClassName("input-salario")

    for(let i = 0; i < inputs.length;i++){
        inputValores.push(Number(inputs[i].value))
    }

    inputValores.sort((a,b)=> a-b)

    const menorSalario = inputValores[0]
    const mayorSalario = inputValores[inputValores.length-1]
    let promedioSalario = 0

    for(let i = 0; i < inputValores.length; i++){
        promedioSalario += inputValores[i]
    }
    promedioSalario = promedioSalario / inputValores.length

   return(
       $textoMayorSalario.textContent = `El mayor salario es de $ ${mayorSalario}`,
       $textoMenorSalario.textContent = `El menor salario es de $ ${menorSalario}`,
       $textoPromedioSalario.textContent = `El salario promedio es de $ ${promedioSalario}`  
   )
    
})

$btnReiniciar.addEventListener("click",()=>location.reload()) 

funcionEdadFamilia()
