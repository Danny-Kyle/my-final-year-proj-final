import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMDz4_Jz92NgyocjbRVJ8fA7dxcuV1JAc",
  authDomain: "project-vcga.firebaseapp.com",
  projectId: "project-vcga",
  storageBucket: "project-vcga.appspot.com",
  messagingSenderId: "429394114729",
  appId: "1:429394114729:web:e311abae3b8bd248b191b8",
  measurementId: "G-9EF5RDSY96"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
