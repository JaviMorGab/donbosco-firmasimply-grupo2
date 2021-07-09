<<<<<<< HEAD

// Book Class: Represents a Book
class Pildora {
	constructor(nombre, descripcion, fechac, fechap) {
		this.nombre = nombre
		this.descripcion = descripcion
		this.fechac = fechac //fecha creacion
		this.fechap = fechap // fecha presentacion
	}
	
}


class Store {
	static addPildora(pildora) {
        const pildoras = Store.getPildoras();
        pildoras.push(pildora);
        localStorage.setItem('pildoras', JSON.stringify(pildoras));
    }
	static removePildora(fechac) {
        const pildoras = Store.getPildoras();
        pildoras.forEach((pildora, index) => {
            if(pildora.fechac === fechac){
                pildoras.splice(index, 1);
            }
        });
        localStorage.setItem('pildoras', JSON.stringify(pildoras));
    }
	static getPildoras() {
        let pildoras = localStorage.getItem('pildoras');
        if(pildoras === null) {
            return [];
        } else {
            return JSON.parse(pildoras);
        }
    }
}

// UI Class: Handle UI Tasks
class UI {
	static showAlert(message, className) {
		const div = document.createElement('div')
		div.innerText = message
		div.className = `alert alert-${className}`
		document.getElementById('pildora-form').prepend(div)

		setTimeout(() => {
			div.remove()
		}, 2000)
	}

	static deletePildora(target) {
		if (target.classList.contains('delete')) {
			// we clicked the X icon
			target.parentElement.parentElement.remove()
		}
	}
	static clearFields() {
		const nombre = document.getElementById('nombre')
		const descripcion = document.getElementById('descripcion')
		const fechac = document.getElementById('fechac')
		nombre.value = ''
		descripcion.value = ''
		fechac.value = ''
	}

	static displayPildoras() {
		const pildoras = Store.getPildoras();
		pildoras.forEach((pildora) => UI.addPildoraToList(pildora))
	}

	static addPildoraToList(pildora) {
		const list = document.getElementById('pildora-list')

		const row = document.createElement('tr')

		row.innerHTML = `
    <td>${pildora.nombre}</td>
    <td>${pildora.descripcion}</td>
    <td>${pildora.fechac}</td>
	<td>${pildora.fechap}</td>
	<td><input type="radio" name="tab" value="igottwo" />
	<label for="html">Presentado</label>
		</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `

		list.appendChild(row)
	}
}

// Event: Display Books
UI.displayPildoras()

// Event: Add a Book
document.querySelector('#pildora-form').addEventListener('submit', addAPildora, false)

function addAPildora(e) {
	// prevent actual submission
	e.preventDefault()

	// Get Form Values
	const nombre = document.getElementById('nombre').value
	const descripcion = document.getElementById('descripcion').value
	const fechac = document.getElementById('fechac').value

	if (!nombre || !descripcion || !fechac) {
		UI.showAlert('Please enter correct details', 'danger')
		return
	}

	// Instantiate a new Pildora object
	const pildora = new Pildora(nombre, descripcion, fechac)

	// Add pildora object to UI
	UI.addPildoraToList(pildora)

	// Add pildora to store
	Store.addPildora(pildora)

	UI.showAlert('Pildora Añadida', 'success')

	// Clear fields
	UI.clearFields()
}

document.getElementById('pildora-list').addEventListener('click', handleRemove)
function handleRemove(e) {
	// Remove pildora from UI
	UI.deletePildora(e.target)
	UI.showAlert('Pildora Borrada', 'success')

	// Remove pildora from store
	Store.removePildora(e.target.parentElement.previousElementSibling.textContent)
}
=======

// Book Class: Represents a Book
class Pildora {
	constructor(nombre, descripcion, fechac, fechap) {
		this.nombre = nombre
		this.descripcion = descripcion
		this.fechac = fechac //fecha creacion
		this.fechap = fechap // fecha presentacion
	}
	
}


class Store {
	static addPildora(pildora) {
        const pildoras = Store.getPildoras();
        pildoras.push(pildora);
        localStorage.setItem('pildoras', JSON.stringify(pildoras));
    }
	static removePildora(fechac) {
        const pildoras = Store.getPildoras();
        pildoras.forEach((pildora, index) => {
            if(pildora.fechac === fechac){
                pildoras.splice(index, 1);
            }
        });
        localStorage.setItem('pildoras', JSON.stringify(pildoras));
    }
	static getPildoras() {
        let pildoras = localStorage.getItem('pildoras');
        if(pildoras === null) {
            return [];
        } else {
            return JSON.parse(pildoras);
        }
    }
}

// UI Class: Handle UI Tasks
class UI {
	static showAlert(message, className) {
		const div = document.createElement('div')
		div.innerText = message
		div.className = `alert alert-${className}`
		document.getElementById('pildora-form').prepend(div)

		setTimeout(() => {
			div.remove()
		}, 2000)
	}

	static deletePildora(target) {
		if (target.classList.contains('delete')) {
			// we clicked the X icon
			target.parentElement.parentElement.remove()
		}
	}
	static clearFields() {
		const nombre = document.getElementById('nombre')
		const descripcion = document.getElementById('descripcion')
		const fechac = document.getElementById('fechac')
		nombre.value = ''
		descripcion.value = ''
		fechac.value = ''
	}

	static displayPildoras() {
		const pildoras = Store.getPildoras();
		pildoras.forEach((pildora) => UI.addPildoraToList(pildora))
	}

	static addPildoraToList(pildora) {
		const list = document.getElementById('pildora-list')

		const row = document.createElement('tr')

		row.innerHTML = `
    <td>${pildora.nombre}</td>
    <td>${pildora.descripcion}</td>
    <td>${pildora.fechac}</td>
	<td>${pildora.fechap}</td>
	<td><input type="radio" name="tab" value="igottwo" />
	<label for="html">Presentado</label>
		</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `

		list.appendChild(row)
	}
}

// Event: Display Books
UI.displayPildoras()

// Event: Add a Book
document.querySelector('#pildora-form').addEventListener('submit', addAPildora, false)

function addAPildora(e) {
	// prevent actual submission
	e.preventDefault()

	// Get Form Values
	const nombre = document.getElementById('nombre').value
	const descripcion = document.getElementById('descripcion').value
	const fechac = document.getElementById('fechac').value

	if (!nombre || !descripcion || !fechac) {
		UI.showAlert('Please enter correct details', 'danger')
		return
	}

	// Instantiate a new Pildora object
	const pildora = new Pildora(nombre, descripcion, fechac)

	// Add pildora object to UI
	UI.addPildoraToList(pildora)

	// Add pildora to store
	Store.addPildora(pildora)

	UI.showAlert('Pildora Añadida', 'success')

	// Clear fields
	UI.clearFields()
}

document.getElementById('pildora-list').addEventListener('click', handleRemove)
function handleRemove(e) {
	// Remove pildora from UI
	UI.deletePildora(e.target)
	UI.showAlert('Pildora Borrada', 'success')

	// Remove pildora from store
	Store.removePildora(e.target.parentElement.previousElementSibling.textContent)
}
>>>>>>> 70a3f138cdfff05df8da2cdb2fe002fac9e985ff
