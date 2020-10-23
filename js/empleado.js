var Empleado = function(idempleado, apellido, oficio, salario, departamento){
    this.idempleado = idempleado;
    this.apellido = apellido;
    this.oficio = oficio;
    this.salario = salario;
    this.departamento = departamento;

    this.sueldoAnual = function(){
        return salario*12;
    }
}