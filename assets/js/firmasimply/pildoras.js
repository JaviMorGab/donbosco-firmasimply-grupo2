import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

async function getListadoPildoras() {
    let res = await Pildora.getListadoPildoras();
    console.log(res)
}

// Funcionalidad crear píldora
//
let pildora = {
    nombre: 'NPM',
    descripcion: 'Lorem Ipsum',
    fecha_presentacion: '2021-07-12',
    estado: 0, // 0 pendiente, 1 presentada
    user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
};

Pildora.crearPildora(pildora);

// Funcionalidad borrar píldora
//
let idPildora = 2;
Tarea.borrarPildora(idPildora);

// Funcionalidad marcar una píldora como presentada o pendiente
//
let idPildora = 2;
let data = { estado: 1 }; // 1 presentada, 0 pendiente
Tarea.marcarPildora(data, idPildora);


// Módulo Píldoras

// Consultar el listado de píldoras
Pildora.getListadoPildoras();
