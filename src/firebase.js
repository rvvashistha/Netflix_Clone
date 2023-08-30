/* const firebaseConfig = {
    apiKey: "AIzaSyBt29wVeRiVr4gj3jZd_O6yeRHwJnKGqTM",
    authDomain: "netflix-clone-25af0.firebaseapp.com",
    projectId: "netflix-clone-25af0",
    storageBucket: "netflix-clone-25af0.appspot.com",
    messagingSenderId: "533455084727",
    appId: "1:533455084727:web:67d15e45a996e277754132"
  }; */
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt29wVeRiVr4gj3jZd_O6yeRHwJnKGqTM",
  authDomain: "netflix-clone-25af0.firebaseapp.com",
  projectId: "netflix-clone-25af0",
  storageBucket: "netflix-clone-25af0.appspot.com",
  messagingSenderId: "533455084727",
  appId: "1:533455084727:web:67d15e45a996e277754132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);