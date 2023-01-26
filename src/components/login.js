/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
import { logar } from '../lib/configFirebase.js';
/* PAGINA DE INICIO DE SESION */
export const login = () => {
 
  
  const sectionSignIn = document.createElement('section');
  const loginDiv = document.createElement('div');
  const singInWithEmailAndPassword = document.createElement('h1');
  const emailLabel = document.createElement('label');
  const email = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const password = document.createElement('input');
  const btnSingIn = document.createElement('button');
  const btnHome = document.createElement('button');

  sectionSignIn.appendChild(loginDiv);
  loginDiv.appendChild(singInWithEmailAndPassword);
  loginDiv.appendChild(emailLabel);
  loginDiv.appendChild(email);
  loginDiv.appendChild(passwordLabel);
  loginDiv.appendChild(password);
  loginDiv.appendChild(btnSingIn);
  loginDiv.appendChild(btnHome);

  sectionSignIn.setAttribute('class', 'sectionSingIn');
  loginDiv.setAttribute('class', 'loginDiv');
  singInWithEmailAndPassword.textContent = 'Ingresa tu Email y Password';
  email.setAttribute('class', 'email');
  email.setAttribute('type', 'email');
  password.setAttribute('class', 'password');
  password.setAttribute('type', 'password');

  emailLabel.textContent = 'Email';
  passwordLabel.textContent = 'Password';

  btnSingIn.setAttribute('class', 'btnSingIn');
  btnSingIn.setAttribute('type', 'text');
  btnHome.setAttribute('class', 'btnHome');
  btnSingIn.textContent = 'Enviar';
  btnHome.addEventListener('click', () => navigateRoutes('/'));
  
  btnSingIn.addEventListener('click', () => {
    const emailUser = email.value;
    const passwordUser = password.value;
    logar(email, password);
    navigateRoutes('/wallApp');
    
  });
  

  loginDiv.appendChild(btnHome);

  return sectionSignIn;
};
