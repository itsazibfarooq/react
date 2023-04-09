import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMpf4eqoYJ-VXG3Gx6xWTMz-W02xJNYZg",
  authDomain: "chat-app-aa457.firebaseapp.com",
  projectId: "chat-app-aa457",
  storageBucket: "chat-app-aa457.appspot.com",
  messagingSenderId: "755749858637",
  appId: "1:755749858637:web:a48c0efcbae2cb88cfdb04",
  measurementId: "G-KD9VG64QGF"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);

