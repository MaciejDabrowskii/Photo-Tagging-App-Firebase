/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function Marker({ pick, imageSize })
{
  const { coordinates, name } = pick;

  const [textDivDimension, setTextDivDimension] = useState(
    { width: 0, height: 0 },
  );

  const [pinDivDimension, setPinDivDimension] = useState(
    { width: 0, height: 0 },
  );

  const [hover, setHover] = useState(false);

  const textMarker = useRef();

  const markerPin = useRef();

  useEffect(() =>
  {
    const textWidth = textMarker.current.offsetWidth;

    const textHeight = textMarker.current.offsetHeight;

    const pinWidth = markerPin.current.offsetWidth;

    const pinHeight = markerPin.current.offsetHeight;

    setTextDivDimension({ width: textWidth, height: textHeight });
    setPinDivDimension({ width: pinWidth, height: pinHeight });
  }, []);

  const calculateOverflow = () =>
  {
    const { width } = imageSize;

    console.log("calculateOverflow", textDivDimension.width, pinDivDimension.width);

    return coordinates.x + textDivDimension.width + pinDivDimension.width < width;
  };

  const textStyleHover = () => (
    calculateOverflow()
      ? { left: 0, transition: ".5s" }
      : { right: 0, transition: ".5s" });

  const textStyle = () => (
    calculateOverflow()
      ? { left: `-${textDivDimension.width}px` }
      : { right: `-${textDivDimension.width}px` }
  );

  return (
    <div
      className="marker-container"
      style={{
        position: "absolute",
        left: `${coordinates.x - pinDivDimension.width / 2}px`,
        top: `${coordinates.y - pinDivDimension.height}px`,
      }}
    >
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",

      }}
      >
        <div ref={markerPin}>
          <FontAwesomeIcon
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            icon={faLocationPin}
            className="marker"
          />
        </div>
        <div
          className="text-div-wrapper"
          style={calculateOverflow() ? {
            left: `${pinDivDimension.width}px`,
            width: `${textDivDimension.width}px`,
          } : {
            right: `${pinDivDimension.width}px`,
            width: `${textDivDimension.width}px`,
          }}
        >
          <div
            className="text-wrapper"
            style={{
              width: `${textDivDimension.width}px`,
              height: `${textDivDimension.height}px`,
            }}
          >
            <p
              className="marker-text"
              ref={textMarker}
              style={
                hover ? textStyleHover() : textStyle()
              }
            >
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marker;
