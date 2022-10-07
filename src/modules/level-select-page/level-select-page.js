import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebaseMethods } from "../../contexts/firebase-context";
import { levelStatesMethods } from "../../contexts/level-state-context";

function LevelSelect()
{
  const { fetchCollectionData } = firebaseMethods();

  const { setSelectedLevel } = levelStatesMethods();

  const [data, setdata] = useState();

  const getData = async () =>
  {
    await fetchCollectionData("Game data")
      .then((res) => setdata(res));
  };

  useEffect(() =>
  {
    getData();
  }, []);

  return (

    <div className="level-select-container">
      {data
        ? (
          <>
            {data.map((document) => (
              <Link
                onClick={() => setSelectedLevel(document.name)}
                to="/game"
                key={document.name}
                className="level-container"
              >
                <img src={document.imageURL} alt={document.name} />
                <h3 className="level-name">{document.name}</h3>
              </Link>
            ))}
          </>
        )
        : <h1>Loading...</h1>}
    </div>
  );
}

export default LevelSelect;
