/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable max-len */
import React, { useState, useContext } from "react";

const Timer = React.createContext();

// const StartTimer = React.createContext();

// const StopTimer = React.createContext();

// const ResetTimer = React.createContext();

export function getTimer()
{
  return useContext(Timer);
}

// export function useStartTimer()
// {
//   return useContext(StartTimer);
// }

// export function useStopTimer()
// {
//   return useContext(StopTimer);
// }

export function TimerProvider({ children })
{
  const [timer, setTimer] = useState(0);

  const [intervalId, setIntervalId] = useState(0);

  const startTimer = () =>
  {
    const newIntervalId = setInterval(() => setTimer((prevState) => prevState + 0.2), 200);

    setIntervalId(newIntervalId);
  };

  const stopTimer = () => clearInterval(intervalId);

  const resetTimer = () => setTimer(0);

  const methods = {
    timer, startTimer, stopTimer, resetTimer,
  };

  return (
    <Timer.Provider value={methods}>
      {/* <StartTimer.Provider value={startTimer}>
        <StopTimer.Provider value={stopTimer}>
          <ResetTimer.Provider value={resetTimer}> */}
      {children}
      {/* </ResetTimer.Provider>
        </StopTimer.Provider>
      </StartTimer.Provider> */}
    </Timer.Provider>
  );
}
