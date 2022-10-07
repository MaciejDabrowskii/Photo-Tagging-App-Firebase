/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";
import { firebaseMethods } from "../../contexts/firebase-context";
import { UserMethods } from "../../contexts/user-context";
import anonIcon from "../../assets/anonIcon.png";
import avatarPlaceholder from "../../assets/avatar-placeholder.png";

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
    if (!isEmpty(user)) return navigate("/select-level");
  };

  return (
    <div className="buttons-container">
      {!isEmpty(user)
        ? (
          <>
            <div className="user-container">
              <img
                src={user.photoURL ? user.photoURL : avatarPlaceholder}
                alt={user.displayName}
                className="suer-image"
              />
              <p
                className="user-name"
              >
                {user.displayName}
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogOut}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              <p>Logout</p>
            </button>
          </>
        )
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
