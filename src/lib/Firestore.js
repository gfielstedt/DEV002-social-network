/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, updateDoc,
  arrayUnion, arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const db = getFirestore();

export const savePost = (post, id) => {
  const newPost = { post, idUser: id };
  addDoc(collection(db, 'posteos'), newPost);
  console.log(post);
};

export const getPost = () => getDocs(collection(db, 'posteos')); // getPost obtiene los documentos(getDocs)con la funcion collection, a la que le entregamos
// db (database) con el contenido de los post

export const onGetPost = () => console.log('onGetPost');
export {
  onSnapshot, collection, db,
};

export const deletePost = (id) => deleteDoc(doc(db, 'posteos', id));

export const editPost = (id, newPost) => updateDoc(doc(db, 'posteos', id), newPost);