class Persona{
    // Atributos - 
    constructor(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio){
        this.tipoDoc = tipoDoc;
        this.nidentificacion = nidentificacion;
        this.genero = genero;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fecha_nac;
        this.nacio = nacio;
    }

    // Metodos logica del negocio
    mostrarDatos(){
        console.log(this.apellido)
        return `
            <p>Tipo de Documento: ${this.tipoDoc}</p>
            <p>Numero de Identificacion: ${this.nidentificacion}</p>
            <p>Nombre: ${this.nombre} </p>
            <p>Apellido: ${this.apellido}</p>
       `
    }
}

export default Persona;