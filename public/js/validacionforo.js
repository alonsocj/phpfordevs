

function validarForo(){
    //Obtengo los valores por su id
    var tituloForo = document.getElementById('Titulo').value;
    var DescripcionForo = document.getElementById('contenido').value;

    if(tituloForo == "" || DescripcionForo == ""){
        Swal.fire({
            title: 'Campos Requeridos',
            text: 'Debe de Ingresar el Titulo y/o Descripcion del Tema para publicarlo en el foro',
            icon: 'error',
            showConfirmButton: 'Aceptar',

        })
        return false;
	}
    //Si se cumple la validacion
    return true;

}

function validarComentarios(){
    //Obtengo el valor por su id
    var Comentario = document.getElementById('comment').value;

    if(Comentario == ""){
        Swal.fire({
            title: 'Campo Requerido',
            text: 'Debe de Ingresar una respuesta para el tema',
            icon: 'error',
            showConfirmButton: 'Aceptar',

        })
        return false;
	}
    //Si se cumple la validacion
    return true;

}





