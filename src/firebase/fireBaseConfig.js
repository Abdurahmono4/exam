import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYYtwIhzwI70-WJs76Fll4BIE3QVip2R8",
  authDomain: "exam-7ded0.firebaseapp.com",
  projectId: "exam-7ded0",
  storageBucket: "exam-7ded0.appspot.com",
  messagingSenderId: "468000617983",
  appId: "1:468000617983:web:6313c08e59c59e6349e3ca",
  measurementId: "G-E8XSZVC6D3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Auth
const auth = getAuth(app);

export { auth };
