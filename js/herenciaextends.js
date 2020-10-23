//OBJETO QUE HEREDE DE ARRAY
var MiArray = function (){
    this.longitud = 'Longitud: ' + this.length;
    this.descripcion = 'Hoy es viernes';
    this.contarElementos = function (){
        return this.length;
    }
    this.sumarElementos = function (){
        var suma = 0;
        for(var i = 0; i<this.length; i++){
            suma+= this[i];
        }
        return suma;
    }
}
MiArray.prototype = new Array();

//AÑADIR METODOS A LA CLASE ARRAY
//UTILIZAMOS EXTENDS
Array.prototype.contarElementos = function (){
    return this.length;
}

Array.prototype.sumarElementos = function(){
    var suma = 0;
    for (var i = 0; i<this.length; i++){
        suma += this[i];
    }
    return suma;
}