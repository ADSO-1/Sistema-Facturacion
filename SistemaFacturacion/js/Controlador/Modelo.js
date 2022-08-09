import Cliente from "../Model/Cliente.js"
import { cliente } from "../index.js"
import { sincronizarStorage } from "../helpers/funciones.js"

export const guardarCliente = (tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) => {
    const persona = new Cliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio)
    cliente.push(persona)
    persona.mostrarCliente()
    sincronizarStorage(cliente)
}