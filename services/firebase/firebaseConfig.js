import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUkyjGs7IP9d9fP5BIYnG7x_4xH1-J9Wk",
  authDomain: "watch-store-f1d33.firebaseapp.com",
  projectId: "watch-store-f1d33",
  storageBucket: "watch-store-f1d33.appspot.com",
  messagingSenderId: "931177659745",
  appId: "1:931177659745:web:40e2e774f5feb645a7d920",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
