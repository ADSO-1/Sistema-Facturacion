import Cliente from "../Model/Cliente.js"
import { cliente } from "../index.js"
import { sincronizarStorage } from "../helpers/funciones.js"

export const guardarCliente = (tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) => {
    const persona = new Cliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) //Guarda un nuevo Cliente
    cliente.push(persona) //El cliente se guarda como objeto para poder enviarlo al localStorage
    sincronizarStorage(cliente) //Funcion para sincronizarStorage el localStorage
}

export const eliminarCliente = () => { //Prueba para le Grupo xddxxdxd

}
