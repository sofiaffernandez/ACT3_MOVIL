import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyAZpKhQ-B2B-vefUAsBNjf31G9eLlAB2og",
  authDomain: "tasklist-900d6.firebaseapp.com",
  projectId: "tasklist-900d6",
  storageBucket: "tasklist-900d6.firebasestorage.app",
  messagingSenderId: "678952245868",
  appId: "1:678952245868:web:1d759a96cef18cff499649",
  measurementId: "G-7C70VML1KB"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app); 


const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => {
    console.log('Autenticado anónimamente');
  })
  .catch((error) => {
    console.error('Error de autenticación:', error);
  });

export { db, auth };
