import { getFirestore } from "firebase/firestore";
//import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT7EfKJy2K37QdcZOdHQOAXfeiOf2g0Fc",
  authDomain: "cis371-3597a.firebaseapp.com",
  projectId: "cis371-3597a",
  storageBucket: "cis371-3597a.firebasestorage.app",
  messagingSenderId: "548276375636",
  appId: "1:548276375636:web:6194f38739d6084c945dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
