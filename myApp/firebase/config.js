import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAZ8doHDn6qTGRuoSvrmswYV8n4RzwUyJU",
  authDomain: "test-4e878.firebaseapp.com",
  projectId: "test-4e878",
  storageBucket: "test-4e878.appspot.com",
  messagingSenderId: "398279403515",
  appId: "1:398279403515:web:a2845a5281775b92d60d5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const uploadComment = async (postId, content) => {
  try {
    const commentsColection = collection(db, `posts/${postId}/comments`);
    const commentRef = await addDoc(commentsColection, content);

    return commentRef.id;
  } catch (error) {
    const newError = error;
    console.log(newError.message);
  }
};
