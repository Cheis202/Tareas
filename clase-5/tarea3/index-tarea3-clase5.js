const textoTiempo = document.querySelector("#tiempo")
const botonCalcular = document.querySelector("#boton-calcular")

const tiempoClases= [
    [2, 34, 43],
    [1, 48, 24],
    [0, 47, 26],
    [2, 18, 45],
    [2, 40, 48],
    [1, 14, 28],
    [1, 30, 40],
    [2, 4, 55],
    [0, 43, 5],
    [1, 35, 28],
    [1, 44, 18],
    [2, 11, 32],
    [1, 52, 22],
    [2, 4, 41],
    [2, 4, 17],
    [1, 42, 15],
    [1, 49, 19],
    [0, 50, 4],
    [1, 35, 12],
    [1, 5, 44],
    [1, 14, 19],
    [2, 7, 14],
    [1, 22, 10],
    [1, 19, 8],
    [1, 7, 19],
];

const calcularTiempoTotalClases = (arrayTiempoClases)=>{

    let dias = 0
    let horas = 0
    let minutos = 0
    let segundos = 0

    arrayTiempoClases.map((x)=>{
        horas+=x[0]
        minutos+=x[1]
        segundos+=x[2]
    })

    minutos += Math.floor(segundos/60)
    segundos = segundos%60
    horas += Math.floor(minutos/60)
    minutos = minutos%60
    dias += Math.floor(horas/24)
    horas = horas%24

    return textoTiempo.textContent = `Dias: ${dias} -- Horas: ${horas} -- Minutos: ${minutos} -- Segundos: ${segundos}`
}

botonCalcular.addEventListener("click",()=>{ calcularTiempoTotalClases(tiempoClases)})