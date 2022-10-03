/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import ImageSection from "./modules/image-section/image-section";
import { PicksProvider } from "./contexts/correct-picks-context";

function App()
{
  // const [pickedCorrectly, setPickedCorrectly] = useState([]);

  // const addCorrect = (name, coordinates) =>
  // {
  //   if (!pickedCorrectly.some((pick) => pick.name === name))
  //   {
  //     return setPickedCorrectly((prevState) => ([...prevState, { name, coordinates }]));
  //   }
  // };

  return (
  // <div className="App">
  // </div>
    <PicksProvider>
      <ImageSection />
    </PicksProvider>
  );
}

export default App;
