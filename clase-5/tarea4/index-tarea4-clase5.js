const textoPromedio = document.querySelector("#promedio")
const textoNumPequeño = document.querySelector("#numPequeño")
const textoNumGrande = document.querySelector("#numGrande")
const textoMasRepite = document.querySelector("#masRepite")

const listaOrdenada = document.querySelector("#lista")
const listaLi = listaOrdenada.getElementsByTagName("li")

arrayNumeros = []

for(let i = 0; i<listaLi.length;i++){
    arrayNumeros.push(listaLi[i].textContent)
}

let promedio = 0
let numPequeño = arrayNumeros[0]
let numGrande = arrayNumeros[0]
let numeroMasRepetido = 0
let repeticionDeLosNumeros = {}

arrayNumeros.map(x =>{

    promedio += x
    promedio = promedio / arrayNumeros.length

    if(x < numPequeño){
        numPequeño = x
    }

    if(x > numGrande){
        numGrande = x
    }
    
    //En este if, si el numero no existe en el objeto lo agrega y si existe le suma una repeticion
    if(!(x in repeticionDeLosNumeros)){
        repeticionDeLosNumeros[x] = 1
    }else{
        repeticionDeLosNumeros[x] += 1
    }

    let numeroRepetido = 0
    let cantidadAparicionDelNumero = -1
    
    //En este for, recorre el objeto y comprueba que numero tiene mayor repeticion
    for (let x in repeticionDeLosNumeros) {
        if (repeticionDeLosNumeros[x] > cantidadAparicionDelNumero) {
            cantidadAparicionDelNumero = repeticionDeLosNumeros[x];
            numeroRepetido = x;
        }
    }
    //Por ultimo cambia el valor de la variable "numeroMasRepetido" para que sea lo dicho
    numeroMasRepetido = numeroRepetido
})


textoPromedio.textContent = `El promedio de los numeros es: ${promedio}`
textoNumPequeño.textContent = `El menor de los numeros es: ${numPequeño}`
textoNumGrande.textContent = `El mayor de los numeros es: ${numGrande}`
textoMasRepite.textContent = `El numero que mas se repite es: ${numeroMasRepetido}`
