import React from "react";
import { Navigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { UserMethods } from "../../contexts/user-context";

function Protect({ children })
{
  const { user } = UserMethods();

  console.log("user", user, isEmpty(user));

  if (isEmpty(user))
  {
    return <Navigate to="/" />;
  }

    <Navigate to="/" />;

    return children;
}

export default Protect;
