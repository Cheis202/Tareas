// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

//----------Tarea1----------------------
const miNombre = "leonel"

const tioNombre= "raul"

let nombreUsuario = prompt("Como te llamas?").toLowerCase()


if(nombreUsuario === miNombre){
    console.log("Hola, Tocayo! Yo tambien me llamo " + nombreUsuario)
}else if(nombreUsuario === tioNombre){
    console.log("Hola " + nombreUsuario + " te llamas igual que mi tio!")
}else{
    console.log("Hola " + nombreUsuario)
}

//----------Tarea2----------------------
const miEdad= 19
let edadUsuario = prompt("Cuantos años tenes?")

if(edadUsuario > miEdad){
    console.log("Sos re viejo")
}else{
    console.log("Sos re joven")
}

//----------Tarea3----------------------
const respuestaPositiva = "si"
const respuestaNegativa= "no"

const edadMinima = 18

let tenesDocumento = prompt("Contesta con 'si' o'no',  tenes documento ?").toLowerCase()

if(tenesDocumento === respuestaPositiva){
    let edadDelCliente = prompt("Cuantos años tenes?")

    if(edadDelCliente>=edadMinima){
        console.log("Podes entrar al bar")
    }else{
        console.log("No podes entrar")
    }

}else if(tenesDocumento === respuestaNegativa){
    console.log("Sin documento no podes pasar")
}else { 
    console.log("No entiendo lo que me queres decir")
}



