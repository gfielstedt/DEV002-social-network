import { home } from './components/home.js';
import { login } from './components/login.js';
import { register } from './components/register.js';
import { wallApp } from './components/wallApp.js';

/*contenido HTML*/
const root = document.getElementById('root');

const routes = {
'/': home,
'/Login': login,
'/Register': register,
'/WallApp': wallApp,

};

export const navigateRoutes = (pathname) => {
window.history.pushState (/* to load new HTML pages */
{}/*state -objeto de entrada del historial- */
pathname, /*title*/ /*Error de análisis: nombre de ruta de token inesperado*/
window.location.origin + pathname, /*url*/
);
while (root.firstChild){ /* defino que routes no se repita al clickear btn, y solo muestre el contenido clickeado*/
root.removeChild(root.firstChild);
}
root.appendChild(routes[pathname]());

};

const component = routes[window.location.pathname] () /*variable que contiene el pathname -nombre de la ruta-*/
console.log(component)
root.appendChild(component); /*Me muestra y su contenido*/
