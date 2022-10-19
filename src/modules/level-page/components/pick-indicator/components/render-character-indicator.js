import React from "react";
import { isGuessed } from "../../../../../utility functions/utility-functions";
import { levelStatesMethods }
  from "../../../../../contexts/level-state-context";
import checkmark from "../../../../../assets/doodle-assets/checkmarkV.png";

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
      <img
        src={checkmark}
        alt="checked"
        className="character-indicator-checkmark"
        style={isGuessed(name, pickedCorrectly)
          ? { opacity: "1" }
          : { opacity: "0" }}
      />
    </div>
  );
}

export default CharacterIndicator;
