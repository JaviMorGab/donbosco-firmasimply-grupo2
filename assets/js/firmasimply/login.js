import Auth from './Modules/Auth/Auth.js';

const DASHBOARD_URL = '/index.html';
const CODER = {email: 'derian@firmasimply.com', password: 'password'};

// Login

const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', login, false);

async function login() {
  
  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
}
