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
    addCorrect(name, selectedCoords.clientSize);
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
        left: `${selectedCoords.clientSize.x}px`,
        top: `${selectedCoords.clientSize.y}px`,
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
                  validatePick(selectedCoords.orginalSize, name, characters)
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
