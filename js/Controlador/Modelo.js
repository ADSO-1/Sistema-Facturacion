import Cliente from "../Model/Cliente.js"
import { cliente, clienteLS } from "../index.js"
import { sincronizarStorage, limpiarHTML } from "../helpers/funciones.js"

export const guardarCliente = (tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) => {
    const persona = new Cliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio) //Guarda un nuevo Cliente
    cliente.push(persona) //El cliente se guarda como objeto para poder enviarlo al localStorage
    sincronizarStorage(cliente) //Funcion para sincronizarStorage el localStorage
}

export const eliminarCliente = (e) => {
    const confirmEliminar = confirm("¿Desea eliminar este Cliente?");
    const id = e.target.dataset.cliente;
    if(confirmEliminar){
        limpiarHTML('.info-lista');
        sincronizarStorage(clienteLS.filter( cliente => cliente.id !== id));
        location.reload();
    }else{
        return;
    };
};

export const editarCliente = (e) => {
    const confirmEditar = confirm('¿Desea editar este Cliente?')
    if(confirmEditar){
        edicionHTML('#cliente'); //Cambia el formulario para editar el Cliente
        const edicionTexto = (e) => {
            clienteEditar[e.target.id] = e.target.value; //Busca los valores del cliente por medio del ID 
                                                        //y les da el valor mediante se va cambiando los valores al escribir
        };
        
        /*---------------------------- APARTADO PARA TOMAR LOS VALORES DEL CLIENTE Y MOSTRARLOS EN EL FORMULARIO ----------------------------*/
        const id = e.target.dataset.cliente; //El ID que se encontro desde el boton de Editar en la lista
        const clienteEditar = cliente.find((cliente => cliente.id === id)) //ArrayMethod para encontrar la informacion del cliente por medio de ID
        const tipoDoc = document.querySelector("#tipoDocumento")
        tipoDoc.value = clienteEditar.tipoDoc //El valor que tiene el input lo intercambia por el valor que esta en el Array
        const nidentificacion = document.querySelector("#doc")
        nidentificacion.value = clienteEditar.nidentificacion //nidentificacion.value = valor del Input
        const genero = document.querySelector("#genero")
        genero.value = clienteEditar.genero //clienteEditar.genero = valor que esta en el array
        const nombre = document.querySelector("#nombre")
        nombre.value = clienteEditar.nombre //Es importante colocar el valor del clienteEditar justo como esta en el Array
        const apellido = document.querySelector("#apellido")
        apellido.value = clienteEditar.apellido
        const fecha_nac = document.querySelector("#fecha_nac")
        fecha_nac.value = clienteEditar.fechaNacimiento //clienteEditar.fechaNacimiento es como esta en el Array, 
                                                        //pero al guardar el Cliente se encuentra como fecha_nac
        const nacio = document.querySelector("#nac")
        nacio.value = clienteEditar.nacio
        const editarForm = document.querySelector(".botonEditar") //Nuevo boton del formulario de Editar

        if(tipoDoc && nidentificacion && genero && nombre && apellido && fecha_nac && nacio){
            tipoDoc.addEventListener('change', edicionTexto); //Se le da la funcion cuando se haga un cambio en el select y toma el nuevo valor
            nidentificacion.addEventListener('input', edicionTexto); //Se le da la funcion cuando sea input y toma el nuevo valor
            genero.addEventListener('change', edicionTexto);
            nombre.addEventListener('input', edicionTexto);
            apellido.addEventListener('input', edicionTexto);
            fecha_nac.addEventListener('input', edicionTexto);
            nacio.addEventListener('input', edicionTexto);
        };

        editarForm.addEventListener('click', (e) => {
            e.preventDefault();
            sincronizarStorage(cliente.filter( cliente => cliente.id !== id)) //Guarda los clientes diferentes al ID seleccionado
            sincronizarStorage(cliente) //Guarda al cliente editado
            console.log(cliente)
            location.reload();//Recarga la pagina para actualizar el localStorage
        })
    }
}

const edicionHTML = (listado) => {
    const editarCliente = document.querySelector(`${listado}`)
    editarCliente.innerHTML = `
                <div id="form-group flex">
                    <h3 class="tituloForm">EDITAR PERSONA</h3>
                </div>
                <div id="form-group flex">
                    <select name="Genero" id="genero">
                        <option>-Seleccione su genero</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </div>

                <div id="form-group flex">
                    <select name="TipoDocumento" id="tipoDocumento">
                        <option>-Seleccione su tipo de documento</option>
                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                        <option value="Cedula">Cedula</option>
                    </select>
    
                    <input id="doc" type="text" placeholder="Ingrese su Numero de Identificacion" required>
                </div>
                <div id="form-group">
                    <input id="nombre" type="text" placeholder="Ingrese su Nombre" required>
                </div>
                <div id="form-group">
                    <input id="apellido" type="text" placeholder="Ingrese su Apellido" required>
                </div>
                <div id="form-group">
                    <input id="fecha_nac" type="date" required>
                </div>
                <div id="form-group">
                    <input id="nac" type="text" placeholder="Ingrese su Nacionalidad" required>
                </div>
                
                <div class="form-group submit flex">
                    <input class="botonEditar" type="button" value="EDITAR">
                </div>
            `
}
