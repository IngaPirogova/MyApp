import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvAe_RGK1_Vonp0HiVLxmOoQK7dO_oHV0",
  authDomain: "myapp-d4b77.firebaseapp.com",
  projectId: "myapp-d4b77",
  storageBucket: "myapp-d4b77.appspot.com",
  messagingSenderId: "1050019270818",
  appId: "1:1050019270818:web:83944ccfb14b6b0be647fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);