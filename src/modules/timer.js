import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import {
  getTimer,
  // useStartTimer,
  // useStopTimer,
} from "../contexts/timer-context";

import { useSignIn } from "../contexts/firebase-context";

function Timer()
{
  const {
    timer, startTimer, stopTimer, resetTimer,
  } = getTimer();

  const signIn = useSignIn();

  const handleSingnIn = async () =>
  {
    try
    {
      await signIn();
    }
    catch (error)
    {
      console.log(error);
    }
  };

  return (
    <div className="timer-container">
      <button type="button" onClick={startTimer}>Start</button>
      <button type="button" onClick={resetTimer}>Stop</button>
      <FontAwesomeIcon className="timer-icon" icon={faClock} />
      <h3 className="timer-value">
        {`${(timer / 60)
          .toString()
          .split(".")[0]} m`}
        {" "}
        {`${(timer % 60)
          .toString()
          .match(/^-?\d+(?:\.\d{0,1})?/)[0]} s`}
      </h3>
    </div>
  );
}

export default Timer;
