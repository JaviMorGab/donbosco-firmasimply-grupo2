import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';
import { listadoTareas } from './Modules/API/llamadasApi.js';

// let contadorTareas = 0;
// let contadorCompletadas = 0;
// let contadorPendientes = 0;

// contadorTareas.onclick = function () {
// 	contador++;
// 	numeroContador.textContent = contador;
// }

class task {
	constructor(titulo, descripcion, estado, user_id, categoria_id) {
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.estado = estado;
		this.user_id = user_id;
		this.categoria_id = categoria_id;
	}
}

async function mostrarTareas() {
	
		const  listadoTareas = await Tarea.getListadoTareas();
		console.log(listadoTareas)
		const list = document.getElementById('listaTareas')
		const row = document.createElement('tr')
		row.innerHTML = `
		<th scope="row"><input type="checkbox" id="checkTareas" checked/></th>
		<td>${Tarea.titulo}</td>
		<td>${Tarea.descripcion}</td>
		<td>${Tarea.estado}</td>
		<td>${Tarea.categoria_id}</td>
		<td><a href="#" class="tm-product-delete-link" id="borrar2"><i class="far fa-trash-alt tm-product-delete-icon borrar"></i></a></td>
		`;
		list.appendChild(row);
		// let isChecked = document.getElementById('checkTareas').checked;
		// if(isChecked){
		// 	contadorCompletadas++;
		// 	console.log("completadas: " + contadorCompletadas);
		// }
	}
	console.log(mostrarTareas())
class UI {
	
	
	static limpiarCampos() {
		document.getElementById('nombreTarea').value = '';
		document.getElementById('categoria').value = '';
		document.getElementById('descripcion').value = '';
		Categoria.getListadoCategorias();
	}
	static borrarTarea(target) {
		console.log(target.parentElement.parentElement);
		let isChecked = document.getElementById('checkTareas').checked;
		console.log(isChecked);
        if(target.classList.contains('borrar'))  {
            target.parentElement.parentElement.parentElement.remove();
			Tarea.borrarTarea(idTarea);
    }
  }

}

let idTarea = 2;


// Event: Add a Tarea
document.querySelector('#formularioTareas').addEventListener('submit', añadirTarea, false);

async function añadirTarea(e) {
	// prevent actual submission
	e.preventDefault();
	
	// Capturar los valores del Form
	const titulo = document.getElementById('nombreTarea').value;
	const descripcion = document.getElementById('descripcion').value;
	const estado = 0;
	const user_id =  Auth.getCoder().id;
	const categoria_id = 1;
	

	// Crear un nuevo objeto 
	const tarea = new task(titulo, descripcion, estado, user_id, categoria_id);
	// Añadir el objeto  creado a UI (mostrarlo en HTML)

	Tarea.crearTarea(tarea);

	UI.limpiarCampos();

}

document.getElementById('listaTareas').addEventListener('click', handleRemove);
function handleRemove(e) {
  UI.borrarTarea(e.target);
}



