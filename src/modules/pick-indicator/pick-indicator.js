import React from "react";
import CharacterIndicator from "./components/render-character-indicator";
import "./pick-indicator.css";

function PickIndicator({ levelData })
{
  const { characters } = levelData;

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
