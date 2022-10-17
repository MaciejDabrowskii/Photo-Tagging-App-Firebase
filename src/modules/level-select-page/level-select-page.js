import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { firebaseMethods } from "../../contexts/firebase-context";
import { levelStatesMethods } from "../../contexts/level-state-context";
import Navbar from "../navbar/navbar";
import "./level-select-page.css";

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
    <>
      <Navbar showReturnButton={false} />
      {data
        ? (
          <div className="level-select-container">
            {data.map((document) => (
              <Link
                onClick={() => setSelectedLevel(document.name)}
                to="/game"
                key={document.name}
                className="level-container"
              >
                <div className="level-image-wrapper">
                  <img
                    src={document.imageURL}
                    alt={document.name}
                    className="level-image"
                  />
                </div>
                <p className="level-name">{document.name}</p>
              </Link>
            ))}
          </div>
        )
        : (
          <div className="level-select-spinner-container">
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin-pulse spinner"
            />
          </div>
        )}
    </>
  );
}

export default LevelSelect;
