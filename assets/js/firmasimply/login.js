import Auth from './Modules/Auth/Auth.js';

const DASHBOARD_URL = '/index.html';
const CODER = {email: 'maria@firmasimply.com', password: 'password'};

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login, false);

async function login() {
  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
}

// Login
let coder = {email: 'maria@firmasimply.com', password: 'password'}
Auth.login(coder);

// Logout
Auth.logout();import Auth from './Modules/Auth/Auth.js';

if(document.querySelector('#logout') != null) {
  const btnLogout = document.querySelector('#logout');
  btnLogout.addEventListener('click', logout, false);
}

async function logout() {
  await Auth.logout();
  window.location.assign("http://127.0.0.1:5500/login.html");
}

// Consultar los datos del usuario logeado
Auth.getCoder();

// Consultar el token guardado
Auth.getToken();
