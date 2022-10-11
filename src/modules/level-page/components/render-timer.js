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
      <FontAwesomeIcon className="timer-icon fa-shake" icon={faClock} />
      <p className="timer-value">
        {`${(timer / 60)
          .toString()
          .split(".")[0]} m`}
        {" "}
        {`${(timer % 60)
          .toString()
          .match(/^-?\d+(?:\.\d{0,1})?/)[0]} s`}
      </p>
    </div>
  );
}

export default RenderTimer;
