import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';

let contadorTareas = 0;
let contadorCompletadas = 0;
let contadorPendientes = 0;

// contadorTareas.onclick = function () {
// 	contador++;
// 	numeroContador.textContent = contador;
// }

class task {
	constructor(nombreTarea, descripcion, categoria, fechaDeCreacion) {
		this.nombreTarea = nombreTarea;
		this.descripcion = descripcion;
		this.categoria = categoria;
		this.fechaDeCreacion = fechaDeCreacion;
	}
}
	const defaultTareas = [
		{
		nombreTarea: 'Periodico',
		categoria: 'HTML',
		descripcion: 'Hacerlo Responsive',
		fechaDeCreacion : '2021-06-12'
	},
	{
		nombreTarea: 'Cajas',
		categoria: 'CSS',
		descripcion: 'Usar flex',
		fechaDeCreacion : '2021-04-12'
	}
]
class UI {
	static mostrarTareas() {
		defaultTareas.forEach(tarea => UI.addTareaToList(tarea))
	}
	static addTareaToList(tarea) {
		const list = document.getElementById('listaTareas')
		const row = document.createElement('tr')
		row.innerHTML = `
		<th scope="row"><input type="checkbox" id="checkTareas" checked/></th>
		<td>${tarea.nombreTarea}</td>
		<td>${tarea.categoria}</td>
		<td>${tarea.descripcion}</td>
		<td>${tarea.fechaDeCreacion}</td>
		<td><a href="#" class="tm-product-delete-link" id="borrar2"><i class="far fa-trash-alt tm-product-delete-icon borrar"></i></a></td>
		`;
		list.appendChild(row);
		let isChecked = document.getElementById('checkTareas').checked;
		if(isChecked){
			contadorCompletadas++;
			console.log("completadas: " + contadorCompletadas);
		}
		contadorTareas++;
		console.log(contadorTareas);
	}
	static limpiarCampos() {
		document.getElementById('nombreTarea').value = '';
		document.getElementById('categoria').value = '';
		document.getElementById('descripcion').value = '';
		document.getElementById('fechaDeCreacion').value = '';
	}
	static borrarTarea(target) {
		console.log(target.parentElement.parentElement);
		// let isChecked = document.getElementById('checkTareas').checked;
		// console.log(isChecked);
        if(target.classList.contains('borrar'))  {
            target.parentElement.parentElement.parentElement.remove();
			contadorTareas--;
			console.log(contadorTareas);
         }
    }
}
	
UI.mostrarTareas();

// Event: Add a Tarea
document.querySelector('#formularioTareas').addEventListener('submit', añadirTarea, false);

function añadirTarea(e) {
	// prevent actual submission
	e.preventDefault();
	
	// Capturar los valores del Form
	const nombreTarea = document.getElementById('nombreTarea').value;
	const descripcion = document.getElementById('descripcion').value;
	const categoria = document.getElementById('categoria').value;
	const fechaDeCreacion = document.getElementById('fechaDeCreacion').value;

	// Crear un nuevo objeto book
	const tarea = new task(nombreTarea, descripcion, categoria, fechaDeCreacion);
	// Añadir el objeto book creado a UI (mostrarlo en HTML)
	UI.addTareaToList(tarea);
	UI.limpiarCampos();

}

document.getElementById('listaTareas').addEventListener('click', handleRemove);
function handleRemove(e) {
  UI.borrarTarea(e.target);
}



