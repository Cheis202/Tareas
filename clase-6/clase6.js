const elementoForm = document.querySelector("#formInputEdad")
const btnCalcularEdad = document.querySelector("#btnCalcularEdad")
const btnReiniciar = document.querySelector("#btnReiniciar")
const textoMayorEdad = document.querySelector("#mayorEdad")
const textoMenorEdad = document.querySelector("#menorEdad")
const textoPromedioEdad = document.querySelector("#promedioEdad")

const funcionEdadFamilia = ()=>{
    const cantGrupoFamiliar = Number(prompt("Cuantas personas conforman tu grupo familiar?"))

const crearInputLabels = (cantidadDePersonas)=>{

    for(let i = 0; i < cantidadDePersonas; i++){
        let labelText = document.createTextNode("Ingresar edad del familiar")
        let crearInput = document.createElement("input")

        elementoForm.appendChild(labelText)
        elementoForm.appendChild(crearInput)
    }
}

crearInputLabels(cantGrupoFamiliar)


btnCalcularEdad.addEventListener("click",(e)=>{
    e.preventDefault()

    let inputValores = []
    let inputs = document.getElementsByTagName("input")
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
funcionEdadFamilia()

btnReiniciar.addEventListener("click",()=>funcionEdadFamilia())