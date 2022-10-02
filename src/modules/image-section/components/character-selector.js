import React from "react";
import { validatePick } from "../../../utility functions/utility-functions";

function CharacterSelector(
  {
    characters,
    selectedCoords,
    addCorrect,
    setSelectorVisible,
  },
)
{
  const handleCorrect = (name) =>
  {
    addCorrect(name, selectedCoords);
    setSelectorVisible(false);
  };

  const handleIncorrect = (name) =>
  {
    setSelectorVisible(false);
    console.log("wrong!!!");
  };

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
                ? handleCorrect(name)
                : handleIncorrect(name)
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
