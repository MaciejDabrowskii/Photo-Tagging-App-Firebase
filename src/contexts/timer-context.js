/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext } from "react";

const Timer = React.createContext();

const StartTimer = React.createContext();

const StopTimer = React.createContext();

export function getTimer()
{
  return useContext(Timer);
}

export function useStartTimer()
{
  return useContext(StartTimer);
}

export function useStopTimer()
{
  return useContext(StopTimer);
}

export function PicksProvider({ children })
{
  const [timer, setTimer] = useState(0);

  const startTimer = () =>
  {
    setInterval(() => setTimer((prevState) => prevState + 0.2), 200);
  };

  const stopTimer = () => clearInterval(startTimer);

  return (
    <Timer.Provider value={timer}>
      <StartTimer.Provider value={startTimer}>
        <StopTimer.Provider value={stopTimer}>
          {children}
        </StopTimer.Provider>
      </StartTimer.Provider>
    </Timer.Provider>
  );
}
