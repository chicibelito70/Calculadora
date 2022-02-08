//obtiene las operaciones
function obtener(){
    var num=[];
    for (let pp = 0; pp < localStorage.length; pp++) {
        num.push(localStorage[pp]);    
    }
    return pp;
}
/*function guardar(){
    let historial = {
        numeros:0
    }
}*/

//guardar las operaciones
var op=localStorage.length;
function guardar_calculos(ops  ){
    localStorage.setItem(op++,ops);    
}


/// leerlo 


