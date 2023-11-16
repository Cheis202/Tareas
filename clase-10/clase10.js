const $colores = [...document.querySelectorAll('.caja')];
const $estado = document.getElementById("texto-estado")
const $ronda = document.getElementById("numero-ronda")
const $btnJugar = document.getElementById("btn-iniciar")

let secuenciaMaquina = []
let secuenciaUsuario = []
let ronda = 0
const delayJugador = (secuenciaMaquina.length + 2) * 1000

const resaltar = (color) =>{
  color.classList.add("resaltar");
  setTimeout(()=>{
    color.classList.remove("resaltar")
  },500)
}

const resaltarColorUsuario = (e)=>{
  const colorSeleccionado = e.target
  const indiceColorSeleccionado = $colores.indexOf(e.target);
  secuenciaUsuario.push(indiceColorSeleccionado)
  comprobar()
  resaltar(colorSeleccionado)
}

const indiceAleatorio = ()=>{
  return Math.floor(Math.random() * 4);
}

const habilitarUsuario = ()=>{
  $colores.forEach(color=>{
    color.addEventListener("click",resaltarColorUsuario)
  })
}
const deshabilitarUsuario = ()=>{
  $colores.forEach(()=>{})
}

const estadoJuego = (texto,)=>{
  $estado.textContent = texto

}

const siguienteRonda = ()=>{
  ronda++
  $ronda.textContent = `Ronda ${ronda}`
}

const reiniciarJuego = ()=>{
  secuenciaMaquina = []
  secuenciaUsuario = []
  ronda = 0
}
const perdiste=()=>{
  deshabilitarUsuario()
  estadoJuego("Perdiste, volve a empezar")
}
const turnoMaquina = ()=>{
  estadoJuego("Turno de la Maquina")
  siguienteRonda()
  deshabilitarUsuario()
  
  secuenciaMaquina.push(indiceAleatorio())
  secuenciaMaquina.forEach((color,index)=>{
    const delayMaquina = (index + 1) * 1000
    setTimeout(()=>{
      resaltar($colores[color])
    },delayMaquina)
  })
  setTimeout(()=>{
    turnoJugador()
  },delayJugador)
}
const comprobar= ()=>{
  secuenciaMaquina.forEach((color, index)=>{
    if(color !== secuenciaUsuario[index]){
      perdiste()
      return
    }
  })
  setTimeout(()=>{
    secuenciaUsuario = []
    turnoMaquina()
  },delayJugador + 1000)
  
}
const turnoJugador = ()=>{
  estadoJuego("Turno del Jugador")
  habilitarUsuario()
}
$btnJugar.addEventListener("click",turnoMaquina)
