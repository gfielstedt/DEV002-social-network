/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
import {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const db = getFirestore();

export const savePost = (post) => {
  addDoc(collection(db, 'posteos'), { post });
  console.log(post);
};

export const getPost = () => getDocs(collection(db, 'post'));
