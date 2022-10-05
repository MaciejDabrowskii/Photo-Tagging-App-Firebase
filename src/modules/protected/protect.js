import React from "react";
import { Navigate } from "react-router-dom";
import { UserMethods } from "../../contexts/user-context";

function Protect({ children })
{
  const { user } = UserMethods();

  const x = () => (user ? "true" : "false");

  console.log("user", user, x());

  if (!user)
  {
    return <Navigate to="/" />;
  }

  return children;
}

export default Protect;
