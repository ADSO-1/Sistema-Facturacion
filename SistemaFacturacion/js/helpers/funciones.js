import { clienteLS } from "../index.js";

export const generarID = () => { //Genera un ID aleatorio para cada Cliente creado
    const random = Math.random().toString(36).substr(16);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const limpiarHTML = () => {//Funcion para limpiarHTML
    const listaClientes = document.querySelector('.info-lista');
    if(listaClientes){
        while(listaClientes.firstChild){
            listaClientes.removeChild(listaClientes.firstChild);
        };
    };
}

export const imprimirLS = () => { //Muestra en pantalla todo lo que tiene el LocalStorage
    const listaClientes = document.querySelector('.info-lista')
    const tituloLista = document.querySelector('.tituloLista')
    if(clienteLS.length > 0){ //Si el localStorage tiene valores mayores a 0 muestra la informacion
        limpiarHTML() //Limpia el HTML
        tituloLista.classList.add('full')
        tituloLista.textContent = 'Clientes Registrados'
        for(let i = 0; i < clienteLS.length ; i++){//Itera en cada cliente del LocalStorage
            if(listaClientes){
                listaClientes.innerHTML += `
                    <div class="info-clientes">
                        <p>ID Cliente: ${clienteLS[i].id}</p>
                        <p>Tipo de Documento: ${clienteLS[i].tipoDoc}</p>
                        <p>Numero de Identificacion: ${clienteLS[i].nidentificacion}</p>
                        <p>Nombre: ${clienteLS[i].nombre} </p>
                        <p>Apellido: ${clienteLS[i].apellido}</p>
                    </div>
                `
            }
        }
    }
}

export const sincronizarStorage = (datos) => localStorage.setItem('cliente', JSON.stringify(datos))//Funcion para sincronizarStorage
