/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderImage from "./modules/level-page/components/render-image/render-image";
import RenderTimer from "./modules/level-page/components/render-timer";
import { LevelStatesProvider } from "./contexts/level-state-context";
import { TimerProvider } from "./contexts/timer-context";
import PickIndicator from "./modules/pick-indicator/pick-indicator";
import { FirebaseProvider } from "./contexts/firebase-context";
import HomePage from "./modules/home-page/home-page";
import { UserProvider } from "./contexts/user-context";
import Protect from "./modules/protected/protect";
import Test from "./test";
import LevelSelect from "./modules/level-select-page/level-select-page";
import RenderLevel from "./modules/level-page/level-page";

function App()
{
  return (
    <div className="App">
      <UserProvider>
        <FirebaseProvider>
          <BrowserRouter>
            <LevelStatesProvider>
              {/* TODO delete this */}
              {/* <Test /> */}
              <Routes>
                <Route path="/" element={(<HomePage />)} />
                <Route path="/select-level" element={(<Protect><LevelSelect /></Protect>)} />
                <Route
                  path="/game"
                  element={(
                    <Protect>
                      <TimerProvider>
                        <RenderLevel />
                      </TimerProvider>
                    </Protect>
                )}
                />
              </Routes>
            </LevelStatesProvider>
          </BrowserRouter>
        </FirebaseProvider>
      </UserProvider>
    </div>
  );
}

export default App;
