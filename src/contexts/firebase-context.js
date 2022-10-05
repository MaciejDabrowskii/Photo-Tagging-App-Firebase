/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { UserMethods } from "./user-context";

import { app, auth } from "../firebase/firebase-init";

const FirebaseContext = React.createContext();

export function firebaseMethods()
{
  return useContext(FirebaseContext);
}

export function FirebaseProvider({ children })
{
  const { user, setUser } = UserMethods();
  // const [data, setData] = useState();

  const signIn = () =>
  {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  const LogOutGoogle = () => signOut(auth);

  useEffect(() =>
  {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
    {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const methods = { signIn, LogOutGoogle };

  return (
    <FirebaseContext.Provider value={methods}>
      {children}
    </FirebaseContext.Provider>
  );
}
