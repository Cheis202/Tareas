function probarValidarEdad(){
    console.assert(
        validarEdad(10.3) === errores.edad.decimal,
        "validarEdad no valido que no tenga decimal"
    )
}

function probarValidarSalario(){
    console.assert(
        validarSalario("seeeeeee") === errores.salario.nan,
        "validarSalario no pudo validar que no sea un NaN"
    )
}

probarValidarEdad()
probarValidarSalario()