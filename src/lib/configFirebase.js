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
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { firebaseConfig } from './firebaseData.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

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
export {
  auth,
  db,
  addDoc,
  collection,
};

export const savePost = (post) => addDoc(collection(db, 'post'), post);
export const getPost = () => getDocs(collection(db, 'post'));

export const pruebas = () => {
  const q = query(collection(db, 'post'));
  const prueba = onSnapshot(q, (querySnapshot) => {
    const post = [];
    querySnapshot.forEach((doc) => {
      post.push(doc.data());
    });
    console.log(post);
  });
};
