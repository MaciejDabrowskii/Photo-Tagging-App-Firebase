import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Spinner({ providedClass })
{
  return (
    <div className={`${providedClass}-spinner-container`}>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse spinner" />
    </div>
  );
}

export default Spinner;
