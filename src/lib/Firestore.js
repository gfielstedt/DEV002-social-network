/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot, doc, deleteDoc, updateDoc,
  arrayUnion, arrayRemove, getDoc, Timestamp, query, orderBy,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

const db = getFirestore();

export const savePost = (post, id, currentLike, userLike) => {
  const newPost = {
    post, idUser: id, currentLike, userLike, date: Timestamp.fromDate(new Date()),
  };
  addDoc(collection(db, 'posteos'), newPost);
  console.log(post);
};
export const orderPost = query(collection(db, 'posteos'), orderBy('date', 'desc'));

export const getPost = () => getDocs(collection(db, 'posteos')); // getPost obtiene los documentos(getDocs)con la funcion collection, a la que le entregamos
// db (database) con el contenido de los post
export const onGetPost = (callback) => onSnapshot(orderPost, callback);

export const deletePost = (id) => deleteDoc(doc(db, 'posteos', id));

export const editPost = (id, newPost) => updateDoc(doc(db, 'posteos', id), newPost);

export const getPostForId = (id) => getDoc(doc(db, 'posteos', id));
export const like = (id, likes, userLike) => updateDoc(doc(db, 'posteos', id), { currentLike: likes, userLike: arrayUnion(userLike) });
export const dislike = (id, likes, userLike) => updateDoc(doc(db, 'posteos', id), { currentLike: likes, userLike: arrayRemove(userLike) });

export { collection, db };
