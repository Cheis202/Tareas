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
let masRepite = {}

arrayNumeros.map(x =>{

    promedio += x
    promedio = promedio / arrayNumeros.length

    if(x < numPequeño){
        numPequeño = x
    }

    if(x > numGrande){
        numGrande = x
    }

    let maxValor = -10000
    let numeroRepetido = 0

    if(!(x in masRepite)){
        masRepite[x] = 1
    }else{
        masRepite[x] += 1
    }
    for (let x in masRepite) {
        if (masRepite[x] > maxValor) {
            maxValor = masRepite[x];
            numeroRepetido = x;
        }
    }
    numeroMasRepetido = numeroRepetido
    
})


textoPromedio.textContent = `El promedio de los numeros es: ${promedio}`
textoNumPequeño.textContent = `El menor de los numeros es: ${numPequeño}`
textoNumGrande.textContent = `El mayor de los numeros es: ${numGrande}`
textoMasRepite.textContent = `El numero que mas se repite es: ${numeroMasRepetido}`