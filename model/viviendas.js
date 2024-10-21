function mostrarFormulario(tipo, nombre, numero, email) {
    // Rellenar los campos del formulario con los datos de la fila seleccionada
    document.getElementById('tipo').value = tipo;
    document.getElementById('nombre').value = nombre;
    document.getElementById('numero').value = numero;
    document.getElementById('email').value = email;

    // Mostrar el modal
    $('#editarModal').modal('show');
}

function guardarCambios() {
    // Aquí puedes agregar la lógica para guardar los cambios en el registro
    const tipo = document.getElementById('tipo').value;
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const email = document.getElementById('email').value;

    console.log('Cambios guardados:', { tipo, nombre, numero, email });

    // Cerrar el modal después de guardar
    $('#editarModal').modal('hide');
}

// Eventos para el menú
document.getElementById('abrir').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'block';
});

document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('nav').style.display = 'none';
});
