/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInAnonymously,
} from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  get,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import { userMethods } from "./user-context";

import { app, auth, database } from "../firebase/firebase-init";

const FirebaseContext = React.createContext();

export function firebaseMethods()
{
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children })
{
  const { user, setUser } = userMethods();

  const signIn = () =>
  {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  const signInAnon = () => signInAnonymously(auth);

  const LogOut = () => signOut(auth);

  const addData = async (object, collectionName, documentName) =>
  {
    await setDoc(doc(database, collectionName, documentName), object);
  };

  const fetchCollectionData = async (collectionName) =>
  {
    const querySnapshot = await getDocs(collection(database, collectionName));

    const data = [];

    querySnapshot.forEach((document) =>
    {
      data.push(document.data());
    });

    return data;
  };

  const updateHighscore = async (collectionName, documentName, data) =>
  {
    const levelRef = doc(database, collectionName, documentName);

    await updateDoc(levelRef, {
      highScore: arrayUnion(data),
    });
  };

  const fetchSelectedLevelData = async (collectionName, selectedLevel) =>
  {
    const docRef = doc(database, collectionName, selectedLevel);

    const docSnap = await getDoc(docRef);

    return docSnap.data();
  };

  useEffect(() =>
  {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
    {
      if (currentUser !== null && currentUser.displayName === null)
      {
        return setUser(
          { ...currentUser, displayName: "Anonymous" },
        );
      }

      return setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const methods = {
    signIn,
    LogOut,
    fetchCollectionData,
    addData,
    fetchSelectedLevelData,
    updateHighscore,
    signInAnon,
  };

  return (
    <FirebaseContext.Provider value={methods}>
      {children}
    </FirebaseContext.Provider>
  );
}
