// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const all = import.meta.env;
// console.log(all);

const firebaseConfig = {
  apiKey: all.VITE_apiKey,
  authDomain: all.VITE_authDomain,
  projectId: all.VITE_projectId,
  storageBucket: all.VITE_storageBucket,
  VITE_messagingSenderId: all.VITE_apiKey,
  VITE_appId: all.VITE_apiKey,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);