import { getFirestore } from "firebase/firestore";
//import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrBznc7GwQhXwQpS3qpLk3tCUhIQKnTLg",
  authDomain: "cis371-a2b0d.firebaseapp.com",
  projectId: "cis371-a2b0d",
  storageBucket: "cis371-a2b0d.firebasestorage.app",
  messagingSenderId: "273703238164",
  appId: "1:273703238164:web:6a053b1d21b7de5309c501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
