import {
  auth,
  registerUser,
  createUserWithEmailAndPassword,
} from '../src/lib/configFirebase.js';

jest.mock('..//src/lib/configFirebase.js', () => ({
  auth: jest.fn(() => ({
    auth: 'auth',
  })),
  createUserWithEmailAndPassword: jest.fn((email, password) => {
    if (!email || !password) {
      throw new Error('Llenar los campos vacíos');
    }
    if (email === 'anapere@gmail.com') {
      throw new Error('Error correo');
    }
    return Promise.resolve();
  }),
}));
describe('Test de crear usuario con correo y contraseña', () => {
  const email = 'anaperez@gmailcom';
  const password = '123456';
  it('Debe llamar a resgisterUser', async () => {
    await registerUser(auth, email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
  it('Debe retornar error de correo inválido', async () => {
    try {
      await registerUser('anaperez@gmail.com', '123456');
    } catch (error) {
      expect(error.code).toBe('Correo ingresado inválido');
    }
  });
});
