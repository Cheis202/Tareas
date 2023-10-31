const $ingresarNombre = document.querySelector('#ingresa-nombre');
const $seleccionarCiudad = document.querySelector('#selec-ciudad');
const $descripcionRegalo = document.querySelector('#desc-regalo');
const $botonEnviar = document.querySelector('#boton-enviar');

const $contenedorNombre = document.getElementById("caja-nombre")
const $contenedorCiudad = document.getElementById("caja-ciudad")
const $contenedorRegalo = document.getElementById("caja-regalo")



const arrayCiudades = Array.from($seleccionarCiudad.options).map(opciones => opciones.value) ;

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
const comprobarDatos = (datoNombre,datoCiudad,datoRegalo)=>{
    comprobarNombre(datoNombre)
    comprobarCiudad(datoCiudad)
    comprobarDescripcionRegalo(datoRegalo)
}

const comprobarCiudad = (ciudad)=>{
    for(let i = 0; i < arrayCiudades.length;i++){
        if(ciudad === ""){
            parrafoAdvertenciaCiudad.textContent = "Debes seleccionar una ciudad"
            parrafoAdvertenciaCiudad.classList.add("textoRojo")
            $contenedorCiudad.appendChild(parrafoAdvertenciaCiudad)
        }
    }
}
const comprobarNombre = (nombre)=>{
    if(nombre === ""){
        parrafoAdvertenciaNombre.textContent = "Debes ingresar almenos 1 caracter"
        parrafoAdvertenciaNombre.classList.add("textoRojo")
        $contenedorNombre.appendChild(parrafoAdvertenciaNombre)
    }
    if(nombre.length >50){
        parrafoAdvertenciaNombre.textContent = "Excediste la cantidad de caracteres (50)"
        parrafoAdvertenciaNombre.classList.add("textoRojo")
        $contenedorNombre.appendChild(parrafoAdvertenciaNombre)
    }
}
const comprobarDescripcionRegalo = (regalo)=>{
    if(regalo.length < 5){
        parrafoAdvertenciaRegalo.textContent = "La descripcion del regalo debe tener mas de 5 caracteres"
        parrafoAdvertenciaRegalo.classList.add("textoRojo")
        $contenedorRegalo.appendChild(parrafoAdvertenciaRegalo)
    }
}


$botonEnviar.addEventListener("click", (e)=>{
    recuperarDatosFormulario(e)
    comprobarDatos(nombreIngresado,ciudadSeleccionada,regaloIngresado)
})
