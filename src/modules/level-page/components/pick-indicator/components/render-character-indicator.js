import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { isGuessed } from "../../../../../utility functions/utility-functions";
import { levelStatesMethods }
  from "../../../../../contexts/level-state-context";

function CharacterIndicator({ character })
{
  const { name } = character;

  const { pickedCorrectly } = levelStatesMethods();

  return (
    <div className={isGuessed(name, pickedCorrectly)
      ? "character-indicator-container correct"
      : "character-indicator-container"}
    >
      <p>{name}</p>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="character-indicator-checkmark"
        style={isGuessed(name, pickedCorrectly)
          ? { opacity: "1" }
          : { opacity: "0" }}
      />
    </div>
  );
}

export default CharacterIndicator;
