/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useState, useEffect } from "react";
import imageZZZ from "../../assets/random.jpg";
import CharacterSelector from "./components/character-selector";
import Marker from "./components/marker";

function ImageSection({ pickedCorrectly, setPickedCorrectly, addCorrect })
{
  const [selectorVisible, setSelectorVisible] = useState(false);

  //   const [selectedCharacter, setSelectedCharacter] = useState("");

  const [selectedCoords, setCselectedCoords] = useState({});

  const gameImage = useRef();

  const characters = [
    {
      name: "Stewie",
      coordinates:
      {
        x: { start: 1210, end: 1280 },
        y: { start: 628, end: 708 },
      },
    },
    {
      name: "Judge Dredd",
      coordinates:
        {
          x: { start: 852, end: 923 },
          y: { start: 1068, end: 1250 },
        },
    },
    {
      name: "Antman",
      coordinates:
        {
          x: { start: 490, end: 555 },
          y: { start: 1236, end: 1308 },
        },
    },
  ];

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

    return setCselectedCoords({ x: px, y: py });
  };

  useEffect(() =>
  {
    const image = gameImage.current;

    image.addEventListener("click", getCoordinates);

    return () =>
    {
      image.removeEventListener("click", getCoordinates);
    };
  }, []);

  return (
    <div className="game-container" style={{ position: "relative" }}>
      <img
        src={imageZZZ}
        ref={gameImage}
        className="game-image"
        alt="bloated with many popculture characters"
        onClick={() => setSelectorVisible((prevState) => !prevState)}
      />
      {selectorVisible && (
        <CharacterSelector
          characters={characters}
          selectedCoords={selectedCoords}
          addCorrect={addCorrect}
          setSelectorVisible={setSelectorVisible}
        />
      )}
      {
        pickedCorrectly.map((pick) => (
          <Marker
            key={pick.name}
            pick={pick}
          />
        ))
      }
    </div>
  );
}

export default ImageSection;
