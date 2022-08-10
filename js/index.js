import { guardarCliente } from "./Controlador/Modelo.js";
import { limpiarHTML, imprimirLS } from "./helpers/funciones.js";
export let cliente = [] //Array que guarda lo que tiene el localStorage - Set
export let clienteLS //Array que guarda la informacion en el localStorage - Get

const formulario = document.querySelector("#cliente");

document.addEventListener("DOMContentLoaded", () => {
    clienteLS = JSON.parse(localStorage.getItem('cliente')) ?? []//Toma los valores del localStorage
    for(let i = 0 ; i < clienteLS.length; i++) cliente.push(clienteLS[i])//Guarda en el array principal todos los elementos del Local Storage par cuando se actuzalice la pagina
    imprimirLS()//Muestra en lista todos los clientes del localStorage
    const tituloLista = document.querySelector('.tituloLista')
    if(clienteLS.length == 0){    
        tituloLista.classList.add('empty')
        tituloLista.textContent = 'No hay Clientes Registrados'//Si no hay clientes en el LocalStorage tendra este titulo
    }else{
        return
    }
})

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    limpiarHTML() //Limpia el HTML para que no se muestra doblemente la informacion
    const tipoDoc = document.querySelector("#tipoDocumento").value
    const nidentificacion = document.querySelector("#doc").value
    const genero = document.querySelector("#genero").value
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const fecha_nac = document.querySelector("#fecha_nac").value
    const nacio = document.querySelector("#nac").value
    guardarCliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio)//Manda a guardar la informacion del cliente en una funcion
    formulario.reset()//Resetea el formulario
    clienteLS = JSON.parse(localStorage.getItem('cliente')) ?? []//Toma los valores del localStorage
    imprimirLS()//Muestra en lista todos los clientes del localStorage
})