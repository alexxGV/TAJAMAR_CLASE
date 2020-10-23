//CREAMOS EL OBJETO
var Matematicas = function(num){
    //PROPIEDAD PARA ALMACENAR NUM
    this.numero = num;
    this.doble = 0;
    //TENDREMOS UN METODO PARA GENERAR EL NUMERO
    //ALMACENAMOS EL OBJETO EN UNA VARIABLE INTERMEDIA
    var objetoMatematicas = this;
    this.generarDoble = function (){
        objetoMatematicas.doble = objetoMatematicas.numero * 2;
        //return objetoMatematicas.doble;
    }

}