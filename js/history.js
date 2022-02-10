//obtiene las operaciones
function obtener(){
    var num=[];
    for (pp =1; pp <= localStorage.length; pp++) {
        num.push(localStorage[pp]);    
    }
    return num;
}


//guardar las operaciones
var op=localStorage.length;
function guardar_calculos(ops){
    localStorage.setItem(op++,ops);    
}



var hs;
const arra=obtener();
arra.forEach(function(ray){
    //creando al hijo
hs = document.createElement('p');
//buscando la caja 
const item = document.getElementById('ppp');
//asignado un hijo a la caja 
hs.innerHTML=(ray);

item.appendChild(hs); 
});
// borrado del historial 
function borra(){
    const item = document.getElementById('ppp');
    Array.from(item.children).forEach(function(teee){
        teee.remove();
    });
    localStorage.clear(); 
}
borra();
