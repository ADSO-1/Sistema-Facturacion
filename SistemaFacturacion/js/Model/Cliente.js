import Persona from './Persona.js';
import { generarID, limpiarHTML } from '../helpers/funciones.js';
import { cliente } from '../index.js';

const listaClientes = document.querySelector('.info-lista')
const tituloLista = document.querySelector('.tituloLista')

class Cliente extends Persona{
    // Constructor
    constructor(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio, tipoCliente){
        super(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio);
        this.id = generarID();
        this.tipoCliente = tipoCliente;
    }

    mostrarCliente(){
        if(cliente.length > 0){ 
            console.log(cliente)
            limpiarHTML();
            tituloLista.classList.replace('empty', 'full')
            tituloLista.textContent = 'Clientes Registrados'
            for(let i = 0; i < cliente.length ; i++){
                if(listaClientes){
                    listaClientes.innerHTML += `
                        <div class="info-clientes">
                            <p>ID Cliente: ${cliente[i].id}</p>
                            <p>${super.mostrarDatos()}</p>
                            <p>Tipo Cliente: ${cliente[i].tipoCliente}</p>
                        </div>
                    `
                }
            }
        }
    }

}

export default Cliente;