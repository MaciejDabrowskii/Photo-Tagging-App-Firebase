import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { getTimerMethods } from "../../../contexts/timer-context";

function RenderTimer()
{
  const {
    timer, startTimer, stopTimer,
  } = getTimerMethods();

  return (
    <div className="timer-container">
      <button type="button" onClick={startTimer}>Start</button>
      <button type="button" onClick={stopTimer}>Stop</button>
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

export default RenderTimer;
