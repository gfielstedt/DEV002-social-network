/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need (cdn)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';

import { firebaseConfig } from './firebaseData.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

export const logar = (email, password) => signInWithEmailAndPassword(auth, email, password);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      console.log(token);
      const user = result.user;
      // ...
      console.log(user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      // The email of the user's account used.
      console.log(errorMessage);
      const email = error.customData.email;
      // The AuthCredential type that was used.
      console.log(email);
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(credential);
    });
};
