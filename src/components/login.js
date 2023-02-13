/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
import { login } from '../lib/configFirebase.js';
/* PAGINA DE INICIO DE SESION */
export const loginpage = () => {
  const root = document.getElementById('root');
  const btnHome = document.createElement('button');
  const sectionSignIn = document.createElement('section');
  const loginForm = document.createElement('form');
  const text = document.createElement('h1');
  const emailLabel = document.createElement('label');
  const email = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const password = document.createElement('input');
  const btnLogIn = document.createElement('button');

  root.append(btnHome);
  sectionSignIn.appendChild(loginForm);
  loginForm.appendChild(text);
  loginForm.appendChild(emailLabel);
  loginForm.appendChild(email);
  loginForm.appendChild(passwordLabel);
  loginForm.appendChild(password);
  loginForm.appendChild(btnLogIn);

  btnHome.setAttribute('class', 'btnHome');
  sectionSignIn.setAttribute('class', 'sectionSignIn');
  loginForm.setAttribute('class', 'login-div');
  email.setAttribute('class', 'input');
  email.setAttribute('type', 'email');
  email.setAttribute('required', '');
  password.setAttribute('class', 'input');
  password.setAttribute('type', 'password');
  password.setAttribute('required', '');
  btnLogIn.setAttribute('class', 'btnLogIn');
  btnLogIn.setAttribute('type', 'submit');

  text.textContent = 'Inicia sesión';
  emailLabel.textContent = 'Correo';
  passwordLabel.textContent = 'Contraseña';
  btnLogIn.textContent = 'Ingresar';

  btnHome.addEventListener('click', () => navigateRoutes('/'));

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailUser = email.value;
    const passwordUser = password.value;
    login(emailUser, passwordUser)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in /*const user = userCredential.user;*/
        navigateRoutes('/WallApp'); // ...
      })
      .catch((error) => {
        console.error(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });

  return sectionSignIn;
};
