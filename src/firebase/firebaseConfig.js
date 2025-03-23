import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeaBXdoPOB5Kf1WTCMRI7aw0FpXKWZOUI",
  authDomain: "proyecto-inicial-b9160.firebaseapp.com",
  projectId: "proyecto-inicial-b9160",
  storageBucket: "proyecto-inicial-b9160.firebasestorage.app",
  messagingSenderId: "288094456550",
  appId: "1:288094456550:web:b4368321ffec97a0220927",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
