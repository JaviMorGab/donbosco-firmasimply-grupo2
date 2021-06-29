// Book Class
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
    const defaultBooks = [ //esto es un ARRAY
        {
            title: 'Book 1',
            author: 'Brad Traversy',
            isbn: '12345'
        },
        {
            title: 'Book 2',
            author: 'Mehul Mohan',
            isbn: '6789'
        }
    ];
        const books = defaultBooks;
        books.forEach ((book) => UI.addBookToList(book));

}

     // FUNCTION TO DISPLAY THE BOOKS IN TABLE
    static displayBooks(){
        let books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));

        // console.log(books);
    }

    // FUNCTION TO ADD A BOOK TO THE TABLE
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.fechaini}</td>
            <td>${book.fechap}</td>
            <td>${book.estado} </td>    
            
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    // FUNCTION TO CLEAR FIELDS AFTER ADDING THE BOOK
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#fechaini').value = '';// tttttttttttttttttttt
        document.querySelector('#fechap').value = '';//ttttttttttttttttttttt
        document.querySelector('#estado').value = '';
    }

    // FUNCTION TO DELETE A BOOK FROM TABLE
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    // FUNCTION TO SHOW ALERT
    static showAlerts(message,className){
        // CREATE ALERT DIV WITH ALL NECESSARY PROPERTIES
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        // ADD MESSAGE TO THIS DIV
        div.appendChild(document.createTextNode(message));
        // ADD DIV TO DOM
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// STORE CLASS : HANDLES STORAGE
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
          books = [];
        } else {
          books = JSON.parse(localStorage.getItem('books'));
        }
    
        return books;
      }

    static saveBook(book){
        let books;
        books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
          if(book.isbn === isbn) {
            books.splice(index, 1);
          }
        });
    
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// EVENT: DISPLAY BOOKS
document.addEventListener('DOMContentLoaded',UI.displayBooks);

// EVENT: ADD BOOK TO LIST 
document.querySelector('#book-form').addEventListener('submit',(e) => {
    
    // PREVENT DEFAULT
    e.preventDefault();

    // GET VALUES
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const fechaini = document.querySelector('#fechaini').value;//ttttttttttttttttttttttttttttttt
    const fechap = document.querySelector('#fechap').value;
    const estado = document.querySelector('#estado').value;

    //VALIDATE

    if(title === '' || author === '' || fechaini === '' || fechap === '' || estado === '') {
        UI.showAlerts('Por favor rellene los campos...','danger');
    } else {
        // CREATE BOOK OBJECT
        const book = new Book(title,author,fechaini,fechap,estado);

        // ADD BOOK TO LIST
        UI.addBookToList(book);

        // SAVE BOOK TO LOCAL STORAGE
        Store.saveBook(book);

        // SHOW SUCCESS MESSAGE
        UI.showAlerts('Pildora añadida','success');

        // CLEAR FIELDS
        UI.clearFields();
    }

});

// EVENT: REMOVE A BOOK
document.querySelector('#book-list').addEventListener('click',(e) => {
    //DELETE BOOK FRON UI
    UI.deleteBook(e.target);
    //DELETE BOOK FROM STORE
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //SHOW SUCCES MESSAGE
    UI.showAlerts('Pildora borrada','success');
});


///BLABLA