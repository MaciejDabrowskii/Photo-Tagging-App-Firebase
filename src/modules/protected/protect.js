import React from "react";
import { Navigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { userMethods } from "../../contexts/user-context";

function Protect({ children })
{
  const { user } = userMethods();

  if (isEmpty(user))
  {
    return <Navigate to="/" />;
  }

    <Navigate to="/" />;

    return children;
}

export default Protect;
