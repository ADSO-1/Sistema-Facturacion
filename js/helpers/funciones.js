import { clienteLS } from "../index.js";
import { eliminarCliente, editarCliente } from "../Controlador/Modelo.js";

export const generarID = () => { //Genera un ID aleatorio para cada Cliente creado
    const random = Math.random().toString(36).substr(16);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const limpiarHTML = (listado) => {//Funcion para limpiarHTML
    const listaClientes = document.querySelector(`${listado}`);
    if(listaClientes){
        while(listaClientes.firstChild){
            listaClientes.removeChild(listaClientes.firstChild);
        };
    };
}
const addEventListenerEliminar = () => {
    const eliminarcl = document.querySelectorAll("#eliminar");
    eliminarcl.forEach((cliente) => {
        cliente.addEventListener('click',eliminarCliente)
    })
};
const addEventListenerEditar = () => {
    const editarcl = document.querySelectorAll('#editar')
    editarcl.forEach((cliente) => {
        cliente.addEventListener('click', editarCliente)
    })
}

export const imprimirLS = () => { //Muestra en pantalla todo lo que tiene el LocalStorage
    const listaClientes = document.querySelector('.info-lista')
    const tituloLista = document.querySelector('.tituloLista')
    if(clienteLS.length > 0){ //Si el localStorage tiene valores mayores a 0 muestra la informacion
        limpiarHTML('.info-lista') //Limpia el HTML
        tituloLista.classList.add('full')
        tituloLista.textContent = 'Clientes Registrados'
        for(let i = 0; i < clienteLS.length ; i++){//Itera en cada cliente del LocalStorage
            if(listaClientes){
                listaClientes.innerHTML += `
                    <div class="info-clientes">
                        <p>ID Cliente: ${clienteLS[i].id}</p>
                        <p>Tipo de Documento: ${clienteLS[i].tipoDoc}</p>
                        <p>Numero de Identificacion: ${clienteLS[i].nidentificacion}</p>
                        <p>Nombres: ${clienteLS[i].nombre} </p>
                        <p>Apellidos: ${clienteLS[i].apellido}</p>
                        <div class="div-botones">
                            <a class="boton" id="editar" data-cliente="${clienteLS[i].id}">Editar</a>
                            <a class="boton" id="eliminar" data-cliente="${clienteLS[i].id}">Eliminar</a>
                        </div>
                    </div>
                `
            }
        }
        addEventListenerEditar()
        addEventListenerEliminar()
    }
}

export const sincronizarStorage = (datos) => localStorage.setItem('cliente', JSON.stringify(datos))//Funcion para sincronizarStorage

