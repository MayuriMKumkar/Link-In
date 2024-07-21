// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAF2fUkOPOImxIfWfklxIbz4zjcyPy1jKk",
  authDomain: "online-job-portal-2421d.firebaseapp.com",
  projectId: "online-job-portal-2421d",
  storageBucket: "online-job-portal-2421d.appspot.com",
  messagingSenderId: "402536121056",
  appId: "1:402536121056:web:872bd508d82eaa82df0685",
  measurementId: "G-XKP16W13HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);

export {db};

