import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { isGuessed } from "../../../utility functions/utility-functions";
import { getPickedCorrectly } from "../../../contexts/correct-picks-context";

function CharacterIndicator({ character })
{
  const { name } = character;

  const correctPicks = getPickedCorrectly();

  return (
    <div className={isGuessed(name, correctPicks)
      ? "character-indicator-container correct"
      : "character-indicator-container"}
    >
      <p>{name}</p>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="character-indicator-checkmark"
        style={isGuessed(name, correctPicks)
          ? { opacity: "1" }
          : { opacity: "0" }}
      />
    </div>
  );
}

export default CharacterIndicator;
