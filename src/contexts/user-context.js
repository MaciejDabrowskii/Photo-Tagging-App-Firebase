/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext } from "react";

const User = React.createContext();

export function userMethods()
{
  return useContext(User);
}

export function UserProvider({ children })
{
  const [user, setUser] = useState({});

  const methods = { user, setUser };

  return <User.Provider value={methods}>{children}</User.Provider>;
}
