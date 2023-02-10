/* eslint-disable import/no-cycle */
/* aca va el muro de la app, se desplega el menu y cierre de sesion */
// y contiene la opcion de publicar*/
import { navigateRoutes } from '../main.js';
// eslint-disable-next-line object-curly-newline
import { logout, auth } from '../lib/configFirebase.js';
import {
  savePost, getPost, onSnapshot, collection, db, deletePost,
} from '../lib/Firestore.js';

export const wallApp = () => {
  const root = document.getElementById('root');
  root.className = 'root';
  const divButtonLogout = document.createElement('div');
  divButtonLogout.className = 'div-logout';
  const btnLogout = document.createElement('button');
  btnLogout.className = 'btn-logout';

  const home = document.createElement('div');
  home.className = 'div-home';
  /* aqui deberia aparecer el nombre de quien ingreso */
  const welcome = document.createElement('nav');
  welcome.className = 'welcome-text';

  /* titulo de la app */
  const titleApp = document.createElement('header');
  titleApp.className = 'title-app';
  titleApp.textContent = '¡Crea espacios, comparte ideas, cuenta tus experiencias!';

  /* formulario */
  const form = document.createElement('form');
  form.className = 'post-form';
  form.setAttribute('type', 'submit');
  form.id = 'post-form';

  const post = document.createElement('textarea');
  post.className = 'post';
  post.id = 'post';
  post.placeholder = '¿Qué quieres compartir hoy?';

  const btnSave = document.createElement('button');
  btnSave.className = 'btnSave';
  btnSave.id = 'btn-save';
  btnSave.textContent = 'Publicar';

  const postContainer = document.createElement('section');
  postContainer.className = 'postContainer';
  postContainer.id = 'post-container';

  post.rows = '3';

  // btnLogout.textContent = 'Log out';

  /* append */
  root.appendChild(divButtonLogout);
  divButtonLogout.append(btnLogout);
  home.appendChild(welcome);
  home.appendChild(titleApp);
  home.appendChild(form);
  form.appendChild(post);
  form.appendChild(btnSave);
  home.appendChild(postContainer);

  /* boton de cierre de sesión */
  btnLogout.addEventListener('click', () => {
    logout(auth)
      .then(() => {
        // Sign-out successful.
        alert('¿Estas seguro de que quieres cerrar sesion?'); // aca debe ir una ventana modal
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

export const getDataPost = async (event) => { // me permite visualizar el contenido
  const postForm = document.getElementById('post-form'); // contiene el formulario
  const postContainer = document.getElementById('post-container'); // contenedor del form

  onSnapshot(collection(db, 'posteos'), (querySnapshot) => { // me muestra la db de la coleccion posteos de firestore
    let html = '';

    querySnapshot.forEach(doc => {
      const postWall = doc.data();
      html += `
    <div class = 'div-post'> 
      <p class= 'post-cont'>${postWall.post}</p>
      <button class='btn-delete' data-id='${doc.id}'></button>
    </div> `;
      // console.log(doc.data());
    });
    postContainer.innerHTML = html;
    const deleteBtn = postContainer.querySelectorAll('.btn-delete');

    deleteBtn.forEach(btn => {
      deleteBtn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.id);
      });
    });

    postForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // const postSave = document.getElementById('post');
      savePost(post.value);

      postForm.reset();
      // console.log(postSave.value);
    });
  });
  // const querySnapshot = await getPost();
};

// getPost();
