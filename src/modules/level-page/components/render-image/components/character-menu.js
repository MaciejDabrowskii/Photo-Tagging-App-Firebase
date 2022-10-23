/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect, useRef, useState } from "react";
import { validatePick } from "../../../../../utility functions/utility-functions";
import { levelStatesMethods } from "../../../../../contexts/level-state-context";

function CharacterMenu({
  characters,
  selectedCoords,
  setSelectorVisible,
  imageRatio,
  imageHeight,
  showToastErrorMessage,
  showToastSucessMessage,
})
{
  const { pickedCorrectly, addCorrect } = levelStatesMethods();

  const selectorDiv = useRef();

  const [selectorDivSize, setSelectorDivSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() =>
  {
    const selectorDivHeight = selectorDiv.current.offsetHeight;

    const selectorDivWidth = selectorDiv.current.offsetWidth;

    setSelectorDivSize({ width: selectorDivWidth, height: selectorDivHeight });
  }, []);

  const isOverflowing = () => selectedCoords.y * imageRatio + selectorDivSize.height > imageHeight;

  const handleCorrect = (name) =>
  {
    addCorrect(name, selectedCoords);
    setSelectorVisible(false);
    showToastSucessMessage();
  };

  const handleIncorrect = () =>
  {
    showToastErrorMessage();
    setSelectorVisible(false);
  };

  return (
    <div
      className="character-selector-container"
      ref={selectorDiv}
      style={{
        left: `${selectedCoords.x * imageRatio}px`,
        top: isOverflowing()
          ? `${selectedCoords.y * imageRatio - selectorDivSize.height}px`
          : `${selectedCoords.y * imageRatio}px`,
      }}
    >
      {characters.map(({ name }) =>
      {
        if (!pickedCorrectly.some((pick) => pick.name === name))
        {
          return (
            <div className="character-container" key={name}>
              <button
                type="button"
                onClick={() => (validatePick(selectedCoords, name, characters)
                  ? handleCorrect(name)
                  : handleIncorrect(name))}
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
