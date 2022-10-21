/* eslint-disable max-len */
/* eslint-disable consistent-return */
import "./level-page.css";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { levelStatesMethods } from "../../contexts/level-state-context";
import { firebaseMethods } from "../../contexts/firebase-context";
import { getTimerMethods } from "../../contexts/timer-context";
import { userMethods } from "../../contexts/user-context";
import RenderHighScore from "./components/render-scoreboard";
import RenderImage from "./components/render-image/render-image";
import PickIndicator from "./components/pick-indicator/pick-indicator";
import RenderTimer from "./components/render-timer";
import Navbar from "../navbar/navbar";
import Overlay from "./components/render-endgame-overlay";

function RenderLevel()
{
  const { selectedLevel, pickedCorrectly } = levelStatesMethods();

  const { fetchSelectedLevelData, updateHighscore } = firebaseMethods();

  const {
    startTimer, timer, stopTimer,
  } = getTimerMethods();

  const { user } = userMethods();

  const [levelData, setLevelData] = useState(null);

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const getData = async () =>
  {
    await fetchSelectedLevelData("Game data", selectedLevel)
      .then((res) => setLevelData(res))
      .catch((err) => console.log(err));
  };

  const endGame = async () =>
  {
    stopTimer();

    const { displayName, photoURL } = user;

    const highscoreData = {
      avatar: photoURL,
      name: displayName,
      score: timer,
    };

    setIsOverlayVisible(true);
    await updateHighscore("Game data", selectedLevel, highscoreData)
      .catch((err) => console.log(err));
  };

  useEffect(() =>
  {
    getData();
  }, []);

  useEffect(() =>
  {
    if (levelData !== null && (pickedCorrectly.length === levelData.characters.length)) endGame();
  }, [pickedCorrectly]);

  const showToastErrorMessage = () => toast.error("Wrong answer!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const showToastSucessMessage = () => toast.success("Correct!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  useEffect(() =>
  {
    if (isPageLoaded) return startTimer();
  }, [isPageLoaded]);

  return (
    <div className="level-page">
      {
        levelData
          ? (
            <div className="level-page-container">
              <RenderHighScore />
              <RenderImage
                levelData={levelData}
                setIsPageLoaded={setIsPageLoaded}
                showToastErrorMessage={showToastErrorMessage}
                showToastSucessMessage={showToastSucessMessage}
              />
              <div className="sidebar-right">
                <PickIndicator levelData={levelData} />
                <RenderTimer isOverlayVisible={isOverlayVisible} />
                <Navbar showReturnButton />
              </div>
            </div>
          )
          : <h1>Loading...</h1>
      }
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Overlay isOverlayVisible={isOverlayVisible} />
    </div>
  );
}

export default RenderLevel;
