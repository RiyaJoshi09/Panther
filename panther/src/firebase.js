// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-3VD5mf14TxG1qvcVdmgBAtdLzWt2RU4",
  authDomain: "form-demo-44735.firebaseapp.com",
  projectId: "form-demo-44735",
  storageBucket: "form-demo-44735.firebasestorage.app",
  messagingSenderId: "249218189849",
  appId: "1:249218189849:web:e1351fc4f7b301941ff888"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };