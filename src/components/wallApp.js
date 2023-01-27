/* aca va el muro de la app, se desplega el menu y cierre de sesion */
// y contiene la opcion de publicar*/
import { navigateRoutes } from '../main.js';

export const wallApp = () => {
  const wallAppDiv = document.createElement('div');
  const btnVolverHome = document.createElement('button');

  /* append */
  wallAppDiv.appendChild(btnVolverHome);

  /* atribute */
  btnVolverHome.setAttribute('class', 'btnVolverHome');
  btnVolverHome.textContent = 'Inicio';

  /* event */
  btnVolverHome.addEventListener('click', () => navigateRoutes('/'));

  return wallAppDiv;
};
