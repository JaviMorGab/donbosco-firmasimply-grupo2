import Auth from './Modules/Auth/Auth.js';
import PildoraAPI from './Modules/Pildora.js';

class Pildora {
    constructor(nombre,descripcion,fecha_presentacion,estado,){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_presentacion = fecha_presentacion;
        this.estado = estado;
    }
}
async function displayPildoras(){        
    const listadoPildoras = await PildoraAPI.getListadoPildoras(); // Consultar el listado a la API;
    //console.log(listadoPildoras);
    
    const list = document.querySelector('#pildora-list');

        const row = document.createElement('tr');

        let array = [];
        for (let i = 0; i < 6; i++){

       
        row.innerHTML = `
        
            <td>${array[i].nombre}</td>
            <td>${array[i].descripcion}</td>
            <td>${array[i].fecha_presentacion}</td>
            <td>${array[i].estado}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
          `;  
        list.appendChild(row);
        }
       
}
PildoraAPI.crearPildora(pildora);{    
        let pildora = Store.getPildoras();
        pildora.push(pildora);
        localStorage.setItem('pildoras',JSON.stringify(pildoras));
}




// UI Class
class UI {

/*    // FUNCTION añadir una PILDORA  a la TABLA
    static addPildoraToList(pildora){
        const list = document.querySelector('#pildora-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            
            <td>${pildora.nombre}</td>
            <td>${pildora.descripcion}</td>
            <td>${pildora.fecha_presentacion}</td>
            <td>${pildora.estado}</td> 
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
          `;  
            
            
        

        list.appendChild(row);
    }
*/
    // FUNCTION limpiar los campos después de añadir una PILDORA
    static clearFields(){
        document.querySelector('#nombre').value = '';
        document.querySelector('#descripcion').value = '';
        document.querySelector('#fecha_presentacion').value = '';
        document.querySelector('#estado').value = '';
    }

    // FUNCTION borrar la PILDORA de la tabla
    static deletePildora(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    // FUNCTION mostar ALERTAS
    static showAlerts(message,className){
        // CREATE alerta en un DIV  con todas las propiedades
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        // añadir mensajes en el DIV
        div.appendChild(document.createTextNode(message));
        // añadir el DIV en el DOM
        const container = document.querySelector('.container');
        const form = document.querySelector('#pildora-form');
        container.insertBefore(div,form);

         // Mostrar las alarmas durante 3 segundos
        // setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
} 


// EVENT: mostrar PILDORAS
document.addEventListener('DOMContentLoaded',displayPildoras);

// EVENT: añadir PILDORAS A LA LISTA
 document.querySelector('#pildora-form').addEventListener('submit',(e) => {
    
    // PREVENT DEFAULT
    e.preventDefault();

    // OBTENER  valores (value)
    
    const nombre = document.querySelector('#nombre').value;
    const descripcion = document.querySelector('#descripcion').value;
    const fecha_presentacion = document.querySelector('#fecha_presentacion').value;
    const estado = document.querySelector('#estado').value;

    //VALIDACIONES

    if(nombre === '' || descripcion === '' || fecha_presentacion === '' || estado === '') {
        UI.showAlerts('Por favor rellene los campos...','danger');
    } else {
        // creamos el OBJETO pildora ("pildoras")
        const pildora = new Pildora(nombre,descripcion,fecha_presentacion,estado);

        // añadir pildora a la lista
        UI.addPildoraToList(pildora);

        // salvar Pildora en el LOCAL STORAGE
        Store.addPildora(pildora);

        // MOSTAR mensaje de exito SHOW SUCCESS MESSAGE
        UI.showAlerts('Pildora añadida','success');

        // LIMPIAR  los campos
        UI.clearFields();
    }

}); 

// EVENT: quitar una Pildora
document.querySelector('#pildora-list').addEventListener('click',(e) => {
    //BORRAR pildora de UI
    UI.deletePildora(e.target);
    //BORRAR pildora del STORE
    Store.removePildora(e.target.parentElement.previousElementSibling.textContent);
    //MOSTAR mensaje de exito SUCCES MESSAGE
    UI.showAlerts('Pildora borrada','success');
}); 

