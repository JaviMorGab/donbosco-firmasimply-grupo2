import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';

// <-----------------------Entrada-----------------------------------> 
let respuesta = await Asistencia.getlistadoFirmas();

let entrada = document.getElementById("entrada"); 

    entrada.addEventListener("click", firmarEntrada)
    async function firmarEntrada (e) {
        e.preventDefault()
        let valorGuardado = document.getElementById('nota').value;
        if (valorGuardado == '') {
            valorGuardado = 'no se introdujo la nota';
        }
        let firmaEntrada = {
            user_id: Auth.getCoder().id,
            nota: valorGuardado,
            estado: 1 // 1 para entrada, 0 para salida
        };
        Asistencia.firmar(firmaEntrada);
    }
    
// <-----------------------------------Salida-------------------------->
let salida = document.getElementById("salida");

    salida.addEventListener("click", firmarSalida)
    async function firmarSalida (e) {
        e.preventDefault()
        let valorGuardado = document.getElementById('nota').value;
        if (valorGuardado == '') {
            valorGuardado = 'no se introdujo la nota';
        }
        let firmaSalida = {
            user_id: Auth.getCoder().id,
            nota: valorGuardado,
            estado: 0 // 1 para entrada, 0 para salida
    };
    Asistencia.firmar(firmaSalida);
}
console.log(respuesta)

// ----------------Ultimas firmas------------


let listaUltimasFirmasOrdenada = respuesta.slice(respuesta.length -4).reverse();

const nombreUsuario = Auth.getCoder().name;

function comprobarEstadoAsistencia (estadoAsistencia) {
    if (estadoAsistencia == 1) { 
        return "entrada";
    } else if (estadoAsistencia == 0) { 
        return "salida";
    }
}

let elementoUltimasFirmas = document.getElementById('ultimasFirmas');

for(let i = 0; i < 4; i++){
    let firma = document.createElement('div');
    firma.classList.add("media", "tm-notification-item");
    firma.innerHTML = `<div class="media-body"><p class="mb-2" id="firmaUno"> ${listaUltimasFirmasOrdenada[i].id} <b>${nombreUsuario}</b> ha confirmado su <b>${comprobarEstadoAsistencia(listaUltimasFirmasOrdenada[i].estado)}</b></p></div>`
    elementoUltimasFirmas.appendChild(firma)
}



// Asistencia.firmar(firma);
//     console.log(respuesta);
    // Tu Código


// Funcionalidad de Firmar

// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldoras
let listaPild = await Pildora.getListadoPildoras();
let listaUltimasPildoras = listaPild.slice(listaPild.length -6).reverse();
console.log(listaPild);

let bodyPildoras = document.getElementById('cuerpoPildoras');

for(let i=0; i<6; i++){
    let bloquePildora = document.createElement('tr');
    //bloquePildora.classList.add("media", "tm-notification-item");
    bloquePildora.innerHTML = `<th scope="row"><b> ${listaUltimasPildoras[i].nombre}</b></th>
                                <td><b>${listaUltimasPildoras[i].descripcion}</b></td>
                                <td><b>${listaUltimasPildoras[i].fecha_presentacion}</b></td> 
                                <td><b>${listaUltimasPildoras[i].created_at}</b></td>
                                <td><b>${listaUltimasPildoras[i].estado}</b></td> `;
    bodyPildoras.appendChild(bloquePildora);
}

