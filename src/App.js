/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import ImageSection from "./modules/image-section/image-section";
import Timer from "./modules/timer";
import { PicksProvider } from "./contexts/correct-picks-context";
import { TimerProvider } from "./contexts/timer-context";
import PickIndicator from "./modules/pick-indicator/pick-indicator";
import { FirebaseProvider } from "./contexts/firebase-context";

function App()
{
  return (
    <div className="App">
      <FirebaseProvider>
        <PicksProvider>
          <ImageSection />
          <PickIndicator />
        </PicksProvider>
        <TimerProvider>
          <Timer />
        </TimerProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
