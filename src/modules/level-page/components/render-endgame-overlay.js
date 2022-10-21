import React from "react";
import { useNavigate } from "react-router-dom";
import { getTimerMethods } from "../../../contexts/timer-context";
import borderDouble
  from "../../../assets/doodle-assets/doodle-border-double.png";

function Overlay({ isOverlayVisible })
{
  const { timer } = getTimerMethods();

  const navigate = useNavigate();

  const handleClick = () => navigate("/select-level");

  return (
    <div className={isOverlayVisible
      ? "overlay-container active"
      : "overlay-container"}
    >
      <div className="overlay-message-container">
        <h1 className="overlay-message-header">Congratulations!</h1>
        <img
          className="overlay-message-separator"
          src={borderDouble}
          alt="separator"
        />
        <div>
          <p className="overlay-message">Your score is:</p>
          <span className="overlay-message-score">{timer}</span>
        </div>
        <button
          type="button"
          className="overlay-message-btn"
          onClick={handleClick}
        >
          OK

        </button>
      </div>
    </div>
  );
}

export default Overlay;
