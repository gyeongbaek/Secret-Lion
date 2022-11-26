// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
export const auth = getAuth(app);
export const storage = getStorage(app);
