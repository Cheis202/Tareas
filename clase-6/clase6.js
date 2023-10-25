const elementoForm = document.querySelector("#formInputEdad")
const btnCalcularEdad = document.querySelector("#btnCalcularEdad")
const btnReiniciar = document.querySelector("#btnReiniciar")
const btnCalcularSalario = document.querySelector("#btnCalcularSalario")

const textoMayorEdad = document.querySelector("#mayorEdad")
const textoMenorEdad = document.querySelector("#menorEdad")
const textoPromedioEdad = document.querySelector("#promedioEdad")

const textoMayorSalario = document.querySelector("#mayorSalario")
const textoMenorSalario = document.querySelector("#menorSalario")
const textoPromedioSalario = document.querySelector("#promedioSalario")

const funcionEdadFamilia = ()=>{
    const cantGrupoFamiliar = Number(prompt("Cuantas personas conforman tu grupo familiar?"))

const crearInputLabels = (cantidadDePersonas)=>{

    for(let i = 0; i < cantidadDePersonas; i++){
        let labelEdadFamiliar = document.createTextNode("Ingresar edad del familiar")
        let crearInputEdad = document.createElement("input")
        crearInputEdad.classList.add("inputEdad")

        let labelSalarioFamiliar = document.createTextNode("Ingresar salario del familiar")
        let crearInputSalario = document.createElement("input")
        crearInputSalario.classList.add("inputSalario")
        
        let botonSalario = document.createElement("button")
        botonSalario.textContent = "Agregar salario"

        let botonRemoverSalario = document.createElement("button")
        botonRemoverSalario.textContent = "Remover salario"

        let contenedor = document.createElement("div")
        contenedor.classList.add("cajaInput")

        botonSalario.addEventListener("click",(e)=>{
            e.preventDefault()
            contenedor.appendChild(labelSalarioFamiliar)
            contenedor.appendChild(crearInputSalario)
            botonSalario.remove()
            contenedor.appendChild(botonRemoverSalario)
        })

        botonRemoverSalario.addEventListener("click",(e)=>{
            e.preventDefault()
            labelSalarioFamiliar.remove()
            crearInputSalario.remove()
            botonRemoverSalario.remove()
            contenedor.appendChild(botonSalario)
        })

        contenedor.appendChild(labelEdadFamiliar)
        contenedor.appendChild(crearInputEdad)
        contenedor.appendChild(botonSalario)
        elementoForm.appendChild(contenedor)
    }
}

crearInputLabels(cantGrupoFamiliar)


btnCalcularEdad.addEventListener("click",(e)=>{
    e.preventDefault()

    let inputValores = []
    let inputs = document.getElementsByClassName("inputEdad")
    for(let i = 0; i < inputs.length;i++){
        inputValores.push(Number(inputs[i].value))
    }
    inputValores.sort((a,b)=>a-b)
    const menorEdad = inputValores[0]
    const mayorEdad = inputValores[inputValores.length-1]
    let promedioEdad = 0

    for(let i = 0; i<inputValores.length; i++){
        promedioEdad += inputValores[i]
    }

   return(
       textoMayorEdad.textContent = `La persona mas vieja tiene: ${mayorEdad}`,
       textoMenorEdad.textContent = `La persona mas joven tiene: ${menorEdad}` ,
       textoPromedioEdad.textContent = `El promedio de edad en la familia es de: ${promedioEdad / inputValores.length}`  
   )
    
})
}

btnCalcularSalario.addEventListener("click",(e)=>{
    e.preventDefault()

    let inputValores = []
    let inputs = document.getElementsByClassName("inputSalario")
    for(let i = 0; i < inputs.length;i++){
        inputValores.push(Number(inputs[i].value))
    }
    inputValores.sort((a,b)=>a-b)
    const menorSalario = inputValores[0]
    const mayorSalario = inputValores[inputValores.length-1]
    let promedioSalario = 0

    for(let i = 0; i<inputValores.length; i++){
        promedioSalario += inputValores[i]
    }

   return(
       textoMayorSalario.textContent = `El mayor salario es de $ ${mayorSalario}`,
       textoMenorSalario.textContent = `El menor salario es de $ ${menorSalario}` ,
       textoPromedioSalario.textContent = `El salario promedio es de $ ${promedioSalario / inputValores.length}`  
   )
    
})

funcionEdadFamilia()

btnReiniciar.addEventListener("click",()=>funcionEdadFamilia())