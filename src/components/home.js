/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
import {
  GoogleAuthProvider,
  provider,
  login,
  registerUser,
  auth,
  signInWithPopup,
} from '../lib/configFirebase.js';
/* HOME DE INICIO DE SESION DE LA APP */
export const home = () => {
  const divHome = document.createElement('div'); /* div que contiene el bloque de home */

  const imgLogo = document.createElement('img'); /* imagen del logo de la app */

  const btnLogin = document.createElement('button');
  const btnLoginGoogle = document.createElement('button'); /* inicia sesion - continue with google */
  const containerBtn = document.createElement('div'); /* div que contiene los botones */

  const containerRegister = document.createElement('div');
  const text = document.createElement('h3');
  const btnRegister = document.createElement('button'); /* boton de registro */

  btnLogin.textContent = 'Iniciar sesión';
  btnLoginGoogle.textContent = 'Iniciar sesión con Google';
  text.textContent = '¿No tienes una cuenta?';
  btnRegister.textContent = 'Registrate';

  divHome.setAttribute('class', 'divHome');
  imgLogo.setAttribute('class', 'imgLogo');
  btnLogin.setAttribute('class', 'btnLogin');
  btnLoginGoogle.setAttribute('class', 'btnLoginGoogle');
  btnLoginGoogle.setAttribute('img', 'imgGoogle');
  containerBtn.setAttribute('class', 'containerBtn');

  containerRegister.setAttribute('class', 'containerRegister');
  text.setAttribute('class', 'texth3');
  btnRegister.setAttribute('class', 'btnRegister');

  btnLogin.addEventListener('click', () => navigateRoutes('/Login'));
  /* btnLoginGoogle.addEventListener('click', () => navigateRoutes('/WallApp')); */
  btnRegister.addEventListener('click', () => navigateRoutes('/Register')); /* evento click para ejecutar funcion navigate. -param:pathname- */

  containerBtn.appendChild(imgLogo);
  containerBtn.appendChild(btnLogin);
  containerBtn.appendChild(btnLoginGoogle);
  containerRegister.appendChild(text);
  containerRegister.appendChild(btnRegister);
  divHome.appendChild(containerBtn);
  divHome.appendChild(containerRegister);

  btnRegister.addEventListener('click', () => {
    registerUser();
  });

  btnLogin.addEventListener('click', () => {
    login();
  });

  btnLoginGoogle.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        navigateRoutes('/WallApp');
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        console.Console(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
      // ...
      });
  });
  return divHome;
};

/* hola ginaaa  hola belen */
