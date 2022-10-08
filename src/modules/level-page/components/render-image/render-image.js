/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useState, useEffect } from "react";
import CharacterMenu from "./components/character-menu";
import Marker from "./components/marker";
import "./render-image.css";
import { levelStatesMethods } from "../../../../contexts/level-state-context";

function RenderImage({ levelData, setIsPageLoaded })
{
  const { characters, imageURL } = levelData;

  const [selectorVisible, setSelectorVisible] = useState(false);

  const [imageSize, setImageSize] = useState({});

  const [selectedCoords, setCselectedCoords] = useState({});

  const gameImage = useRef();

  const { pickedCorrectly } = levelStatesMethods();

  const getCoordinates = (e) =>
  {
    const bounds = gameImage.current.getBoundingClientRect();

    const { left } = bounds;

    const { top } = bounds;

    const x = e.pageX - left;

    const y = e.pageY - top;

    const cw = gameImage.current.clientWidth;

    const ch = gameImage.current.clientHeight;

    const iw = gameImage.current.naturalWidth;

    const ih = gameImage.current.naturalHeight;

    const px = Math.round((x / cw) * iw);

    const py = Math.round((y / ch) * ih);

    setImageSize({ width: cw, height: ch });

    return setCselectedCoords({ x: px, y: py });
  };

  useEffect(() =>
  {
    const image = gameImage.current;

    window.addEventListener("load", setIsPageLoaded(true));
    image.addEventListener("click", getCoordinates);

    return () =>
    {
      window.addEventListener("load", setIsPageLoaded(true));
      image.removeEventListener("click", getCoordinates);
    };
  }, []);

  return (
    <div className="game-image-container" style={{ position: "relative" }}>
      <img
        src={imageURL}
        ref={gameImage}
        className="game-image"
        alt="bloated with many popculture characters"
        onClick={() => setSelectorVisible((prevState) => !prevState)}
      />
      {selectorVisible && (
        <CharacterMenu
          characters={characters}
          selectedCoords={selectedCoords}
          setSelectorVisible={setSelectorVisible}
        />
      )}
      {
        pickedCorrectly.map((pick) => (
          <Marker
            key={pick.name}
            pick={pick}
            imageSize={imageSize}
          />
        ))
      }
    </div>
  );
}

export default RenderImage;
