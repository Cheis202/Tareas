const botonEnviar = document.querySelector("#botonEnviar")
const bienvenido = document.querySelector("#bienvenido")

const nombreDelUsuario = document.querySelector("#nombreDelUsuario")
const apellidoDelUsuario = document.querySelector("#apellidoDelUsuario")
const edadDelUsuario = document.querySelector("#edadDelUsuario")

botonEnviar.addEventListener("click",(e)=>{
    e.preventDefault()

    const infoNombre = document.querySelector("#ingresarNombre").value
    const infoApellido = document.querySelector("#ingresarApellido").value
    const infoEdad = document.querySelector("#ingresarEdad").value

    return(
        bienvenido.textContent = "Bienvenido, " + infoNombre,
        nombreDelUsuario.textContent = "Nombre: " + infoNombre,
        apellidoDelUsuario.textContent = "Apellido: " + infoApellido,
        edadDelUsuario.textContent = "Edad: " + infoEdad
    )
})
