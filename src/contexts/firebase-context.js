/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { app, auth } from "../firebase/firebase-init";

const SignInContext = React.createContext();

export function useSignIn()
{
  return useContext(SignInContext);
}

export function FirebaseProvider({ children })
{
  const [data, setData] = useState();

  const signIn = () =>
  {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
  };

  return (
    <SignInContext.Provider value={signIn}>
      {children}
    </SignInContext.Provider>
  );
}
