import React from "react";
import CharacterIndicator from "./components/render-character-indicator";
import "./pick-indicator.css";

function PickIndicator()
{
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

  return (
    <div className="indicator-container">
      {characters.map((character) => (
        <CharacterIndicator
          key={character.name}
          character={character}
        />
      ))}
    </div>
  );
}

export default PickIndicator;
