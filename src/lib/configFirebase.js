/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need (cdn)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import { firebaseConfig } from './firebaseData.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const logout = () => signOut(auth);

export { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword };
