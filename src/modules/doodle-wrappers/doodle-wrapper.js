import React from "react";

function DoodleWrapper({ children })
{
  return (
    <div className="doodle-wrapper .doodle-border-vertical">
      {children}
    </div>
  );
}

export default DoodleWrapper;
