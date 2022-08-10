import Cliente from "../Model/Cliente.js"
import { cliente, clienteLS } from "../index.js"
import { sincronizarStorage, limpiarHTML } from "../helpers/funciones.js"

export const guardarCliente = (tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) => {
    const persona = new Cliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) //Guarda un nuevo Cliente
    cliente.push(persona) //El cliente se guarda como objeto para poder enviarlo al localStorage
    sincronizarStorage(cliente) //Funcion para sincronizarStorage el localStorage
}

export const eliminarcliente = (e) => {
    const confir = confirm("¿Esta seguro de eliminarlo?");
    const id = e.target.dataset.cliente;
    if(confir){
        limpiarHTML();
        sincronizarStorage(clienteLS.filter( cliente => cliente.id !== id));
        location.reload();
    }else{
        return;
    };
};
