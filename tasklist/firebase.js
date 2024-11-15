import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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
const analytics = getAnalytics(app);