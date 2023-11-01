const $ingresarNombre = document.querySelector('#ingresa-nombre');
const $seleccionarCiudad = document.querySelector('#selec-ciudad');
const $descripcionRegalo = document.querySelector('#desc-regalo');
const $botonEnviar = document.querySelector('#boton-enviar');

const $contenedorNombre = document.getElementById("caja-nombre")
const $contenedorCiudad = document.getElementById("caja-ciudad")
const $contenedorRegalo = document.getElementById("caja-regalo")


const parrafoAdvertenciaCiudad = document.createElement("p")
const parrafoAdvertenciaNombre = document.createElement("p")
const parrafoAdvertenciaRegalo = document.createElement("p")


let ciudadSeleccionada = ""
let nombreIngresado = ""
let regaloIngresado = ""


const recuperarDatosFormulario = (event)=>{
    event.preventDefault()
    ciudadSeleccionada = $seleccionarCiudad.value
    nombreIngresado = $ingresarNombre.value
    regaloIngresado = $descripcionRegalo.value
}
const comprobarDatos = (nombre,ciudad,regalo)=>{
    comprobarNombre(nombre)
    comprobarCiudad(ciudad)
    comprobarDescripcionRegalo(regalo)
}

const comprobarCiudad = (ciudad)=>{
    
    if(!ciudad){
        parrafoAdvertenciaCiudad.textContent = "Debes seleccionar una ciudad"
        parrafoAdvertenciaCiudad.classList.add("texto-rojo")
        $contenedorCiudad.appendChild(parrafoAdvertenciaCiudad)
    }
}
const comprobarNombre = (nombre)=>{
    const cantMaxCaracteres = 50
    if(!nombre){
        parrafoAdvertenciaNombre.textContent = "Debes ingresar almenos 1 caracter"
        parrafoAdvertenciaNombre.classList.add("texto-rojo")
        $contenedorNombre.appendChild(parrafoAdvertenciaNombre)
    }
    if(nombre.length > cantMaxCaracteres ){
        parrafoAdvertenciaNombre.textContent = `Excediste la cantidad de caracteres (${cantMaxCaracteres})`
        parrafoAdvertenciaNombre.classList.add("texto-rojo")
        $contenedorNombre.appendChild(parrafoAdvertenciaNombre)
    }
}
const comprobarDescripcionRegalo = (regalo)=>{
    const cantMinCaracteres = 5
    if(regalo.length < cantMinCaracteres){
        parrafoAdvertenciaRegalo.textContent = `La descripcion del regalo debe tener mas de ${cantMinCaracteres} caracteres`
        parrafoAdvertenciaRegalo.classList.add("texto-rojo")
        $contenedorRegalo.appendChild(parrafoAdvertenciaRegalo)
    }
}


$botonEnviar.addEventListener("click", (e)=>{
    recuperarDatosFormulario(e)
    comprobarDatos(nombreIngresado,ciudadSeleccionada,regaloIngresado)
})
