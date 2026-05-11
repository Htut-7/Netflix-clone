import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaoZxiYZZgX9TCpSF7tYfS1RZuMZ5aOaQ",
  authDomain: "moviehub-6f522.firebaseapp.com",
  projectId: "moviehub-6f522",
  storageBucket: "moviehub-6f522.firebasestorage.app",
  messagingSenderId: "294343885283",
  appId: "1:294343885283:web:3c0cdfe6097df7584a60d6",
  measurementId: "G-MJQEVQGMVD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth}