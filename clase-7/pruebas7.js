function probarValidarCiudad() {
    console.assert(
        comprobarCiudad('') === 'Debes seleccionar una ciudad',
        'comprobar ciudad no validó que la ciudad no sea vacío',
    );
}

function probarValidarRegalo() {
    console.assert(
        comprobarDescripcionRegalo('') === 'La descripcion no debe estar vacia',
        'comprobar regalo no validó que el regalo no sea vacío',
    );
}
  
probarValidarNombre();
probarValidarRegalo()
  