/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";
import { validatePick }
  from "../../../../../utility functions/utility-functions";
import { levelStatesMethods }
  from "../../../../../contexts/level-state-context";

function CharacterMenu(
  {
    characters,
    selectedCoords,
    setSelectorVisible,
  },
)
{
  const { pickedCorrectly, addCorrect } = levelStatesMethods();

  const handleCorrect = (name) =>
  {
    addCorrect(name, selectedCoords);
    setSelectorVisible(false);
  };

  const handleIncorrect = (name) =>
  {
    setSelectorVisible(false);
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
      {characters.map(({ name }) =>
      {
        if (!pickedCorrectly.some((pick) => pick.name === name))
        {
          return (
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
          );
        }
      })}
    </div>
  );
}

export default CharacterMenu;
