/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext } from "react";

const CorrectPicksContext = React.createContext();

// const SetCorrectPicksContext = React.createContext();

export function correctPicks()
{
  return useContext(CorrectPicksContext);
}

// export function useSetCorrectPicks()
// {
//   return useContext(SetCorrectPicksContext);
// }

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
      {/* <SetCorrectPicksContext.Provider value={addCorrect}> */}
      {children}
      {/* </SetCorrectPicksContext.Provider> */}
    </CorrectPicksContext.Provider>
  );
}
