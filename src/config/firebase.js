import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAp1rZmj4Tgkwktjvwy9_NWbLgMzbDlsS0",
  authDomain: "clone-fb28c.firebaseapp.com",
  projectId: "clone-fb28c",
  storageBucket: "clone-fb28c.appspot.com",
  messagingSenderId: "97978728872",
  appId: "1:97978728872:web:5be70b833d486258805d9d",
  measurementId: "G-6B9LRHGDC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app);
