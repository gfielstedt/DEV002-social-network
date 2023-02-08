/* eslint-disable import/no-cycle */
/* aca va el muro de la app, se desplega el menu y cierre de sesion */
// y contiene la opcion de publicar*/
import { navigateRoutes } from '../main.js';
// eslint-disable-next-line object-curly-newline
import { logout, auth } from '../lib/configFirebase.js';
import {
  savePost, getPost, onSnapshot, collection, db,
} from '../lib/Firestore.js';

export const wallApp = () => {
  const root = document.getElementById('root');
  const divroot = document.createElement('div');
  const btnLogout = document.createElement('button');
  const home = document.createElement('div');
  const divHome = document.createElement('section');
  /* aqui deberia aparecer el nombre de quien ingreso */
  const welcome = document.createElement('nav');
  const titleApp = document.createElement('h2');
  const form = document.createElement('form');
  const post = document.createElement('textarea');
  const btnSave = document.createElement('button');
  const divContainer = document.createElement('div');

  divroot.className = 'div-root';
  root.className = 'root';
  btnLogout.className = 'btn-logout';
  home.className = 'div-home';
  divHome.className = 'div-home-container';
  welcome.className = 'welcome-text';
  titleApp.className = 'title-app';
  form.className = 'post-form';
  form.setAttribute('type', 'submit');
  post.className = 'post';
  btnSave.className = 'btnSave';
  divContainer.className = 'divContainer';

  form.id = 'post-form';
  post.id = 'post';
  btnSave.id = 'btn-save';
  divContainer.id = 'tasks-container';
  post.placeholder = '¿Qué quieres compartir hoy?';

  post.rows = '3';

  // btnLogout.textContent = 'Log out';
  titleApp.textContent = 'Crea espacios, comparte ideas, cuenta tus experiencias!';
  btnSave.textContent = 'Save';

  /* append */
  root.appendChild(divroot);
  divroot.append(btnLogout);
  home.appendChild(welcome);
  home.appendChild(titleApp);
  home.appendChild(form);
  divHome.appendChild(home);
  form.appendChild(post);
  form.appendChild(btnSave);
  home.appendChild(divContainer);

  /* aqui esta el btn cierre de sesión */

  btnLogout.addEventListener('click', () => {
    logout(auth)
      .then(() => {
        // Sign-out successful.
        alert('Estas seguro de que quieres cerrar sesion?'); // aca debe ir una ventana modal
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
/* junto al btn de save esta la creación de post */

window.addEventListener('click', async (event) => { // me permite visualizar el contenido
  const postForm = document.getElementById('post-form'); // contiene el formulario
  const divContainer = document.getElementById('tasks-container'); // contenedor del form

  onSnapshot(collection(db, 'posteos'), (querySnapshot) => {
    let html = '';

    querySnapshot.forEach(doc => {
      const postWall = doc.data();
      html += `
    <div> 
      <h3>${postWall.post}</h3>
    </div> `;
      // console.log(doc.data());
    });
    divContainer.innerHTML = html;
    postForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // const postSave = document.getElementById('post');
      savePost(post.value);

      postForm.reset();
      // console.log(postSave.value);
    });
  });
  // const querySnapshot = await getPost();
});

getPost();
