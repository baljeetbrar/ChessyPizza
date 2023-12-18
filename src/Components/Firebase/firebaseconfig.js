import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClvlLvWaV55MnRhCJ6EdhAfPAhKTQq_RY",
  authDomain: "chessypizzatester.firebaseapp.com",
  projectId: "chessypizzatester",
  storageBucket: "chessypizzatester.appspot.com",
  messagingSenderId: "118814626364",
  appId: "1:118814626364:web:6a518268ba50aa0fbe2939",
  measurementId: "G-J0TFQDF7BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export  {auth, db};

