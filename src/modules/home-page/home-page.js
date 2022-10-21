/* eslint-disable consistent-return */
import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import LogButtons from "../login-logout-buttons/login-out-buttons";
import { userMethods } from "../../contexts/user-context";
import "./home-page.css";
import homePageImage from "../../assets/home-page-image.jpg";
import doodleSeparator
  from "../../assets/doodle-assets/doodle-border-irregular.png";

function HomePage()
{
  const { user } = userMethods();

  const navigate = useNavigate();

  useEffect(() =>
  {
    if (!isEmpty(user))
    {
      return navigate("/select-level");
    }
  }, [user]);

  return (
    <div className="home-page">
      <img
        src={homePageImage}
        alt="Where is Wally"
        className="home-page-image"
      />
      <div className="home-page-login-container">
        <div className="home-page-login-wrapper">
          <div className="home-page-header-wrapper">
            <h1 className="home-page-title">Where&apos;s Walldo ?</h1>
            <p className="home-page-subtitle">- A Photo Tagging App</p>
            <span className="separator-curved">
              <img src={doodleSeparator} alt="curved line" />
            </span>
          </div>
          <h3 className="home-page-login-header">Log in:</h3>
          <LogButtons />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
