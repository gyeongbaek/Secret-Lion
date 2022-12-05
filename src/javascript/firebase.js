// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import {
    doc,
    setDoc,
    collection,
    collectionGroup,
    serverTimestamp,
    where,
    orderBy,
    onSnapshot,
    query,
    getDocs,
    getFirestore,
    getDoc,
    updateDoc,
    addDoc,
    deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js';
import {
    onAuthStateChanged,
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';

// https://firebase.google.com/docs/web/setup#available-libraries
// import { addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCQQ4DByDTaobtBjuS35Np6q-td8KLxE5c',
    authDomain: 'secret-lion-73f46.firebaseapp.com',
    projectId: 'secret-lion-73f46',
    storageBucket: 'secret-lion-73f46.appspot.com',
    messagingSenderId: '121470559451',
    appId: '1:121470559451:web:41a43e504cca14788a98fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); // 사용자
export const storage = getStorage(app);
export {
    //firestore
    doc,
    getDoc,
    setDoc,
    collection,
    orderBy,
    onSnapshot,
    query,
    getDocs,
    collectionGroup,
    serverTimestamp,
    where,
    updateDoc,
    addDoc,
    deleteDoc,
    // storage
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    // auth
    onAuthStateChanged,
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword,
};
