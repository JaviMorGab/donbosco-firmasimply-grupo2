import Auth from './Modules/Auth/Auth.js';



const DASHBOARD_URL = '/index.html';


// Login

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login, false);

async function login(e) {
  e.preventDefault()
  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  const CODER = { email: email, password: password };
  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
}


// Consultar los datos del usuario logeado
Auth.getCoder();

// Consultar el token guardado
Auth.getToken();

