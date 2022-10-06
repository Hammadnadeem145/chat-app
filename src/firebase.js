// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ7gUeNdt58WQM2gXco46o5OeuOHiwQ6M",
  authDomain: "chat-app-7e930.firebaseapp.com",
  projectId: "chat-app-7e930",
  storageBucket: "chat-app-7e930.appspot.com",
  messagingSenderId: "443676083417",
  appId: "1:443676083417:web:6415fddaf57ca12e3aaac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)