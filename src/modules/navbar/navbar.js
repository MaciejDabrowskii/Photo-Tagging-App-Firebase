import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/doodle-assets/arrow-left.png";
import LogButtons from "../login-logout-buttons/login-out-buttons";
import "./navbar.css";

function Navbar({ showReturnButton })
{
  return (
    <div className="navbar">
      {showReturnButton
      && (
      <Link to="/select-level" className="navbar-return-container">
        <img className="navbar-return-icon" alt="arrow left" src={arrowLeft} />
      </Link>
      )}
      <div className="navbar-logo-container">
        <h1 className="navbar-logo-text">Where&apos;s Walldo ?</h1>
      </div>
      <LogButtons />
    </div>
  );
}

export default Navbar;
