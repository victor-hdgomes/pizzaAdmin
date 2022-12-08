import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnDJ7UNV66pw5AYEMQ8NaKQjQxSeBMHAM",
  authDomain: "pizza-a6619.firebaseapp.com",
  projectId: "pizza-a6619",
  storageBucket: "pizza-a6619.appspot.com",
  messagingSenderId: "236847730865",
  appId: "1:236847730865:web:7bfe721236448684b51290"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };