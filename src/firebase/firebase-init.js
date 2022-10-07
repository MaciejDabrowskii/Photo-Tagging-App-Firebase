/* eslint-disable import/prefer-default-export */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getStoage } from "firebase/storage";
// import "firebase/database";
// import "firebase/storage";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   setDoc,
//   updateDoc,
//   doc,
//   serverTimestamp,
// } from "firebase/firestore";
// import {
//   getAuth,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAes36UYuKN7iBSre4eQYym280J4cw_WFM",
  authDomain: "where-s-waldo-3af39.firebaseapp.com",
  projectId: "where-s-waldo-3af39",
  storageBucket: "where-s-waldo-3af39.appspot.com",
  messagingSenderId: "265369955077",
  appId: "1:265369955077:web:764c13b62509baa31c256c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
// export const storage = getStoage(app);
