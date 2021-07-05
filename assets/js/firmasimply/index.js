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
        let firmaEntrada = {
            user_id: Auth.getCoder().id,
            nota: 'texto test',
            estado: 1 // 1 para entrada, 0 para salida
        };
        Asistencia.firmar(firmaEntrada);
    }
    
// <-----------------------------------Salida-------------------------->
let salida = document.getElementById("salida");

    salida.addEventListener("click", firmarSalida)
    async function firmarSalida (e) {
        e.preventDefault()
        let firmaSalida = {
            user_id: Auth.getCoder().id,
            nota: 'texto test',
            estado: 0 // 1 para entrada, 0 para salida
    };
    Asistencia.firmar(firmaSalida);
}
console.log(respuesta)

// ----------------Ult firmas------------


let ultimaFirma = respuesta.slice(respuesta.length -4);

    function entradaoSalida () {

        if (ultimaFirma.estado == 1){ return "entrada"}
        else if (ultimaFirma.estado == 0) { return "salida"}
    }

  let nombreUsuario = Auth.getCoder().name;
    let primeraFirma = document.getElementById("firmaUno") ;
    primeraFirma.innerHTML = "<b>" + nombreUsuario + "</b>" + "ha confirmado su " + entradaoSalida(ultimaFirma[0])

    let segundaFirma = document.getElementById("firmaDos") ;
    segundaFirma.innerHTML = "<b>" + nombreUsuario + "</b>" + "ha confirmado su "+ entradaoSalida(ultimaFirma[1])

    let terceraFirma = document.getElementById("firmaTres") ;
    terceraFirma.innerHTML = "<b>" + nombreUsuario + "</b>" + "ha confirmado su "+ entradaoSalida(ultimaFirma[2])

    let cuartaFirma = document.getElementById("firmaCuatro") ;
    cuartaFirma.innerHTML = "<b>" + nombreUsuario + "</b>" + "ha confirmado su "+ entradaoSalida(ultimaFirma[3])

    console.log(ultimaFirma)



// Asistencia.firmar(firma);
//     console.log(respuesta);
    // Tu Código


// Funcionalidad de Firmar

// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldoras