/* eslint-disable consistent-return */
import React, { useEffect } from "react";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import LogButtons from "../login-logout-buttons/login-out-buttons";
import { UserMethods } from "../../contexts/user-context";

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
      <LogButtons />
    </div>
  );
}

export default HomePage;
