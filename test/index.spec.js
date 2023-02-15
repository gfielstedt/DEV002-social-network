/* importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
}); */
import {
  auth,
  login, // signInWithEmailAndPassword,
  logout, // signOut,
} from '../src/lib/configFirebase.js';

jest.mock('..src/lib/configFirebase,js', () => ({
  auth: jest.fn(() => ({
    auth: 'auth',
  })),
  registerUser: jest.fn((auth, email, password) => {
    if (!email || !password) {
      throw new Error('Campo de correo o contraseña vacíos');
    }
    if (email === 'anapere@gmail.com') {
      throw new Error('Correo ingresado inválido');
    }
    if (email === 'anaperez@gmail.com') {
      return 'Correo ingresado válido';

      return Promise.resolve();
    }
  }),
}));
// igualar
login;
jest.fn((auth, email, password) => {
  if (!email || !password) {
    throw new Error('Campo de correo o contraseña vacíos');
  }
  if (email === 'anapere@gmail.com') {
    throw new Error('Correo ingresado inválido');
  }
  if (email === 'anaperez@gmail.com') {
    return 'Correo ingresado válido';
  }
  return Promise.resolve();
});

logout;
jest.fn((auth) => {
  if (!auth) return Promise.reject('no hay usuario logueado');
}),
updateProfile;
jest.fn((auth, emailUser) => {
  if (!auth === !emailUser) {
    return Promise.resolve();
  }
});

describe('Test createUserWithEmailAndPassword'), () => {
  // llama a
  it('signInWithEmailAndPassword'), async () => {
    await signInWithEmailAndPassword(auth, email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  };
};

it('Retorna error campo vacío'), async () => {
  try {
    await signUpWithPass(auth, ' ', password);
  } catch (error) {
    expect(error.code).toBe('Campo de correo o contraseña vacíos');
  }
};

describe('Test signInWithEmailAndPassword'), () => {
  // llama a
  it('signInWithPopup debe ser función', () => {
    expect(typeof signInWithPopup).toBe('function');
  });
  it('debe llamar a signInWithPopup', async () => {
    await signInWithPopup(auth, provider);
    expect(signInWithPopup).toHaveBeenCalled();
  });
};
