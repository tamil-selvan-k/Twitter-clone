import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBKx2KIzBlCXn6uSyUIvAnikc2qIDYMgM",
  authDomain: "twitter-clone-react-835b5.firebaseapp.com",
  projectId: "twitter-clone-react-835b5",
  storageBucket: "twitter-clone-react-835b5.firebasestorage.app",
  messagingSenderId: "871011433421",
  appId: "1:871011433421:web:2535f65849caaf39a6e284",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;