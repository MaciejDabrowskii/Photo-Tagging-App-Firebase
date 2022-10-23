import React from "react";
import { getTimerMethods } from "../../../contexts/timer-context";
import clockIcon from "../../../assets/clock.png";

function RenderTimer({ isOverlayVisible })
{
  const { timer } = getTimerMethods();

  return (
    <div className="timer-container">
      <img
        className={
          isOverlayVisible ? "timer-image" : "timer-image jello-horizontal"
        }
        alt="clock"
        src={clockIcon}
      />
      <p className="timer-value">
        {`${(timer / 60).toString()
          .split(".")[0]} m`}
        {" "}
        {`${(timer % 60).toString()
          .match(/^-?\d+(?:\.\d{0,1})?/)[0]} s`}
      </p>
    </div>
  );
}

export default RenderTimer;
