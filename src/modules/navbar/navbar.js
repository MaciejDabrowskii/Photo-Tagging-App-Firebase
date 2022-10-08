import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import LogButtons from "../login-logout-buttons/login-out-buttons";
import "./navbar.css";

function Navbar({ showReturnButton })
{
  return (
    <div className="navbar">
      {showReturnButton
      && (
      <Link to="/select-level" className="navbar-return-container">
        <FontAwesomeIcon className="navbar-return-icon" icon={faCircleLeft} />
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
