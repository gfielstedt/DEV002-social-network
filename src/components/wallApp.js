/* eslint-disable import/no-cycle */
/* aca va el muro de la app, se desplega el menu y cierre de sesion */
// y contiene la opcion de publicar*/
import { navigateRoutes } from '../main.js';

export const wallApp = () => {
  const root = document.getElementById('root');
  const divroot = document.createElement('div');
  const btnLogout = document.createElement('button');
  const home = document.createElement('div');
  const divHome = document.createElement('section');
  const welcome = document.createElement('nav');
  const titleApp = document.createElement('h2');
  const formWall = document.createElement('form');
  const labelTitle = document.createElement('label');
  const tittle = document.createElement('input');
  const labelPost = document.createElement('label');
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
  labelTitle.className = 'labelTitle';
  tittle.className = 'tittle-post';
  labelPost.className = 'label-post';
  post.className = 'post';
  btnSave.className = 'btnSave';
  divContainer.className = 'divContainer';

  formWall.id = 'task-form';
  tittle.id = 'tittle';
  post.id = 'post';
  btnSave.id = 'btn-save';
  divContainer.id = 'tasks-container';

  tittle.type = 'text';

  tittle.placeholder = 'Title';
  post.placeholder = 'Description';

  labelTitle.for = 'title';
  labelPost.for = 'description';

  post.rows = '3';

  btnLogout.textContent = 'Log out';

  titleApp.textContent = '¿Que quieres compartir hoy?';
  labelTitle.textContent = 'Title:';
  labelPost.textContent = 'Description';
  btnSave.textContent = 'Save';

  /* append */
  root.appendChild(divroot);
  divroot.append(btnLogout);
  home.appendChild(welcome);
  home.appendChild(titleApp);
  home.appendChild(formWall);
  divHome.appendChild(home);
  formWall.appendChild(labelTitle);
  formWall.appendChild(tittle);
  formWall.appendChild(labelPost);
  formWall.appendChild(post);
  formWall.appendChild(btnSave);
  home.appendChild(divContainer);

  return home;

  /* aca va el event submit para el post con firestore */
};
