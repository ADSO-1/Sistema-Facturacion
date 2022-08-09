console.log("Conectado...");
import { guardarCliente } from "./Controlador/Modelo.js";
export let cliente = []

const formulario = document.querySelector("#cliente");

document.addEventListener("DOMContentLoaded", () => {
    const tituloLista = document.querySelector('.tituloLista')
    if(cliente.length >= 0){
        tituloLista.classList.add('empty')
        tituloLista.textContent = 'No hay Clientes Registrados'
    }
});

formulario.addEventListener("submit", function(e){
    e.preventDefault();    
    const tipoDoc = document.querySelector("#tipoDocumento").value
    const nidentificacion = document.querySelector("#doc").value
    const genero = document.querySelector("#genero").value
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const fecha_nac = document.querySelector("#fecha_nac").value
    const nacio = document.querySelector("#nac").value
    guardarCliente(tipoDoc, nidentificacion, genero, nombre, apellido, fecha_nac, nacio)
    formulario.reset()
})