import React from "react";

function Marker({ pick })
{
  const { coordinates, name } = pick;

  return (
    <div
      className="marker-container"
      style={{
        position: "absolute",
        left: `${coordinates.x - 3}px`,
        top: `${coordinates.y - 3}px`,
      }}
    >
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",

      }}
      >
        <div
          className="marker"
          style={{
            // position: "absolute",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            bottom: "0",
            backgroundColor: "red",
          }}
        />
        <div
          className="marker-text"
          style={{
            // position: "absolute",
            borderRadius: "10px",
            bottom: "0",
            backgroundColor: "blue",
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default Marker;
