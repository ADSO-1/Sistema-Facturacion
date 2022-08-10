import Persona from './Persona.js';
import { generarID, limpiarHTML } from '../helpers/funciones.js';
import { clienteLS } from '../index.js';

class Cliente extends Persona{
    // Constructor
    constructor(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio, tipoCliente){
        super(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio);
        this.id = generarID();
    }
}

export default Cliente;
