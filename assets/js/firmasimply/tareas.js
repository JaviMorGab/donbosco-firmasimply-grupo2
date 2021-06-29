import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';

// // Funcionalidad mostrar listado de tareas
// Tarea.getListadoTareas();

// // Funcionalidad crear una tarea
// let tarea = {
// 	titulo: 'Tarea nueva',
// 	descripcion: 'Lorem Ipsum',
// 	estado: 0, // 0 pendiente, 1 completada
// 	user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
// 	categoria_id: 1,
// };
// class Store {
// 	static añadirTarea(task) {
//         const tasks = Store.getTasks();
//         tasks.push(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
// 	static borrarTarea(isbn) {
//         const books = Store.getBooks();
//         books.forEach((book, index) => {
//             if(book.isbn === isbn){
//                 books.splice(index, 1);
//             }
//         });
//         localStorage.setItem('books', JSON.stringify(books));
//     }
// 	static getBooks() {
//         let books = localStorage.getItem('books');
//         if(books === null) {
//             return [];
//         } else {
//             return JSON.parse(books);
//         }
//     }

// }

// Tarea.crearTarea(tarea);
// // Funcionalidad de borrar una tarea
// let idTarea = 2;
// Tarea.borrarTarea(idTarea);

// // Funcionalidad de marcar una tarea como completada o pendiente

// let data = { estado: 1 }; // 1 completada, 0 pendiente
// Tarea.marcarTarea(data, idTarea);
// // Funcionalidad de cargar las categorias en el formulario de crear la tarea
// Categoria.getListadoTareas();


class task {
	constructor(nombreTarea, descripcion, categoria, fechaDeCreacion) {
		this.nombreTarea = nombreTarea;
		this.descripcion = descripcion;
		this.categoria = categoria;
		this.fechaDeCreacion = fechaDeCreacion;
	}
}
const mostrarTareas = [
	{
		nombreTarea: 'Periodico',
		categoria: 'html',
		descripcion: 'Hacerlo Responsive',
		fechaDeCreacion : '2021-06-12'
	},
	{
		nombreTarea: 'Cajas',
		categoria: 'css',
		descripcion: 'Usar flex',
		fechaDeCreacion : '2021-04-12'
	}
]
class UI {
	static mostrarTareas() {
		mostrarTareas.forEach(tarea => UI.añadirTarea(tarea))
	}
	static añadirTarea(tarea) {
		const list = document.getElementById('listaTareas')
		const row = document.createElement('tr')
		row.innerHTML = `
		<th scope="row"><input type="checkbox" /></th>
		<td>${tarea.nombreTarea}</td>
		<td>${tarea.categoria}</td>
		<td>${tarea.descripcion}</td>
		<td>${tarea.fechaDeCreacion}</td>
		<td><a class="tm-product-delete-link" id="borrar	"><i class="far fa-trash-alt tm-product-delete-icon"></i></a></td>
		`
		list.appendChild(row)
	}
	static clearfields(tarea) {
		document.getElementById('nombreTarea').value = '';
		document.getElementById('categoria').value = '';
		document.getElementById('descripcion').value = '';
		document.getElementById('fechaDeCreacion').value = '';
	}
	static borrarTarea(target) {
        if(target.classList.contains('borrar'))  {
            target.parentElement.parentElement.remove();
         }
    }
}
UI.mostrarTareas()

// Event: Add a Book
document.querySelector('#formularioTareas').addEventListener('submit', añadirTarea, false)

function añadirTarea(e) {
	// prevent actual submission
	e.preventDefault()

	// Capturar los valores del Form
	const nombreTarea = document.getElementById('nombreTarea').value;
	const descripcion = document.getElementById('descripcion').value;
	const categoria = document.getElementById('categoria').value;
	const fechaDeCreacion = document.getElementById('fechaDeCreacion').value;

	// Crear un nuevo objeto book
	const tarea = new task(nombreTarea, descripcion, categoria, fechaDeCreacion)
	// Añadir el objeto book creado a UI (mostrarlo en HTML)
	UI.añadirTarea(tarea);
	UI.clearfields();

}

document.getElementById('tarea').addEventListener('click', handleRemove)
function handleRemove(e) {
  UI.borrarTarea(e.target)
}

