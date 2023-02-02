/* eslint-disable import/no-cycle */
import { navigateRoutes } from '../main.js';
import { signInWithGoogle, provider } from '../lib/configFirebase.js';
/* HOME DE INICIO DE SESION DE LA APP */
export const home = () => {
  const divHome = document.createElement('div'); /* div que contiene el bloque de home */

  const imgLogo = document.createElement('img'); /* imagen del logo de la app */

  const containerBtn = document.createElement('div'); /* div que contiene los botones */
  const btnLogin = document.createElement('button');
  const btnLoginGoogle = document.createElement('button'); /* inicia sesion - continue with google */
  const text = document.createElement('h3');
  const btnRegister = document.createElement('button'); /* boton de registro */

  btnLogin.textContent = 'LOG IN';
  btnLoginGoogle.textContent = '';
  text.textContent = 'Dont have an account?';
  btnRegister.textContent = 'Registrate';

  imgLogo.setAttribute('class', 'imgLogo');
  containerBtn.setAttribute('class', 'containerBtn');
  btnLogin.setAttribute('class', 'btnLogin');
  btnLoginGoogle.setAttribute('class', 'btnLoginGoogle');
  text.setAttribute('class', 'texth3');
  btnRegister.setAttribute('class', 'btnRegister');

  btnLogin.addEventListener('click', () => navigateRoutes('/Login'));
  btnLoginGoogle.addEventListener('click', () => navigateRoutes('/Login'));
  btnRegister.addEventListener('click', () => navigateRoutes('/Register')); /* evento click para ejecutar funcion navigate. -param:pathname- */

  containerBtn.appendChild(imgLogo);
  containerBtn.appendChild(btnLogin);
  containerBtn.appendChild(btnLoginGoogle);
  containerBtn.appendChild(text);
  containerBtn.appendChild(btnRegister);
  divHome.appendChild(containerBtn);

  btnLoginGoogle.addEventListener('click', () => {
    signInWithGoogle()

      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(token);
        const user = result.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.
        console.log(email);
        const credential = provider.credentialFromError(error);
        // ...
        console.log(credential);
      });

    navigateRoutes('/WallApp');
  });
  return divHome;
};

/* hola ginaaa */
