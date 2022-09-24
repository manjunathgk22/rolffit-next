import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgvldhn5bISv7fR2_LViemceRC0U14hoA",
  authDomain: "rolffit-web.firebaseapp.com",
  projectId: "rolffit-web",
  storageBucket: "rolffit-web.appspot.com",
  messagingSenderId: "57766880725",
  appId: "1:57766880725:web:4bc490b4f2b024c812c95c",
  measurementId: "G-38QH77R2NN",
};
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
