/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
import { registerUser } from '../lib/configFirebase.js';
/* PAGINA PARA REGISTRARSE CON DATOS */
export const register = () => {
  const sectionRegister = document.createElement('section'); /* contenedor de todo lo que aparece en register */
  const divRegisterText = document.createElement('div'); /* texto del contenedor */
  const textSignIn = document.createElement('p');
  const divRegisterForm = document.createElement('div'); /* contenedor donde esta en formulario */
  const formRegister = document.createElement('form'); /* formulario */
  const labelName = document.createElement('label');
  const name = document.createElement('input');
  const labelLastName = document.createElement('label');
  const lastName = document.createElement('input');
  const labelEmail = document.createElement('label');
  const email = document.createElement('input');
  const labelPassword = document.createElement('label');
  const password = document.createElement('input');
  const btnRegistrarme = document.createElement('input');
  const btnHome = document.createElement('button');
  const root = document.getElementById('root');

  /* appen */
  root.append(btnHome);
  sectionRegister.appendChild(divRegisterText);
  divRegisterText.appendChild(textSignIn);
  sectionRegister.appendChild(divRegisterForm);
  divRegisterForm.appendChild(formRegister);
  formRegister.appendChild(labelName);
  formRegister.appendChild(name);
  formRegister.appendChild(labelLastName);
  formRegister.appendChild(lastName);
  formRegister.appendChild(labelEmail);
  formRegister.appendChild(email);
  formRegister.appendChild(labelPassword);
  formRegister.appendChild(password);
  formRegister.appendChild(btnRegistrarme);

  /* atribute */
  sectionRegister.setAttribute('class', 'sectionRegister');
  divRegisterText.setAttribute('class', 'divRegisterText');
  textSignIn.textContent = 'Por favor, ingresa tus datos';

  divRegisterForm.setAttribute('class', 'divRegisterForm');
  formRegister.setAttribute('class', 'formRegister');
  formRegister.setAttribute('id', 'formRegister');

  labelName.textContent = 'Nombre';
  labelLastName.textContent = 'Apellido';
  labelEmail.textContent = 'Correo';
  labelPassword.textContent = 'Contraseña';
  btnHome.textContent = '';

  btnHome.setAttribute('class', 'btnHome');
  btnHome.setAttribute('type', 'text');

  name.setAttribute('class', 'input');
  name.setAttribute('type', 'text');
  name.setAttribute('required', '');

  lastName.setAttribute('class', 'input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('required', '');

  email.setAttribute('class', 'input');
  email.setAttribute('type', 'email');
  email.setAttribute('required', '');

  password.setAttribute('class', 'input');
  password.setAttribute('type', 'password');

  btnRegistrarme.setAttribute('class', 'btnRegistrarme');
  btnRegistrarme.setAttribute('type', 'submit');

  textSignIn.setAttribute('class', 'p');
  labelName.setAttribute('class', 'textForm');
  labelLastName.setAttribute('class', 'textForm');
  labelEmail.setAttribute('class', 'textForm');
  labelPassword.setAttribute('class', 'textForm');

  /* function */
  /* btn de enviar formulario de registro */
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailUser = email.value;
    const passwordUser = password.value;
    registerUser(emailUser, passwordUser);
    navigateRoutes('/WallApp');
    console.log(emailUser);
  });

  btnHome.addEventListener('click', () => navigateRoutes('/')); /* pathname '/' */
  // btnRegistrarme.addEventListener('click', () => navigateRoutes('/wallApp'));
  return sectionRegister;
};
