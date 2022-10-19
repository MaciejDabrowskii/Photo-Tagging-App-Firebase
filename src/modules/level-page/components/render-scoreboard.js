import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../../../firebase/firebase-init";
import { levelStatesMethods } from "../../../contexts/level-state-context";

function RenderHighScore()
{
  const { selectedLevel } = levelStatesMethods();

  const [highscoreData, setHighScoreData] = useState();

  useEffect(() =>
  {
    const unsubscribe = onSnapshot(collection(database, "Game data"), (snapshot) =>
    {
      snapshot.docs.map((doc) =>
      {
        if (doc.id === selectedLevel)
        {
          setHighScoreData(doc.data()
            .highScore.sort((a, b) => a.score - b.score));
        }
      });
    });

    return () =>
    {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar-left">
      <h2 className="sidebar-left-header">TOP 20</h2>
      <div className="high-score-container">
        {highscoreData
          ? (
            highscoreData.map((player, index) =>
            {
              if (index < 19)
              {
                return (
                  <div className="score-container" key={player.score}>
                    <div className="score-value">{player.score}</div>
                    <div className="score-user">
                      <p className="score-name">{player.name}</p>
                    </div>
                  </div>
                );
              }
            })
          )
          : <p>Loading...</p>}
      </div>
    </div>

  );
}

export default RenderHighScore;
