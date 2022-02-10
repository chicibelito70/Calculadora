function insert(num) {
    document.formulario.pantalla.value = document.formulario.pantalla.value + num;
}

function igual() {
    var an;
    var igual = document.formulario.pantalla.value;
    an=igual;
    if (igual) {
        document.formulario.pantalla.value = eval(igual);
        an+= " = " + document.formulario.pantalla.value;
        guardar_calculos(an);    
    }
}

function clean() {
    document.formulario.pantalla.value = "";
}

function backspace() {
    var eliminar = document.formulario.pantalla.value;
    document.formulario.pantalla.value = eliminar.substring(0, eliminar.length - 1);
}


