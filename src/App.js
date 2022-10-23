/* eslint-disable consistent-return */
/* eslint-disable max-len */
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LevelStatesProvider } from "./contexts/level-state-context";
import { TimerProvider } from "./contexts/timer-context";
import { FirebaseProvider } from "./contexts/firebase-context";
import HomePage from "./modules/home-page/home-page";
import { UserProvider } from "./contexts/user-context";
import Protect from "./modules/protected/protect";
import LevelSelect from "./modules/level-select-page/level-select-page";
import RenderLevel from "./modules/level-page/level-page";

function App()
{
  return (
    <div className="App">
      <UserProvider>
        <FirebaseProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <LevelStatesProvider>
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
