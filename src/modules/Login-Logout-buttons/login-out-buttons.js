/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { firebaseMethods } from "../../contexts/firebase-context";
import { UserMethods } from "../../contexts/user-context";
import anonIcon from "../../assets/anonIcon.png";

function LogButtons()
{
  const { signIn, LogOutGoogle } = firebaseMethods();

  const { user, setUser } = UserMethods();

  const navigate = useNavigate();

  const handleSignInGoogle = async () =>
  {
    try
    {
      await signIn();
    }
    catch (error)
    {
      console.log(error);
    }
  };

  const handleLogOut = async () =>
  {
    user.email
      ? await LogOutGoogle()
        .catch((error) => console.log(error))
      : setUser({});
    return navigate("/");
  };

  const handleLogIn = async () =>
  {
    await handleSignInGoogle()
      .catch((error) => console.log(error));
  };

  useEffect(() =>
  {
    if (user)
    {
      return navigate("/game");
    }
  }, [user]);

  return (
    <div className="buttons-container">
      {user
        ? (<button type="button" onClick={handleLogOut}>Logout</button>)
        : (
          <>
            <GoogleButton
              className="btn-login-google"
              onClick={handleLogIn}
            />
            <button
              className="btn-login-anon"
              type="button"
            >
              <img src={anonIcon} alt="Anonymous" />
              <p>Anonymous</p>
            </button>
          </>
        )}
    </div>
  );
}

export default LogButtons;
