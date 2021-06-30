import Auth from './Modules/Auth/Auth.js';

//Auth.logout();import Auth from './Modules/Auth/Auth.js';

if (document.querySelector('#logout') != null) {
  const btnLogout = document.querySelector('#logout');
  btnLogout.addEventListener('click', logout, false);
}

async function logout(e) {
  e.preventDefault()
  await Auth.logout();
  window.location.assign("http://127.0.0.1:5500/login.html");
}