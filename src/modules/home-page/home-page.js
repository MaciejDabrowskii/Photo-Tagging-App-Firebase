/* eslint-disable consistent-return */
import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import LogButtons from "../login-logout-buttons/login-out-buttons";
import { UserMethods } from "../../contexts/user-context";
import "./home-page.css";

function HomePage()
{
  const { user } = UserMethods();

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
      <h1 className="home-page-logo">Where&apos;s Walldo ?</h1>
      <div className="home-page-login-wrapper">
        <h3 className="home-page-login-header">Log in:</h3>
        <LogButtons />
      </div>

    </div>
  );
}

export default HomePage;
