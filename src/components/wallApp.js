/* eslint-disable import/no-cycle */
/* aca va el muro de la app, se desplega el menu y cierre de sesion */
// y contiene la opcion de publicar*/
import { navigateRoutes } from '../main.js';
import {
  savePost,
  getPost,
  pruebas,
  logout,
  auth,
} from '../lib/configFirebase.js';

export const wallApp = () => {
  const root = document.getElementById('root');
  const divroot = document.createElement('div');
  const btnLogout = document.createElement('button');
  const home = document.createElement('div');
  const divHome = document.createElement('section');
  /* aqui deberia aparecer el nombre de quien ingreso */
  const welcome = document.createElement('nav');
  const titleApp = document.createElement('h2');
  const formWall = document.createElement('form');
  const post = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const divContainer = document.createElement('div');

  divroot.className = 'div-root';
  btnLogout.className = 'btn-logout';
  home.className = 'div-home';
  divHome.className = 'div-home-container';
  welcome.className = 'welcome-text';
  titleApp.className = 'title-app';
  formWall.className = 'task-form';
  post.className = 'post';
  btnSave.className = 'btnSave';
  divContainer.className = 'divContainer';

  formWall.id = 'task-form';
  post.id = 'post';
  btnSave.id = 'btn-save';
  divContainer.id = 'tasks-container';
  post.placeholder = '¿Qué quieres compartir hoy?';

  post.rows = '3';

  btnLogout.textContent = 'Log out';
  titleApp.textContent = 'Crea espacios, comparte ideas, cuenta tus experiencias!';
  btnSave.textContent = 'Save';

  /* append */
  root.appendChild(divroot);
  divroot.append(btnLogout);
  home.appendChild(welcome);
  home.appendChild(titleApp);
  home.appendChild(formWall);
  divHome.appendChild(home);
  formWall.appendChild(post);
  formWall.appendChild(btnSave);
  home.appendChild(divContainer);

  /* junto al btn de save esta la creación de post */

  btnSave.addEventListener('click', async (event) => {
    event.preventDefault();
    console.log(post.value);

    const querySnapshot = await getPost();
    console.log(querySnapshot.docs);

    pruebas();

    // Add a new document in collection "cities"
    savePost({
      text: post.value,
      date: new Date(), // cambiar por recomendación de mauro notas en block Giana
    });

    // limpia el text area
    formWall.reset();

    // listar datos desde firestore
  });

  /* aqui esta el btn cierre de sesión */

  btnLogout.addEventListener('click', () => {
    logout(auth)
      .then(() => {
        // Sign-out successful.
        console.log('Sign-out successful');
        navigateRoutes('/');
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  });
  return home;
};
