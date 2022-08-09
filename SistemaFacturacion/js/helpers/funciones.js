export const generarID = () => {
    const random = Math.random().toString(36).substr(16);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const limpiarHTML = () => {
    const listaClientes = document.querySelector('.info-lista');
    if(listaClientes){
        while(listaClientes.firstChild){
            listaClientes.removeChild(listaClientes.firstChild);
        };
    };
}

export const sincronizarStorage = (datos) => localStorage.setItem('Clientes', JSON.stringify(datos))