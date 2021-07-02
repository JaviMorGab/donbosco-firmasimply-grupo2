import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';

 async function getListadoPildoras() {
     let res = await Pildora.getListadoPildoras();
     console.log(res);
     for (let step = 0; step < (res.length); step++) {
        console.log(res[step]);
        // Se ejecuta 5 veces, con valores del paso 0 al 4.
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.id = res[step].id;
        let numero = 33;
        row.innerHTML = `
            <td>` + res[step].nombre + `</td>
            <td>${res[step].descripcion}</td>
            <td>${res[step].created_at}</td>
            <td>${res[step].fecha_presentacion}</td>
            <td>${res[step].estado}</td> 
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
              `;
        list.appendChild(row);
      }
 }
 getListadoPildoras();
// Funcionalidad crear píldora
 //
 let pildora = {
     nombre: 'NPM',
     descripcion: 'Lorem Ipsum',
     fecha_presentacion: '2021-07-12',
     estado: 0, // 0 pendiente, 1 presentada
     user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
 };

//  Pildora.crearPildora(pildora);

// // Funcionalidad borrar píldora
// //
 let idPildora = await Pildora.getListadoPildoras().id;
 //console.log(idPildora);
 Pildora.borrarPildora(idPildora);
 

// // Funcionalidad marcar una píldora como presentada o pendiente


 let data = { estado: 1 }; // 1 presentada, 0 pendiente
 Pildora.marcarPildora(data, idPildora);


// // Módulo Píldoras

 // Consultar el listado de píldoras
 Pildora.getListadoPildoras();

 class Book {
     constructor(title,author,fechaini,fechap,estado){
         this.title = title;
         this.author = author;
         this.fechaini = fechaini;
         this.fechap = fechap;
         this.estado = estado;
     }
 }

 // UI Class
 class UI {
     static displayBooks(){        
         const books = Store.getBooks(); // defaultBooks;
         books.forEach ((book) => UI.addBookToList(book));

 }

//      // FUNCTION mostrar las PILDORAS en la TABLA
     static displayBooks(){
         let books = Store.getBooks();

         books.forEach((book) => UI.addBookToList(book));

          console.log(books);
     }

    // FUNCTION añadir una PILDORA  a la TABLA
static addBookToList(book){
        
    }

//     // FUNCTION limpiar los campos después de añadir una PILDORA
    static clearFields(){
         document.querySelector('#title').value = '';
         document.querySelector('#author').value = '';
         document.querySelector('#fechaini').value = '';// tttttttttttttttttttt
         document.querySelector('#fechap').value = '';//ttttttttttttttttttttt
         document.querySelector('#estado').value = '';
     }

//     // FUNCTION borrar la PILDORA de la tabla
     static deleteBook(el){
         if(el.classList.contains('delete')){
             el.parentElement.parentElement.remove();
         }
     }

//     // FUNCTION mostar ALERTAS
//     static showAlerts(message,className){
//         // CREATE alerta en un DIV  con todas las propiedades
//         const div = document.createElement('div');
//         div.className = `alert alert-${className}`;
//         // añadir mensajes en el DIV
//         div.appendChild(document.createTextNode(message));
//         // añadir el DIV en el DOM
//         const container = document.querySelector('.container');
//         const form = document.querySelector('#book-form');
//         container.insertBefore(div,form);

//         // Mostrar las alarmas durante 3 segundos
//         setTimeout(() => document.querySelector('.alert').remove(), 3000);
//     }
// }

// // STORE CLASS : alamacenamiento manual
 //class Store {
//     static getBooks() {
//         let books;
//         if(localStorage.getItem('books') === null) {
//           books = [];
//         } else {
//           books = JSON.parse(localStorage.getItem('books'));
//         }
//         return books;
 //      }

     static addBook(book){
         let books;
         books = Store.getBooks();
         books.push(book);
         localStorage.setItem('books',JSON.stringify(books));
     }
     static removeBook(estado){
         const books = Store.getBooks();
        books.forEach((book, index) =>  {
           if(book.estado === estado) {
             books.splice(index, 1);
           }
         });
    
         localStorage.setItem('books', JSON.stringify(books));
    }
 }

// // EVENT: mostrar PILDORAS
// document.addEventListener('DOMContentLoaded',UI.displayBooks);

// // EVENT: añadir PILDORAS A LA LISTA
// document.querySelector('#book-form').addEventListener('submit',(e) => {
    
//     // PREVENT DEFAULT
//     e.preventDefault();

//     // OBTENER  valores (value)
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const fechaini = document.querySelector('#fechaini').value;//ttttttttttttttttttttttttttttttt
//     const fechap = document.querySelector('#fechap').value;
//     const estado = document.querySelector('#estado').value;

//     //VALIDACIONES

//     if(title === '' || author === '' || fechaini === '' || fechap === '' || estado === '') {
//         UI.showAlerts('Por favor rellene los campos...','danger');
//     } else {
//         // creamos el OBJETO book ("pildoras")
         const book = new Book(title,author,fechaini,fechap,estado);

//         // añadir book a la lista
        UI.addBookToList(book);

//         // salvar book en el LOCAL STORAGE
//         Store.addBook(book);

//         // MOSTAR mensaje de exito SHOW SUCCESS MESSAGE
//         UI.showAlerts('Pildora añadida','success');

//         // LIMPIAR  los campos
         UI.clearFields();
   //  }

 // });

// // EVENT: quitar un libro
 document.querySelector('#book-list').addEventListener('click',(e) => {
     
     //BORRAR libro de UI
    let objetoPildora = e.target.parentElement.parentElement;
    
    let idPildora = objetoPildora.id;
    console.log(idPildora);
    Pildora.borrarPildora(idPildora);
    UI.deleteBook(e.target);
    
    //BORRAR libro del STORE
     //Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
     
     //MOSTAR mensaje de exito SUCCES MESSAGE
     //UI.showAlerts('Pildora borrada','success');
 });


//  document.getElementById('listaTareas').addEventListener('click', handleRemove);
//  function handleRemove(e) {
//    UI.borrarTarea(e.target);
//  }