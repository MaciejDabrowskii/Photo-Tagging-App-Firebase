/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageSection from "./modules/image-section/image-section";
import Timer from "./modules/timer";
import { PicksProvider } from "./contexts/correct-picks-context";
import { TimerProvider } from "./contexts/timer-context";
import PickIndicator from "./modules/pick-indicator/pick-indicator";
import { FirebaseProvider } from "./contexts/firebase-context";
import HomePage from "./modules/homePage/home-page";
import { UserProvider } from "./contexts/user-context";
import Protect from "./modules/protected/protect";

function App()
{
  return (
    <div className="App">
      <UserProvider>
        <FirebaseProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/game"
                element={(
                  <Protect>
                    <PicksProvider>
                      <ImageSection />
                      <PickIndicator />
                    </PicksProvider>
                    <TimerProvider>
                      <Timer />
                    </TimerProvider>
                  </Protect>

                )}
              />
              <Route path="/" element={(<HomePage />)} />
            </Routes>
          </BrowserRouter>
        </FirebaseProvider>
      </UserProvider>
    </div>
  );
}

export default App;
