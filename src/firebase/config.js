import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCuFni6TejuJFMIzEHFrnvQ4kKW4fou6PU",
  authDomain: "regal-oasis-416009.firebaseapp.com",
  projectId: "regal-oasis-416009",
  storageBucket: "regal-oasis-416009.appspot.com",
  messagingSenderId: "117407725287",
  appId: "1:117407725287:web:70bd713a1f34092e345442",
  measurementId: "G-JZGJV2W9GN",
};

const app = initializeApp(firebaseConfig);

// firebase 'deki auth yapısının refaransını react uygulamasına alma

export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//firebasedeki firestore veritabanının refereansını al
export const db = getFirestore(app);
