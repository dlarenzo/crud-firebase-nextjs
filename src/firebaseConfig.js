// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEykjhuvAHyzta_A1BHlTvhukIKE4NdAQ",
  authDomain: "fir-tutorial-5d424.firebaseapp.com",
  projectId: "fir-tutorial-5d424",
  storageBucket: "fir-tutorial-5d424.firebasestorage.app",
  messagingSenderId: "248252798248",
  appId: "1:248252798248:web:2aecd11bf3dfee1c59ac1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect to Database
export const db = getFirestore(app);
