const $colores = [...document.querySelectorAll('.caja')];
const $estado = document.getElementById("texto-estado")
const $ronda = document.getElementById("numero-ronda")
const $btnJugar = document.getElementById("btn-iniciar")

let secuenciaMaquina = []
let secuenciaUsuario = []
let ronda = 0
let juegoTerminado = false

const resaltarColor = (color) =>{
  color.classList.add("resaltar");
  setTimeout(()=>{
    color.classList.remove("resaltar")
  },1000)
}

const resaltarColorUsuario = (e)=>{
  const colorSeleccionado = e.target
  const indiceColorSeleccionado = $colores.indexOf(e.target);
  secuenciaUsuario.push(indiceColorSeleccionado)
  if(secuenciaUsuario.length === secuenciaMaquina.length){
    comprobarSecuencia()
  }
  resaltarColor(colorSeleccionado)
}

const generarColorAleatorio = ()=>{
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

const actualizarEstado = (texto)=>{
  $estado.textContent = texto

}

const actualizarRonda = ()=>{
  ronda++
  $ronda.textContent = `Ronda ${ronda}`
}

const reiniciarJuego = ()=>{
  secuenciaMaquina = []
  secuenciaUsuario = []
  ronda = 0
}
const perder=()=>{
  deshabilitarUsuario()
  actualizarEstado("Perdiste, volve a empezar")
}
const turnoMaquina = ()=>{
  actualizarEstado("Turno de la Maquina")
  actualizarRonda()
  deshabilitarUsuario()
  const delayJugador = (secuenciaMaquina.length + 2) * 1000
  secuenciaMaquina.push(generarColorAleatorio())
  secuenciaMaquina.forEach((color,index)=>{
    const delayMaquina = (index + 1) * 1000
    setTimeout(()=>{
      resaltarColor($colores[color])
    },delayMaquina)
  })

  setTimeout(()=>{
    turnoJugador()
  },delayJugador)
}
const comprobarSecuencia= ()=>{
  const delayJugador = (secuenciaMaquina.length + 1) * 1000
  secuenciaMaquina.forEach((color, index)=>{
    if(color !== secuenciaUsuario[index]){
      perder()
      juegoTerminado = true
      return
    }
  })
  if (!juegoTerminado) {
    setTimeout(() => {
      secuenciaUsuario = [];
      turnoMaquina();
    }, delayJugador + 1000);
  }
}
const turnoJugador = ()=>{
  actualizarEstado("Turno del Jugador")
  habilitarUsuario()
}
$btnJugar.addEventListener("click",turnoMaquina)
