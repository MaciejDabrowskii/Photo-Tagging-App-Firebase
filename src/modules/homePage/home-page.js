import React from "react";
import LogButtons from "../Login-Logout-buttons/login-out-buttons";
import { UserMethods } from "../../contexts/user-context";

function HomePage()
{
  const { user } = UserMethods();

  return (
    <div className="home-page">
      {(user)
        ? (
          <>
            <h1>You are already logged in</h1>
            <LogButtons />
          </>
        )
        : (
          <LogButtons />
        )}
    </div>
  );
}

export default HomePage;
