/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext } from "react";

const CorrectPicksContext = React.createContext();

export function correctPicks()
{
  return useContext(CorrectPicksContext);
}

export function PicksProvider({ children })
{
  const [pickedCorrectly, setPickedCorrectly] = useState([]);

  const addCorrect = (name, coordinates) =>
  {
    if (!pickedCorrectly.some((pick) => pick.name === name))
    {
      return setPickedCorrectly((prevState) => ([...prevState, { name, coordinates }]));
    }
  };

  const methods = { pickedCorrectly, addCorrect };

  return (
    <CorrectPicksContext.Provider value={methods}>
      {children}
    </CorrectPicksContext.Provider>
  );
}
