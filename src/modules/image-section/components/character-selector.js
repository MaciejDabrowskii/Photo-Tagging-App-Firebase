import React from "react";
import { validatePick } from "../../../utility functions/utility-functions";

function CharacterSelector(
  {
    characters,
    selectedCoords,
    setSelectedCharacter,
    addCorrect,
    selectedCharacter,
  },
)
{
  return (
    <div
      className="character-selector-container"
      style={{
        position: "absolute",
        left: `${selectedCoords.x}px`,
        top: `${selectedCoords.y}px`,
      }}
    >
      {characters.map(({ name }) => (
        <div
          className="character-container"
          key={name}
        >
          <button
            type="button"
            onClick={() => (
              validatePick(selectedCoords, name, characters)
                ? addCorrect(name, selectedCoords)
                : console.log(selectedCharacter)
            )}
          >
            {name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CharacterSelector;
