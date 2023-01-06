

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWrKrjqgpTqbqISnzzWsD2Owq8jedBV2g",
    authDomain: "food-app-e1293.firebaseapp.com",
    projectId: "food-app-e1293",
    storageBucket: "food-app-e1293.appspot.com",
    messagingSenderId: "890846434120",
    appId: "1:890846434120:web:3168353d038475aea4997d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)


export { auth, db, storage }
