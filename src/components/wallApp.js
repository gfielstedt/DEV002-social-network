/* aca va el muro de la app, se desplega el menu y cierre de sesion */
// y contiene la opcion de publicar*/
import { navigateRoutes } from '../main.js';

export const wallApp = () => {

const wallAppDiv = document.createElement('div');
const rootDiv = document.createElement('rootDiv');
const btnVolverHome = document.createElement('button');

wallAppDiv.appendChild(rootDiv);
rootDiv.append(btnVolverHome);

btnVolverHome.setAtribute('class', 'btnVolverHome');
btnVolverHome.textContent = 'Inicio';

btnVolverHome.addEventListener('click', () => navigateRoutes('/'));

return wallAppDiv;
};